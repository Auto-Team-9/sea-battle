import type { Difficulty, Position } from '../../../types/level';
import RoundIcon from '../../../styles/vendor/doodleCss/round.svg?react';
import { difficultyStyles } from '../../../constants/levels';

export interface LevelComponentProps {
  id: string;
  position: Position;
  number: number;
  difficulty: Difficulty;
  isSelected: boolean;
  isCompleted: boolean;
  isDisabled: boolean;
  onSelectLevel: (level: string) => void;
}

const LevelComponent = ({
  id,
  position,
  number,
  difficulty = 'Beginner',
  isSelected = false,
  isCompleted = false,
  isDisabled = false,
  onSelectLevel,
}: LevelComponentProps) => {
  const styles = difficultyStyles[difficulty];
  const selectedStyle = isSelected ? `${styles.active} ${styles.shadow}` : '';
  const completedStyle = isCompleted ? 'text-green-400' : '';
  const disabledStyle = isDisabled ? 'pointer-events-none text-[var(--color-text)]/35' : '';

  return (
    <div
      onClick={() => onSelectLevel(id)}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      className={`group absolute z-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center !rounded-full bg-[var(--color-bg-primary)] !p-0 text-sm transition duration-300 ease-in-out hover:scale-110 focus-visible:outline-2 active:scale-90 ${
        selectedStyle
      } ${completedStyle} ${disabledStyle} `}
    >
      <RoundIcon className='absolute h-fit fill-current text-current' />

      <span>{number}</span>
    </div>
  );
};

export default LevelComponent;
