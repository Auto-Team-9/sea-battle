import type { Key } from 'react';
import { CELL_SIZE } from '../../../../constants/constants';
import type { TargetID } from '../../../../types/types';

const GameBoard = ({ targetId }: TargetID) => {
  const board = Array.from({ length: CELL_SIZE * CELL_SIZE }).map((_, i: Key) => (
    <div
      key={i}
      className='doodle-cell hover: h-10 w-10 cursor-pointer transition-colors hover:bg-gray-500'
    ></div>
  ));

  return (
    <div className='doodle-game-board m-0 flex w-101 flex-wrap' id={targetId}>
      {board}
    </div>
  );
};

export default GameBoard;
