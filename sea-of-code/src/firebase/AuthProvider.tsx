import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, type ReactNode } from 'react';
import { auth, db } from './config';
import { AuthContext } from './AuthContext';
import { type User } from 'firebase/auth';
import { getOrCreateUser } from '../api/users';
import type { FirestoreUser } from '../types/types';
import { doc, onSnapshot } from 'firebase/firestore';
import { tryUpdateLoginStreak } from './tryUpdateLoginStreak';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<FirestoreUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeSnapshot: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async firebaseUser => {
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
        unsubscribeSnapshot = null;
      }

      if (firebaseUser) {
        try {
          await getOrCreateUser(firebaseUser);

          await tryUpdateLoginStreak(firebaseUser.uid);

          const userRef = doc(db, 'users', firebaseUser.uid);

          unsubscribeSnapshot = onSnapshot(userRef, snapshot => {
            if (snapshot.exists()) {
              setUserData(snapshot.data() as FirestoreUser);
            }
          });
        } catch (error) {
          console.error('User error:', error);
          setUserData(null);
        }
      } else {
        setUserData(null);
      }

      setUser(firebaseUser);
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeSnapshot) unsubscribeSnapshot();
    };
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      if (user) {
        tryUpdateLoginStreak(user.uid);
      }
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, userData, loading }}>{children}</AuthContext.Provider>
  );
};
