import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, type ReactNode } from 'react';
import { auth } from './config';
import { AuthContext } from './AuthContext';
import { type User } from 'firebase/auth';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, firebaseUser => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
};
