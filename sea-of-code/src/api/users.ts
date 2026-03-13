import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ranks } from '../constants/constants';
import type { UserData } from '../types/types';
import { db } from '../firebase/config';

export const createUser = async (userId: string) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      const newUser = {
        nickname: userId,
        rank: ranks.unga.name,
        clan: '',
        defeats: 0,
        fighting: 0,
        first_battle: false,
        fleet_storm: 0,
        miles_at_sea: 0,
        sea_wolf: 0,
        sniper: 0,
        to_rank: 0,
        victories: 0,
      };

      await setDoc(userDocRef, newUser);
      return newUser;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
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

export const updateUserData = async (userId: string, data: Partial<UserData>) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, data);
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
};
