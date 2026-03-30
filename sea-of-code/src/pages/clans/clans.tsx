import { useState } from 'react';
import { useAuth } from '../../firebase/useAuth';
import { joinClan } from '../../api/users';
import { clans } from '../../constants/images';
import Button from '../../components/ui/Button';
import Loading from '../../components/ui/loading';
import Message from '../../components/ui/Message';

type ClanKey = keyof typeof clans;

const ClanCard = ({
  clanKey,
  isCurrent,
  onJoin,
  onDetails,
  disabled,
}: {
  clanKey: ClanKey;
  isCurrent: boolean;
  onJoin: (key: ClanKey) => void;
  onDetails: (key: ClanKey) => void;
  disabled: boolean;
}) => {
  const clan = clans[clanKey];
  return (
    <div
      className={`doodle-border flex flex-col items-center gap-3 p-4 transition-all ${isCurrent ? 'bg-indigo-100 dark:bg-indigo-900/30 scale-[1.02] shadow-lg' : 'opacity-80 hover:opacity-100'}`}
    >
      <img
        src={clan.image}
        alt={clan.name}
        className={`h-24 w-24 object-contain transition-all ${isCurrent ? 'scale-110' : ''}`}
      />
      <h2 className='text-center text-lg font-semibold'>{clan.name}</h2>
      {isCurrent && (
        <span className='text-xs font-semibold text-indigo-500 uppercase tracking-widest'>
          Your clan
        </span>
      )}
      <p className='text-center text-sm opacity-70'>{clan.tagline}</p>

      <div className='mt-auto flex w-full flex-col gap-2'>
        <Button variant='secondary' onClick={() => onDetails(clanKey)} className='w-full'>
          About
        </Button>
        {!isCurrent && (
          <Button onClick={() => onJoin(clanKey)} disabled={disabled} variant='primary' className='w-full'>
            Join
          </Button>
        )}
      </div>
    </div>
  );
};

const ClanDetailView = ({
  clanKey,
  onBack,
}: {
  clanKey: ClanKey;
  onBack: () => void;
}) => {
  const clan = clans[clanKey];
  return (
    <section className='doodle-border mx-auto my-4 flex w-full flex-col items-center gap-6 p-6 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
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
    </section>
  );
};

const Clans = () => {
  const { user, userData, loading } = useAuth();
  const [isChanging, setIsChanging] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState('');
  const [detailsClan, setDetailsClan] = useState<ClanKey | null>(null);
  const [stayOnGrid, setStayOnGrid] = useState(false);

  if (loading) return <Loading />;
  if (!user || !userData) return <Message variant='error' message='Please log in' />;

  const currentClanKey = userData.stats.clan as ClanKey | null;

  const handleJoin = async (clanKey: ClanKey) => {
    if (!user) return;
    setActionLoading(true);
    setError('');
    try {
      const isChange = !!currentClanKey && isChanging;
      await joinClan(user.uid, clanKey, isChange);
      setIsChanging(false);
      setStayOnGrid(true);
    } catch {
      setError('Failed to join clan. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const showSelection = !currentClanKey || isChanging || stayOnGrid;

  if (detailsClan) {
    return <ClanDetailView clanKey={detailsClan} onBack={() => setDetailsClan(null)} />;
  }

  if (showSelection) {
    return (
      <section className='doodle-border mx-auto my-4 flex w-full flex-col items-center gap-6 p-6 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-3xl font-bold'>
            {isChanging ? 'Change Your Clan' : 'Choose Your Clan'}
          </h1>
          <p className='text-center opacity-70'>
            {isChanging
              ? 'Your statistics will be reset when you join a new clan'
              : 'Join a fraction to battle alongside your allies. Choose wisely — you can change after one week.'}
          </p>
        </div>

        {isChanging && (
          <div className='doodle-border w-full p-3 text-center text-sm'>
             ! Changing your clan will reset all your battle statistics
          </div>
        )}

        {error && <Message variant='error' message={error} />}

        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-3 items-start'>
          {(Object.keys(clans) as ClanKey[]).map(key => (
            <ClanCard
              key={key}
              clanKey={key}
              isCurrent={currentClanKey === key}
              onJoin={handleJoin}
              onDetails={setDetailsClan}
              disabled={actionLoading}
            />
          ))}
        </div>

        {isChanging && (
          <Button variant='secondary' onClick={() => setIsChanging(false)} className='w-48'>
            Cancel
          </Button>
        )}
      </section>
    );
  }

  const current = clans[currentClanKey];

  return (
    <section className='doodle-border mx-auto my-4 flex w-full flex-col items-center gap-6 p-6 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
      <h1 className='text-3xl font-bold'>Your Clan</h1>
      <div className='doodle-border flex w-full flex-col items-center gap-4 p-6 sm:flex-row sm:gap-8'>
        <img src={current.image} alt={current.name} className='h-32 w-32 object-contain' />
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-bold'>{current.name}</h2>
          <p className='opacity-70 italic'>{current.tagline}</p>
          <p className='text-sm opacity-50 mt-1'>{current.description}</p>

        </div>
      </div>

      {error && <Message variant='error' message={error} />}

      <div className='doodle-border flex w-full flex-col items-center gap-4 p-4'>
        <h2 className='text-xl font-semibold'>Change Clan</h2>
        <p className='text-center text-sm opacity-70'>
          Changing your clan will reset all battle statistics
        </p>
        <Button onClick={() => setIsChanging(true)} variant='secondary' className='w-48'>
          Change Clan
        </Button>
      </div>
    </section>
  );
};

export default Clans;
