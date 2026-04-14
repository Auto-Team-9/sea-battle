import { BOARD_SIZE, SHIPS } from '../../../constants/constants';
import type { Board, Orientation } from '../../../types/types';
import { canPlaceShip } from './canPlaceShip';
import { createBoard } from './createBoard';

function placeShip(
  board: Board,
  row: number,
  col: number,
  length: number,
  orientation: Orientation
): void {
  for (let i = 0; i < length; i++) {
    if (orientation === 'horizontal') {
      board[row][col + i].hasShip = true;
    } else {
      board[row + i][col].hasShip = true;
    }
  }
}

export function createEnemyBoard(): Board {
  const MAX_ATTEMPTS = 10000;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const board = createBoard();
    let success = true;

    for (const [count, length] of SHIPS) {
      for (let i = 0; i < count; i++) {
        let placed = false;
        for (let tryCount = 0; tryCount < MAX_ATTEMPTS; tryCount++) {
          const row = Math.floor(Math.random() * (BOARD_SIZE - 1)) + 1;
          const col = Math.floor(Math.random() * (BOARD_SIZE - 1)) + 1;
          const horizontal = Math.random() < 0.5 ? 'horizontal' : 'vertical';

          if (canPlaceShip(board, length, row, col, horizontal)) {
            placeShip(board, row, col, length, horizontal);
            placed = true;
            break;
          }
        }
        if (!placed) {
          success = false;
          break;
        }
      }
      if (!success) break;
    }

    if (success) return board;
  }

  return createBoard();
}
