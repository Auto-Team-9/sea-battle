import type { Board, Orientation } from '../../../types/types';

export function canPlaceShip(
  board: Board,
  size: number,
  row: number,
  col: number,
  orientation: Orientation
): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const isGameArea = (r: number, c: number) => r >= 1 && r < rows && c >= 1 && c < cols;

  if (orientation === 'horizontal' && col + size > cols) return false;
  if (orientation === 'vertical' && row + size > rows) return false;

  const isFree = (r: number, c: number): boolean => {
    if (!isGameArea(r, c)) return true;
    const cell = board[r][c];
    return !cell.hasShip;
  };

  for (let i = 0; i < size; i++) {
    const r = orientation === 'horizontal' ? row : row + i;
    const c = orientation === 'horizontal' ? col + i : col;

    if (!isFree(r, c)) return false;

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (!isFree(nr, nc)) {
          return false;
        }
      }
    }
  }
  return true;
}
