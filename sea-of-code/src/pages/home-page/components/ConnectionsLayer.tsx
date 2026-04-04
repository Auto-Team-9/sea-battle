import type { Level } from '../../../types/types';

interface ConnectionsLayerProps {
  levels: Level[];
}

const ConnectionsLayer = ({ levels }: ConnectionsLayerProps) => {
  const levelMap = new Map(levels.map(lvl => [lvl.id, lvl]));

  const paths: { id: string; d: string }[] = [];

  levels.forEach(level => {
    level.connections?.forEach(targetNum => {
      const target = levelMap.get(targetNum);
      if (target) {
        const d = `M ${level.x} ${level.y} L ${target.x} ${target.y}`;
        paths.push({ id: `${level.id}-${targetNum}`, d });
      }
    });
  });

  return (
    <svg
      className='pointer-events-none absolute inset-0 z-0 h-full w-full'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      {paths.map(({ id, d }) => (
        <path
          key={id}
          d={d}
          fill='none'
          stroke='var(--color-text)'
          strokeWidth='2'
          strokeDasharray='10 10'
          opacity='0.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          vectorEffect='non-scaling-stroke'
        />
      ))}
    </svg>
  );
};

export default ConnectionsLayer;
