import type { FieldValue, Timestamp } from 'firebase/firestore';

export interface UserData {
  nickname: string;
  rank: string;
  clan: string;
  defeats: number;
  fighting: number;
  first_battle: boolean;
  fleet_storm: number;
  miles_at_sea: number;
  sea_wolf: number;
  sniper: number;
  to_rank: number;
  victories: number;
}

export type FirestoreUser = {
  uid: string;
  email: string | null;
  displayName: string;
  createdAt: Timestamp;
  stats: UserStats;
};

export type UserStats = {
  rank: string;
  victories: number;
  defeats: number;
  battles: number;
  first_battle: boolean;
  fleet_storm: number;
  miles_at_sea: number;
  sea_wolf: number;
  sniper: number;
  to_rank: number;
};

export type FirestoreUserCreate = Omit<FirestoreUser, 'createdAt'> & {
  createdAt: FieldValue;
};
