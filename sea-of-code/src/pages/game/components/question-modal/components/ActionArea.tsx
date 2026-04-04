import type { ActionAreaProps } from '../../../../../types/quiz';

export const ActionArea = ({ submitted, selected, isCorrect, onFire }: ActionAreaProps) => {
  if (!submitted) {
    return (
      <button
        disabled={!selected}
        onClick={onFire}
        className='w-full cursor-pointer py-1.5 text-sm font-bold text-[--color-text] transition-opacity disabled:cursor-not-allowed disabled:opacity-40'
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
