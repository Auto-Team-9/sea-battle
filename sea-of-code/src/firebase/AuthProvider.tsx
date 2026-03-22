import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, type ReactNode } from 'react';
import { auth } from './config';
import { AuthContext } from './AuthContext';
import { type User } from 'firebase/auth';
import { getOrCreateUser } from '../api/users';
import type { FirestoreUser } from '../types/types';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<FirestoreUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async firebaseUser => {
      if (firebaseUser) {
        try {
          const data = await getOrCreateUser(firebaseUser);
          setUserData(data);
        } catch (error) {
          console.error('User init error:', error);
        }
      } else {
        setUserData(null);
      }

      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, userData, loading }}>{children}</AuthContext.Provider>
  );
};
