import type { ActionAreaProps } from '../../../../../types/quiz';

export const ActionArea = ({ submitted, selected, isCorrect, onFire }: ActionAreaProps) => {
  if (!submitted) {
    return (
      <button
        disabled={!selected}
        onClick={onFire}
        className='doodle-border w-full mt-2 px-6 py-2 text-xl font-bold !bg-amber-500 text-white cursor-pointer transition-colors hover:animate-pulse disabled:cursor-not-allowed disabled:opacity-40'
      >
        Fire!
      </button>
    );
  }
  return (
    <p className={`text-center text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
      {isCorrect ? 'Hit!' : 'Miss!'}
    </p>
  );
};
