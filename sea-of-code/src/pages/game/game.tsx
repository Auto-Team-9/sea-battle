import { useCallback, useState } from 'react';
import GamePhase from './components/game-phase/game-phase';
import { createBoard } from './utils/createBoard';
import PlacementPhase from './components/placement-phase/placementPhase';
import { createEnemyBoard } from './utils/createEnemyBoard';
import { findShipCells, markSurroundingCells } from './utils/findShipCells';
import { BOARD_SIZE } from '../../constants/constants';

const Game = () => {
  // const [phase, setPhase] = useState('placement');
  const [phase, setPhase] = useState('playerTurn');

  const [playerBoard, setPlayerBoard] = useState(createBoard());
  const [enemyBoard, setEnemyBoard] = useState(createEnemyBoard());

  const handleCheckShip = useCallback((row: number, col: number) => {
    setEnemyBoard(prevBoard => {
      if (row < 1 || row > BOARD_SIZE || col < 1 || col > BOARD_SIZE) {
        return prevBoard;
      }
      if (prevBoard[row][col].isHit) {
        return prevBoard;
      }
      let updatedBoard = prevBoard.map((rowArr, rIdx) =>
        rIdx === row
          ? rowArr.map((cell, cIdx) => (cIdx === col ? { ...cell, isHit: true } : cell))
          : rowArr
      );
      const targetCell = updatedBoard[row][col];
      if (targetCell.type === 'cell' && targetCell.hasShip) {
        const shipCells = findShipCells(updatedBoard, row, col);
        const isSunk =
          shipCells.length > 0 && shipCells.every(([r, c]) => updatedBoard[r][c].isHit);
        if (isSunk) {
          updatedBoard = markSurroundingCells(updatedBoard, shipCells);
        }
      }

      return updatedBoard;
    });
  }, []);

  return (
    <section className='doodle-border relative mx-auto my-4 flex min-h-screen w-full flex-col items-center gap-4 overflow-hidden bg-center p-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
      {phase === 'placement' && (
        <PlacementPhase
          board={playerBoard}
          setBoard={setPlayerBoard}
          startGame={() => setPhase('playerTurn')}
        />
      )}
      {phase !== 'placement' && (
        <GamePhase
          phase={phase}
          playerBoard={playerBoard}
          enemyBoard={enemyBoard}
          setPhase={setPhase}
          setEnemyBoard={setEnemyBoard}
          handleCheckShip={handleCheckShip}
        />
      )}
    </section>
  );
};

export default Game;
