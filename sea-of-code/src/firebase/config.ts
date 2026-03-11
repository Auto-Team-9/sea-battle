import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { ranks } from '../constants/ranks';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

// update USER DATA
