import type { PlacementPhaseType } from '../../../../types/types';
import GameBoard from '../game-board/gameBoard';
import Ships from './ships';

const PlacementPhase = ({ board, startGame }: PlacementPhaseType) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='my-4 text-center text-3xl'>Placement phase</h1>

      <div className='flex gap-8 p-4'>
        <Ships />
        <GameBoard board={board} />
      </div>

      <button
        onClick={startGame}
        className='doodle-border cursor-pointer px-4 text-3xl transition-colors hover:animate-pulse hover:text-amber-500'
      >
        Готов
      </button>
    </div>
  );
};

export default PlacementPhase;
