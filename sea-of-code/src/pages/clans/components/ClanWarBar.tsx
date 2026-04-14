import { clans } from '../../../constants/images';
import type { ClanKey, ClanStatsMap } from '../../../types/clans.type';

interface ClanWarBarProps {
  clanStats: ClanStatsMap;
}

const ClanWarBar = ({ clanStats }: ClanWarBarProps) => {
  const keys = Object.keys(clans) as ClanKey[];
  const totalVictories = keys.reduce((sum, key) => sum + (clanStats[key]?.victories ?? 0), 0);

  if (totalVictories === 0) return null;

  return (
    <div className='w-full flex flex-col gap-1'>
      <p className='text-xs opacity-50 text-center uppercase tracking-widest'>War standings</p>
      <div className='flex w-full h-4 overflow-hidden rounded-sm doodle-border'>
        {keys.map(key => {
          const victories = clanStats[key]?.victories ?? 0;
          const pct = (victories / totalVictories) * 100;
          return (
            <div
              key={key}
              title={`${clans[key].name}: ${victories} victories`}
              style={{ width: `${pct}%`, backgroundColor: clans[key].color, transition: 'width 0.5s ease' }}
            />
          );
        })}
      </div>
      <div className='flex justify-between text-xs opacity-60 px-0.5'>
        {keys.map(key => (
          <span key={key} style={{ color: clans[key].color }}>
            {clans[key].name.split(' ').pop()} {clanStats[key]?.victories ?? 0}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ClanWarBar;
