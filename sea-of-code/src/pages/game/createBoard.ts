import type { Board } from '../../types/types';

const letters = ['', 'A', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К'];

export const createBoard = (): Board => {
  return Array.from({ length: 11 }, (_, y) =>
    Array.from({ length: 11 }, (_, x) => {
      if (y === 0 && x !== 0) {
        return {
          type: 'label',
          label: letters[x],
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
