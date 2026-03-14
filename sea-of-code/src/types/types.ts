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

export interface ShipType {
  img: string;
  alt: string;
  handleShipClick: (type: string) => void;
  selectedShip: number;
  type: string;
  width: number;
}

export interface ShipsType {
  handleCheckReady: () => void;
  isReady: boolean;
}

export type TargetID = {
  targetId: string;
};
