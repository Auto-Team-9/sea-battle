import type { FieldValue, Timestamp } from 'firebase/firestore';

export interface UserData {
  displayName: string;
  stats: UserStats;
}

export type FirestoreUser = {
  uid: string;
  email: string | null;
  displayName: string;
  createdAt: Timestamp;
  stats: UserStats;
};

export type ClanStats = {
  victories: number;
  defeats: number;
  battles: number;
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
  clan: string | null;
  streak: number;
  lastLoginDate: Timestamp | null;
  completedLevels: string[];
  clanJoinedAt: Timestamp | null;
  clanStats: ClanStats;
  answeredQuestions: string[];
};

export type FirestoreUserCreate = {
  uid: string;
  email: string | null;
  displayName: string;
  createdAt: FieldValue;
  stats: Omit<UserStats, 'lastLoginDate' | 'clanJoinedAt'> & {
    lastLoginDate: FieldValue;
    clanJoinedAt: null;
  };
};

export interface ShipData {
  id: number;
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
  playerBoard: Board;
  enemyBoard: Board;
  setPhase?: React.Dispatch<React.SetStateAction<string>>;
  setEnemyBoard?: React.Dispatch<React.SetStateAction<Board>>;
  handleCheckShip?: (row: number, col: number) => void;
  isPlayerTurn?: boolean;
  gameResult?: 'win' | 'lose' | null;
  onRestart?: () => void;
  showModal?: boolean;
  onModalClose?: () => void;
  onModalCorrect?: (questionId: string) => void;
  answeredIds?: string[];
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

export interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
  progress?: number;
  max?: number;
  done: boolean;
}

export interface PixelitConfig {
  to: HTMLCanvasElement;
  from: HTMLImageElement;
  scale?: number;
}
