import { useState } from 'react';

import GamePhase from './components/game-phase/game-phase';
import { createBoard } from './createBoard';
import PlacementPhase from './components/placement-phase/placementPhase';
import DasboardLink from '../../components/links/dashboard-link';
import { QuestionModal } from './components/question-modal/questionModal';

const Game = () => {
  const [phase, setPhase] = useState('placement');
  const [playerBoard, setPlayerBoard] = useState(createBoard());
  const [enemyBoard, setEnemyBoard] = useState(createBoard());
  const [showModal, setShowModal] = useState(false);

  return (
    <section className='doodle-border relative mx-auto my-4 flex min-h-screen w-full flex-col items-center gap-4 overflow-hidden bg-center p-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
      <DasboardLink />
      <button
        className='doodle-border mx-auto cursor-pointer rounded-xs border-2 px-8 py-2 text-3xl text-[--color-text] transition-colors hover:animate-pulse hover:text-amber-500'
        onClick={() => setShowModal(true)}
      >
        Modal
      </button>

      {showModal && (
        <QuestionModal
          topic={'fundamentals'}
          difficulty={'Beginner'}
          onCorrect={() => {}}
          onClose={() => setShowModal(false)}
        />
      )}

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
