import { ranks } from '../../../constants/images';
import type { LeaderboardEntry } from '../../../types/clans.type';

interface ClanLeaderboardProps {
  topPlayers: LeaderboardEntry[];
}

const ClanLeaderboard = ({ topPlayers }: ClanLeaderboardProps) => {
  if (topPlayers.length === 0) {
    return (
      <div className='doodle-border w-full p-4 text-center text-sm opacity-60'>
        No members yet — be the first to join!
      </div>
    );
  }

  return (
    <div className='doodle-border w-full p-4'>
      <h3 className='mb-3 text-center text-lg font-bold'>Top Players</h3>
      <ol className='flex flex-col gap-2'>
        {topPlayers.map((player, i) => {
          const rankLabel = ranks[player.rank as keyof typeof ranks]?.name ?? player.rank;
          return (
            <li
              key={i}
              className={`flex items-center gap-3 rounded px-3 py-2 ${i === 0 ? 'bg-yellow-100 dark:bg-yellow-900/20 font-semibold' : 'opacity-80'}`}
            >
              <span className='w-6 text-center text-sm font-bold opacity-60'>
                {i + 1}.
              </span>
              <span className='flex-1 truncate'>{player.displayName}</span>
              <span className='text-xs opacity-50 hidden sm:block'>{rankLabel}</span>
              <span className='text-sm font-semibold'>{player.victories} victories</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ClanLeaderboard;
