import { BOARD_SIZE } from '../../../constants/constants';
import type { Board } from '../../../types/types';

export function findShipCells(
  board: Board,
  startRow: number,
  startCol: number
): [number, number][] {
  if (startRow < 1 || startRow > BOARD_SIZE || startCol < 1 || startCol > BOARD_SIZE) {
    return [];
  }

  const startCell = board[startRow]?.[startCol];
  if (!startCell || startCell.type !== 'cell' || !startCell.hasShip) {
    return [];
  }

  const queue: [number, number][] = [[startRow, startCol]];
  const visited = new Set<string>();
  const shipCells: [number, number][] = [];

  while (queue.length) {
    const [row, col] = queue.shift()!;
    const key = `${row},${col}`;
    if (visited.has(key)) continue;
    visited.add(key);

    const cell = board[row]?.[col];
    if (!cell || cell.type !== 'cell' || !cell.hasShip) continue;

    shipCells.push([row, col]);

    const neighbors: [number, number][] = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];
    for (const [nr, nc] of neighbors) {
      if (nr >= 1 && nr <= BOARD_SIZE && nc >= 1 && nc <= BOARD_SIZE) {
        if (!visited.has(`${nr},${nc}`)) {
          queue.push([nr, nc]);
        }
      }
    }
  }

  return shipCells;
}

export function markSurroundingCells(board: Board, shipCells: [number, number][]): Board {
  const newBoard = board.map(row => [...row]);
  const shipSet = new Set(shipCells.map(([r, c]) => `${r},${c}`));

  const directions: [number, number][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [row, col] of shipCells) {
    for (const [dr, dc] of directions) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr >= 1 && nr <= BOARD_SIZE && nc >= 1 && nc <= BOARD_SIZE) {
        if (shipSet.has(`${nr},${nc}`)) continue;
        const cell = newBoard[nr]?.[nc];
        if (cell && cell.type === 'cell' && !cell.isHit) {
          newBoard[nr][nc] = { ...cell, isHit: true };
        }
      }
    }
  }

  return newBoard;
}
