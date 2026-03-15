import type { Board, Cell } from '../../../../types/types';

const Cell = ({ cell }: { cell: Cell }) => {
  if (cell.type === 'label') {
    return (
      <div className='doodle-cell flex items-center justify-center font-bold'>{cell.label}</div>
    );
  }

  return (
    <div className='doodle-cell h-10 w-10'>
      {cell.hasShip && '🚢'}
      {cell.isHit && '💥'}
    </div>
  );
};

const GameBoard = ({ board }: { board: Board }) => {
  return (
    <div className='doodle-game-board grid w-fit grid-cols-11'>
      {board.map((row, y) => row.map((cell, x) => <Cell key={`${x}-${y}`} cell={cell} />))}
    </div>
  );
};

export default GameBoard;
