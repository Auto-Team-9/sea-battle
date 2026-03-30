import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import type { FirestoreUser, FirestoreUserCreate } from '../types/types';
import { db } from '../firebase/config';
import type { User } from 'firebase/auth';

export const getOrCreateUser = async (user: User): Promise<FirestoreUser> => {
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    return snap.data() as FirestoreUser;
  }

  const newUser: FirestoreUserCreate = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName ?? 'Player',
    createdAt: serverTimestamp(),
    stats: {
      rank: 'unga',
      victories: 0,
      defeats: 0,
      battles: 0,
      first_battle: false,
      fleet_storm: 0,
      miles_at_sea: 0,
      sea_wolf: 0,
      sniper: 0,
      to_rank: 100,
      clan: null,
      streak: 1,
      lastLoginDate: serverTimestamp(),
      clanJoinedAt: null,
    },
  };

  await setDoc(ref, newUser);

  const createdSnap = await getDoc(ref);
  return createdSnap.data() as FirestoreUser;
};

export const getDataFromUser = async (userId: string) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      return userDocSnap.data();
    } else {
      throw new Error(`User with ID "${userId}" not found`);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const joinClan = async (userId: string, clanKey: string, isChange = false) => {
  const ref = doc(db, 'users', userId);
  const updates: Record<string, unknown> = {
    'stats.clan': clanKey,
    'stats.clanJoinedAt': serverTimestamp(),
  };

  if (isChange) {
    updates['stats.victories'] = 0;
    updates['stats.defeats'] = 0;
    updates['stats.battles'] = 0;
    updates['stats.fleet_storm'] = 0;
    updates['stats.miles_at_sea'] = 0;
    updates['stats.sea_wolf'] = 0;
    updates['stats.sniper'] = 0;
    updates['stats.to_rank'] = 0;
  }

  await updateDoc(ref, updates);
};
