import type { Board, Cell } from '../../../../types/types';

const Cell = ({
  cell,
  row,
  col,
  onShipClick,
  enemy,
}: {
  cell: Cell;
  row: number;
  col: number;
  onShipClick?: (row: number, col: number) => void;
  enemy?: boolean;
}) => {
  if (cell.type === 'label') {
    return (
      <div className='doodle-cell flex items-center justify-center font-bold'>{cell.label}</div>
    );
  }

  const handleClick = () => {
    if (onShipClick && !cell.isHit) {
      onShipClick(row, col);
    }
  };

  return (
    <div
      className={`doodle-cell droppable flex h-10 w-10 items-center justify-center ${cell.hasShip && !enemy ? 'has-ship' : ''} cursor-pointer`}
      data-row={row}
      data-col={col}
      onClick={handleClick}
    >
      {cell.isHit && cell.hasShip && '💥'}
      {cell.isHit && !cell.hasShip && '❌'}
    </div>
  );
};

const GameBoard = ({
  board,
  onShipClick,
  enemy,
}: {
  board: Board;
  onShipClick?: (row: number, col: number) => void;
  enemy?: boolean;
}) => {
  return (
    <div className='doodle-game-board grid w-fit grid-cols-11'>
      {board.map((row, y) =>
        row.map((cell, x) => (
          <Cell
            key={`${x}-${y}`}
            cell={cell}
            row={y}
            col={x}
            onShipClick={onShipClick}
            enemy={enemy}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
