import type { ShipData } from '../types/types';

export const inititalShips: ShipData[] = [
  { id: 1, width: 160, size: 4, orientation: 'horizontal' },
  { id: 2, width: 120, size: 3, orientation: 'horizontal' },
  { id: 3, width: 120, size: 3, orientation: 'horizontal' },
  { id: 4, width: 80, size: 2, orientation: 'horizontal' },
  { id: 5, width: 80, size: 2, orientation: 'horizontal' },
  { id: 6, width: 80, size: 2, orientation: 'horizontal' },
  { id: 7, width: 40, size: 1, orientation: 'horizontal' },
  { id: 8, width: 40, size: 1, orientation: 'horizontal' },
  { id: 9, width: 40, size: 1, orientation: 'horizontal' },
  { id: 10, width: 40, size: 1, orientation: 'horizontal' },
];

export const BOARD_SIZE = 11;

export const SHIPS: [number, number][] = [
  [1, 4],
  [2, 3],
  [3, 2],
  [4, 1],
];

export const COL_LABELS = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
