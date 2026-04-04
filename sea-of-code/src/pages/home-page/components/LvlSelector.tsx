import { levelsByTopic } from '../../../constants/levels';
import { Topics } from '../../../types/quiz';
import ConnectionsLayer from './ConnectionsLayer';
import LevelComponent from './LvlComponent';

interface LvlSelectorProps {
  currentTopic: Topics;
  selectedLevel: number | null;
  onSelectLevel: (level: number) => void;
}

const LevelSelector = ({ currentTopic, selectedLevel, onSelectLevel }: LvlSelectorProps) => {
  const levels = levelsByTopic[currentTopic];

  return (
    <div className='absolute top-0 left-0 z-0 h-full w-full items-center justify-center px-25 py-15'>
      <div className='relative h-full w-full'>
        <ConnectionsLayer levels={levels} />

        {levels.map(lvl => {
          const isSelected = selectedLevel === lvl.id;

          return (
            <LevelComponent
              key={lvl.id}
              x={lvl.x}
              y={lvl.y}
              number={lvl.id}
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
