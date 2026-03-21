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

export type ShipType = {
  id: number;
  type: string;
  width: number;
  size: number;
  orientation: Orientation;
};

export type Orientation = 'horizontal' | 'vertical';

export interface ShipsType {
  handleChangeReady: () => void;
}

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

export type Phase = 'placement' | 'playerTurn' | 'enemyTurn';

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
