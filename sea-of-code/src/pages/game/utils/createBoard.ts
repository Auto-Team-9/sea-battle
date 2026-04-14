import type { Board } from '../../../types/types';
import { COL_LABELS, BOARD_SIZE } from '../../../constants/constants';

export const createBoard = (): Board => {
  return Array.from({ length: BOARD_SIZE }, (_, y) =>
    Array.from({ length: BOARD_SIZE }, (_, x) => {
      if (y === 0 && x !== 0) {
        return {
          type: 'label',
          label: COL_LABELS[x],
          hasShip: false,
          isHit: false,
        };
      }

      if (x === 0 && y !== 0) {
        return {
          type: 'label',
          label: String(y),
          hasShip: false,
          isHit: false,
        };
      }

      if (x === 0 && y === 0) {
        return {
          type: 'label',
          label: '',
          hasShip: false,
          isHit: false,
        };
      }

      return {
        type: 'cell',
        hasShip: false,
        isHit: false,
      };
    })
  );
};
