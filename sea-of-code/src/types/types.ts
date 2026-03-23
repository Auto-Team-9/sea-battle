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
export interface ShipType {
  img: string;
  alt: string;
  handleShipClick: (type: string) => void;
  selectedShip: number;
  type: string;
  width: number;
  size: number;
  orientation: Orientation;
}

export interface ShipProps extends ShipData {
  onPlace: (row: number, col: number, orientation: Orientation) => boolean;
}

export interface ShipsProps {
  ships: ShipData[];
  onPlaceShip: (shipId: number, row: number, col: number, orientation: Orientation) => boolean;
}

export type Orientation = 'horizontal' | 'vertical';

export interface GamePhaseType {
  phase: string;
  playerBoard: Board;
  enemyBoard: Board;
  setPhase?: React.Dispatch<React.SetStateAction<string>>;
  setEnemyBoard?: React.Dispatch<React.SetStateAction<Board>>;
}

export type PlacementPhaseType = {
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
  startGame: () => void;
};

export type Cell = {
  hasShip: boolean;
  isHit: boolean;
  label?: string;
  type: 'cell' | 'label';
  shipId?: number;
};

export type Board = Cell[][];

export type AbilityType = {
  name: string;
  count: number;
  handleAbilityClick: (ability: string) => void;
};
