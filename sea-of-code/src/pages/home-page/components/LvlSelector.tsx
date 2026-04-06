import type { Level } from '../../../types/level';
import ConnectionsLayer from './ConnectionsLayer';
import LevelComponent from './LvlComponent';

interface LvlSelectorProps {
  levels: Level[];
  selectedLevel: string | null;
  onSelectLevel: (level: string) => void;
}

const LevelSelector = ({ levels, selectedLevel, onSelectLevel }: LvlSelectorProps) => {
  return (
    <div className='absolute top-0 left-0 z-0 h-full w-full items-center justify-center px-25 py-15'>
      <div className='relative h-full w-full'>
        <ConnectionsLayer levels={levels} />

        {levels.map(lvl => {
          const isSelected = selectedLevel === lvl.id;

          return (
            <LevelComponent
              key={lvl.id}
              id={lvl.id}
              position={lvl.position}
              number={lvl.number}
              difficulty={lvl.difficulty}
              isSelected={isSelected}
              onSelectLevel={onSelectLevel}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LevelSelector;
