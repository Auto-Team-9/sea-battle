import { useCallback, useState } from 'react';
import type { Orientation, PlacementPhaseType, ShipData } from '../../../../types/types';
import { inititalShips, BOARD_SIZE } from '../../../../constants/constants';
import GameBoard from '../game-board/gameBoard';
import Ships from './ships/ships';
import { canPlaceShip } from '../../utils/canPlaceShip';
import { createBoard } from '../../utils/createBoard';

const PlacementPhase = ({ board, setBoard, startGame }: PlacementPhaseType) => {
  const [remainingShips, setRemainingShips] = useState<ShipData[]>(inititalShips);
  const [isPlacing, setIsPlacing] = useState(false);

  const handleShipPlace = useCallback(
    (shipId: number, row: number, col: number, orientation: Orientation) => {
      const ship = remainingShips.find(s => s.id === shipId);
      if (!ship) return false;

      if (!canPlaceShip(board, ship.size, row, col, orientation)) {
        return false;
      }

      setIsPlacing(true);
      setTimeout(() => setIsPlacing(false), 100);

      setBoard(prevBoard => {
        const newBoard = prevBoard.map(rowArr => [...rowArr]);
        for (let i = 0; i < ship.size; i++) {
          const r = orientation === 'horizontal' ? row : row + i;
          const c = orientation === 'horizontal' ? col + i : col;
          newBoard[r][c] = { ...newBoard[r][c], hasShip: true, shipId };
        }
        return newBoard;
      });

      setRemainingShips(prev => prev.filter(s => s.id !== shipId));
      return true;
    },
    [remainingShips, board, setBoard]
  );

  const handleShipRemove = useCallback(
    (row: number, col: number) => {
      if (isPlacing) return;

      const cell = board[row][col];
      if (!cell.hasShip || cell.shipId === undefined) return;

      const shipId = cell.shipId;
      const removedShip = inititalShips.find(s => s.id === shipId);
      if (!removedShip) return;

      setBoard(prev => {
        const newBoard = prev.map(rowArr =>
          rowArr.map(cell => {
            if (cell.shipId === shipId) {
              return { ...cell, hasShip: false, shipId: undefined };
            }
            return cell;
          })
        );
        return newBoard;
      });

      setRemainingShips(prev => {
        if (prev.some(s => s.id === shipId)) return prev;
        return [...prev, removedShip];
      });
    },
    [board, setBoard, isPlacing]
  );

  const handleAutoPlace = useCallback(() => {
    const orientations: Orientation[] = ['horizontal', 'vertical'];
    let newBoard = createBoard();

    for (const ship of inititalShips) {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 200) {
        attempts++;
        const orientation = orientations[Math.floor(Math.random() * 2)];
        const row = Math.floor(Math.random() * (BOARD_SIZE - 1)) + 1;
        const col = Math.floor(Math.random() * (BOARD_SIZE - 1)) + 1;
        if (canPlaceShip(newBoard, ship.size, row, col, orientation)) {
          for (let i = 0; i < ship.size; i++) {
            const r = orientation === 'horizontal' ? row : row + i;
            const c = orientation === 'horizontal' ? col + i : col;
            newBoard[r][c] = { ...newBoard[r][c], hasShip: true, shipId: ship.id };
          }
          placed = true;
        }
      }
    }

    setBoard(newBoard);
    setRemainingShips([]);
  }, [setBoard]);

  const handleClear = useCallback(() => {
    setBoard(createBoard());
    setRemainingShips(inititalShips);
  }, [setBoard]);

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='my-4 text-center text-3xl'>Placement phase</h1>

      <GameBoard board={board} onShipClick={handleShipRemove} />
      <Ships ships={remainingShips} onPlaceShip={handleShipPlace} />

      <div className='flex gap-4'>
        <button
          onClick={handleClear}
          disabled={remainingShips.length === inititalShips.length}
          className='doodle-border cursor-pointer px-6 py-2 text-xl transition-colors hover:animate-pulse hover:not-disabled:text-amber-500 disabled:cursor-not-allowed disabled:opacity-50'
        >
          Clear
        </button>

        <button
          onClick={handleAutoPlace}
          className='doodle-border cursor-pointer px-6 py-2 text-xl transition-colors hover:animate-pulse hover:text-amber-500'
        >
          Auto Place
        </button>

        <button
          onClick={startGame}
          disabled={remainingShips.length !== 0}
          className='doodle-border cursor-pointer px-6 py-2 text-xl transition-colors hover:animate-pulse hover:not-disabled:text-amber-500 disabled:cursor-not-allowed disabled:opacity-50'
        >
          Let's Go!
        </button>
      </div>
    </div>
  );
};

export default PlacementPhase;
