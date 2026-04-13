import { motion } from 'motion/react';
import type { Level } from '../../../types/level';
import ConnectionsLayer from './ConnectionsLayer';
import LevelComponent from './LevelComponent';

interface LevelSelectorProps {
  levels: Level[];
  completedLevels: string[];
  selectedLevel: string | null;
  onSelectLevel: (level: string) => void;
}

const LevelSelector = ({
  levels,
  completedLevels,
  selectedLevel,
  onSelectLevel,
}: LevelSelectorProps) => {
  const completedSet = new Set(completedLevels);
  const availableSet = new Set<string>();

  const hasCompletedInTopic = levels.some(level => completedSet.has(level.id));

  levels.forEach(level => {
    if (completedSet.has(level.id)) {
      level.connections?.forEach(targetId => {
        availableSet.add(targetId);
      });
    }
  });

  if (!hasCompletedInTopic && levels.length > 0) {
    availableSet.add(levels[0].id);
  }

  return (
    <motion.div
      key={'operation'}
      initial={{ opacity: 0, filter: 'blur(3px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(3px)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={'absolute top-0 left-0 z-0 h-full w-full items-center justify-center px-25 py-15'}
    >
      <div className='relative h-full w-full'>
        <ConnectionsLayer levels={levels} availableSet={availableSet} completedSet={completedSet} />

        {levels.map(lvl => {
          const isSelected = selectedLevel === lvl.id;
          const isCompleted = completedSet.has(lvl.id);

          const isAvailable = availableSet.has(lvl.id) || isCompleted;
          const isDisabled = !isAvailable;

          return (
            <LevelComponent
              key={lvl.id}
              id={lvl.id}
              position={lvl.position}
              number={lvl.number}
              difficulty={lvl.difficulty}
              isSelected={isSelected}
              isCompleted={isCompleted}
              isDisabled={isDisabled}
              onSelectLevel={onSelectLevel}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default LevelSelector;
