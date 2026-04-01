import { clans } from '../../../constants/images';
import Button from '../../../components/ui/Button';
import type { ClanKey, ClanStats } from '../../../types/clans.type';

interface ClanCardProps {
  clanKey: ClanKey;
  isCurrent: boolean;
  highlight?: boolean;
  onJoin: (key: ClanKey) => void;
  onDetails: (key: ClanKey) => void;
  disabled: boolean;
  stats?: ClanStats;
}

const ClanCard = ({ clanKey, isCurrent, highlight, onJoin, onDetails, disabled, stats }: ClanCardProps) => {
  const clan = clans[clanKey];
  return (
    <div
      className={`clan-card doodle doodle-border flex flex-col items-center gap-3 p-4 ${isCurrent ? 'clan-card--active' : 'opacity-80 hover:opacity-100'} ${highlight ? 'clan-card--just-joined' : ''}`}
      style={{
        '--clan-color': clan.color,
        backgroundColor: isCurrent ? clan.colorMuted : undefined,
      } as React.CSSProperties}
    >
      <img
        src={clan.image}
        alt={clan.name}
        className={`h-24 w-24 object-contain transition-all ${isCurrent ? 'scale-110' : ''}`}
        style={isCurrent ? { filter: `drop-shadow(0 0 10px ${clan.color}90)` } : undefined}
      />
      <h2 className='text-center text-lg font-semibold'>{clan.name}</h2>
      {isCurrent && (
        <span
          className='text-xs font-semibold uppercase tracking-widest'
          style={{ color: clan.color }}
        >
          Your clan
        </span>
      )}
      <p className='text-center text-sm opacity-70'>{clan.tagline}</p>
      <div className='flex w-full justify-around text-center text-xs opacity-60'>
        <div>
          <div className='font-semibold text-sm'>{stats?.members ?? '—'}</div>
          <div>members</div>
        </div>
        <div>
          <div className='font-semibold text-sm'>{stats?.victories ?? '—'}</div>
          <div>victories</div>
        </div>
        <div>
          <div className='font-semibold text-sm'>{stats?.battles ?? '—'}</div>
          <div>battles</div>
        </div>
      </div>

      <div className='mt-auto flex w-full flex-col gap-2'>
        <Button
          variant='secondary'
          onClick={() => onDetails(clanKey)}
          className='w-full'
          style={{ backgroundColor: clan.colorMuted, color: clan.color }}
        >
          About
        </Button>
        {!isCurrent && (
          <Button
            onClick={() => onJoin(clanKey)}
            disabled={disabled}
            variant='primary'
            className='w-full'
            style={{ backgroundColor: clan.color, color: '#fff' }}
          >
            Join
          </Button>
        )}
      </div>
    </div>
  );
};

export default ClanCard;
