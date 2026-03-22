import { createContext } from 'react';
import { type User } from 'firebase/auth';
import type { FirestoreUser } from '../types/types';

type AuthContextType = {
  user: User | null;
  userData: FirestoreUser | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);
