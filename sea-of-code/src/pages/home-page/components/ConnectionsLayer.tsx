import type { Level } from '../../../types/level';

interface ConnectionsLayerProps {
  levels: Level[];
  completedSet: Set<string>;
  availableSet: Set<string>;
}

interface SvgPaths {
  id: string;
  d: string;
  isCompleted: boolean;
  isAvailable: boolean;
}

const ConnectionsLayer = ({ levels, availableSet, completedSet }: ConnectionsLayerProps) => {
  const levelMap = new Map(levels.map(lvl => [lvl.id, lvl]));

  const paths: SvgPaths[] = [];

  levels.forEach(level => {
    level.connections?.forEach(targetId => {
      const target = levelMap.get(targetId);

      if (target) {
        const d = `M ${level.position.x} ${level.position.y} L ${target.position.x} ${target.position.y}`;
        const isCompleted = completedSet.has(level.id) && completedSet.has(target.id);
        const isAvailable = availableSet.has(target.id) && !completedSet.has(target.id);

        paths.push({ id: `${level.id}-${targetId}`, d, isCompleted, isAvailable });
      }
    });
  });

  return (
    <svg
      className='pointer-events-none absolute inset-0 z-0 h-full w-full'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      {paths.map(({ id, d, isCompleted, isAvailable }) => (
        <path
          key={id}
          d={d}
          fill='none'
          stroke={isCompleted ? '#4ade80' : 'var(--color-text)'}
          strokeWidth='2'
          strokeDasharray={isCompleted || isAvailable ? 'none' : '10 10'}
          opacity={isCompleted || isAvailable ? '1' : '0.35'}
          strokeLinecap='round'
          strokeLinejoin='round'
          vectorEffect='non-scaling-stroke'
        />
      ))}
    </svg>
  );
};

export default ConnectionsLayer;
