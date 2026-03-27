import { useState } from 'react';

import GamePhase from './components/game-phase/game-phase';
import { createBoard } from './utils/createBoard';
import PlacementPhase from './components/placement-phase/placementPhase';
import { createEnemyBoard } from './utils/createEnemyBoard';

const Game = () => {
  // const [phase, setPhase] = useState('placement');
  const [phase, setPhase] = useState('playerTurn');

  const [playerBoard, setPlayerBoard] = useState(createBoard());
  const [enemyBoard, setEnemyBoard] = useState(createEnemyBoard());

  const handleCheckShip = (row: number, col: number) => {
    const newBoard = enemyBoard.map((rowArr, rIdx) =>
      rIdx === row
        ? rowArr.map((cell, cIdx) =>
            cIdx === col && cell.hasShip ? { ...cell, isHit: true } : cell
          )
        : rowArr
    );
    setEnemyBoard(newBoard);
  };

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
