import GameBoard from '../game-board/gameBoard';
import Ships from './ships';
import type { ShipsType } from '../../../../types/types';

const PlacementPhase = ({ handleCheckReady, isReady }: ShipsType) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-3xl text-[--color-text] transition-colors'>Фаза расстановки</h1>
      <GameBoard targetId='user' />
      {isReady && (
        <button className='doodle-border cursor-pointer px-6 py-2 text-3xl transition-colors hover:text-amber-500'>
          Готов
        </button>
      )}
      <Ships handleCheckReady={handleCheckReady} isReady={isReady} />
    </div>
  );
};

export default PlacementPhase;
