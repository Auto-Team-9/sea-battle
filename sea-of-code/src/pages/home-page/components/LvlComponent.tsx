import type { Difficulty } from '../../../types/quiz';
import RoundIcon from '../../../styles/vendor/doodleCss/round.svg?react';
import { difficultyStyles } from '../../../constants/levels';

export interface LevelComponentProps {
  x: number;
  y: number;
  number: number;
  difficulty: Difficulty;
  isSelected: boolean;
  onSelectLevel: (level: number) => void;
}

const LevelComponent = ({
  x,
  y,
  number,
  difficulty = 'Beginner',
  isSelected = false,
  onSelectLevel,
}: LevelComponentProps) => {
  const styles = difficultyStyles[difficulty];

  return (
    <div
      onClick={() => onSelectLevel(number)}
      style={{ left: `${x}%`, top: `${y}%` }}
      className={`group absolute z-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center !rounded-full bg-[var(--color-bg-primary)] !p-0 text-sm transition duration-300 ease-in-out hover:scale-110 focus-visible:outline-2 active:scale-90 ${!isSelected ? styles.hover : styles.active} ${isSelected ? `${styles.active} ${styles.shadow}` : ''} `}
    >
      <RoundIcon className='absolute h-fit fill-current text-current' />

      <span>{number}</span>
    </div>
  );
};

export default LevelComponent;
