import { useState } from 'react';

import GamePhase from './components/game-phase/game-phase';
import { createBoard } from './createBoard';
import PlacementPhase from './components/placement-phase/placementPhase';
import DasboardLink from '../../components/links/dashboard-link';

const Game = () => {
  const [phase, setPhase] = useState('placement');

  const [playerBoard, setPlayerBoard] = useState(createBoard());
  const [enemyBoard, setEnemyBoard] = useState(createBoard());

  return (
    <section className='doodle-border relative mx-auto my-4 flex min-h-screen w-full flex-col items-center gap-4 overflow-hidden bg-center p-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
      <DasboardLink />

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
        />
      )}
    </section>
  );
};

export default Game;
