import { clans } from '../../../constants/images';
import Button from '../../../components/ui/Button';
import type { ClanKey, ClanStats } from '../types';

interface ClanDetailViewProps {
  clanKey: ClanKey;
  onBack: () => void;
  stats?: ClanStats;
}

const ClanDetailView = ({ clanKey, onBack, stats }: ClanDetailViewProps) => {
  const clan = clans[clanKey];
  return (
    <section className='doodle doodle-border mx-auto my-4 flex w-full flex-col items-center gap-6 p-6 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
      <div className='flex w-full'>
        <Button variant='secondary' onClick={onBack} className='w-28'>
          ← Back
        </Button>
      </div>

      <div className='doodle-border flex w-full flex-col items-center gap-4 p-6 sm:flex-row sm:gap-8'>
        <img src={clan.image} alt={clan.name} className='h-32 w-32 object-contain' />
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold'>{clan.name}</h2>
          <p className='opacity-70 italic'>{clan.tagline}</p>
          <p className='text-sm opacity-50 leading-relaxed'>{clan.description}</p>
        </div>
      </div>

      <div className='doodle-border grid w-full grid-cols-3 gap-4 p-4 text-center'>
        <div>
          <div className='text-2xl font-bold'>{stats?.members ?? '—'}</div>
          <div className='text-xs opacity-60'>members</div>
        </div>
        <div>
          <div className='text-2xl font-bold'>{stats?.victories ?? '—'}</div>
          <div className='text-xs opacity-60'>total victories</div>
        </div>
        <div>
          <div className='text-2xl font-bold'>{stats?.battles ?? '—'}</div>
          <div className='text-xs opacity-60'>total battles</div>
        </div>
      </div>
    </section>
  );
};

export default ClanDetailView;
