import type { Board, Cell } from '../../../../types/types';

const Cell = ({
  cell,
  row,
  col,
  onShipClick,
}: {
  cell: Cell;
  row: number;
  col: number;
  onShipClick?: (row: number, col: number) => void;
}) => {
  if (cell.type === 'label') {
    return (
      <div className='doodle-cell flex items-center justify-center font-bold'>{cell.label}</div>
    );
  }

  const handleClick = () => {
    if (cell.hasShip && onShipClick) {
      setTimeout(() => onShipClick(row, col), 0);
    }
  };

  return (
    <div
      className={`doodle-cell droppable h-10 w-10 ${cell.hasShip ? 'has-ship' : ''} cursor-pointer`}
      data-row={row}
      data-col={col}
      onClick={handleClick}
    >
      {cell.isHit && '💥'}
    </div>
  );
};

const GameBoard = ({
  board,
  onShipClick,
}: {
  board: Board;
  onShipClick?: (row: number, col: number) => void;
}) => {
  return (
    <div className='doodle-game-board grid w-fit grid-cols-11'>
      {board.map((row, y) =>
        row.map((cell, x) => (
          <Cell key={`${x}-${y}`} cell={cell} row={y} col={x} onShipClick={onShipClick} />
        ))
      )}
    </div>
  );
};

export default GameBoard;
