import { clans } from '../../../constants/images';
import type { ClanKey, ClanRankingBoardProps } from '../../../types/clans.type';

const ClanRankingBoard = ({ clanStats }: ClanRankingBoardProps) => {
  const ranked = (Object.keys(clans) as ClanKey[])
    .map(key => {
      const stats = clanStats[key];
      const victories = stats?.victories ?? 0;
      const battles = stats?.battles ?? 0;
      const winRate = battles > 0 ? Math.round((victories / battles) * 100) : 0;
      return { key, victories, battles, members: stats?.members ?? 0, winRate };
    })
    .sort((a, b) => b.victories - a.victories || b.winRate - a.winRate);

  return (
    <div className='doodle-border w-full p-3 animate-fade-in-up'>
      <h2 className='mb-3 text-center text-xl font-bold tracking-wide'>⚔️ Clan Rankings</h2>
      <div className='flex flex-col gap-1'>
        {ranked.map(({ key, victories, battles, members, winRate }, i) => {
          const clan = clans[key];
          const isFirst = i === 0;
          return (
            <div
              key={key}
              className='flex items-center gap-2 rounded px-2 py-2 transition-all min-w-0'
              style={{
                backgroundColor: isFirst ? `${clan.color}10` : undefined,
              }}
            >
              <span className='w-6 shrink-0 text-center text-lg'>#{i + 1}</span>
              <img
                src={clan.image}
                alt={clan.name}
                className='h-8 w-8 shrink-0 object-contain'
                style={isFirst ? { filter: `drop-shadow(0 0 6px ${clan.color}80)` } : { opacity: 0.8 }}
              />
              <div className='flex min-w-0 flex-1 flex-col'>
                <span
                  className={`truncate font-semibold ${isFirst ? 'text-sm' : 'text-xs'}`}
                  style={{ color: clan.color }}
                >
                  {clan.name}
                </span>
                <span className='text-xs opacity-50'>{members} member{members !== 1 ? 's' : ''}</span>
              </div>
              <div className='flex shrink-0 flex-col items-end gap-0.5'>
                <span className={`font-bold ${isFirst ? 'text-sm' : 'text-xs'}`} style={{ color: clan.color }}>
                  {victories} <span className='font-normal opacity-60'>W</span>
                </span>
                <span className='text-xs opacity-40 whitespace-nowrap'>{winRate}% · {battles}b</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClanRankingBoard;
