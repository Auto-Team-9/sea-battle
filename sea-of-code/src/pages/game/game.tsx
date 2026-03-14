import { Link } from 'react-router';
import PlacementPhase from './components/placement-phase/placementPhase';
import GamePhase from './components/game-phase/game-phase';
import { useCallback, useState } from 'react';

const Game = () => {
  const [isReady, setIsReady] = useState(false);

  const handleCheckReady = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <section
      id='game'
      className='doodle-border mx-auto my-4 flex min-h-screen w-full flex-col items-center gap-4 bg-center p-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'
    >
      <Link
        to={'/Auto-Team-9-Widget-Trainer/'}
        className='doodle-border mx-auto cursor-pointer rounded-xs border-2 px-8 py-2 text-3xl text-[--color-text] transition-colors hover:animate-pulse hover:text-amber-500'
      >
        Dashboard
      </Link>
      {isReady ? (
        <GamePhase />
      ) : (
        <PlacementPhase handleCheckReady={handleCheckReady} isReady={isReady} />
      )}
    </section>
  );
};

export default Game;
