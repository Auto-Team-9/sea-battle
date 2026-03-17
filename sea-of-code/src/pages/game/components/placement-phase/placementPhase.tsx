import { useCallback, useState } from 'react';
import type { PlacementPhaseType } from '../../../../types/types';
import GameBoard from '../game-board/gameBoard';
import Ships from './ships';

const PlacementPhase = ({ board, startGame }: PlacementPhaseType) => {
  const [isReady, setIsReady] = useState(false);

  const handleChangeReady = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='my-4 text-center text-3xl'>Placement phase</h1>

      <GameBoard board={board} />

      {isReady && (
        <button
          onClick={startGame}
          className='doodle-border cursor-pointer px-4 text-3xl transition-colors hover:animate-pulse hover:text-amber-500'
          disabled={!isReady}
        >
          Готов
        </button>
      )}

      <Ships handleChangeReady={handleChangeReady} />
    </div>
  );
};

export default PlacementPhase;
