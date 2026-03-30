import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../firebase/useAuth';
import { joinClan } from '../../api/users';
import { clans } from '../../constants/images';
import Button from '../../components/ui/Button';
import Loading from '../../components/ui/loading';
import Message from '../../components/ui/Message';
import { db } from '../../firebase/config';
import ClanCard from './components/ClanCard';
import ClanDetailView from './components/ClanDetailView';
import type { ClanKey, ClanStatsMap } from './types';

const Clans = () => {
  const { user, userData, loading } = useAuth();
  const [isChanging, setIsChanging] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState('');
  const [detailsClan, setDetailsClan] = useState<ClanKey | null>(null);
  const [stayOnGrid, setStayOnGrid] = useState(false);
  const [clanStats, setClanStats] = useState<ClanStatsMap>({});

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), snapshot => {
      const stats: ClanStatsMap = {};
      snapshot.forEach(doc => {
        const data = doc.data();
        const clan = data.stats?.clan as ClanKey | null;
        if (!clan || !(clan in clans)) return;
        if (!stats[clan]) stats[clan] = { members: 0, victories: 0, battles: 0 };
        stats[clan]!.members += 1;
        stats[clan]!.victories += data.stats?.victories ?? 0;
        stats[clan]!.battles += data.stats?.battles ?? 0;
      });
      setClanStats(stats);
    });
    return unsubscribe;
  }, []);

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
    return (
      <ClanDetailView
        clanKey={detailsClan}
        onBack={() => setDetailsClan(null)}
        stats={clanStats[detailsClan]}
      />
    );
  }

  if (showSelection) {
    return (
      <section className='doodle doodle-border mx-auto my-4 flex w-full flex-col items-center gap-6 p-6 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
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
              stats={clanStats[key]}
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
    <section className='doodle doodle-border mx-auto my-4 flex w-full flex-col items-center gap-6 p-6 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
      <h1 className='text-3xl font-bold'>Your Clan</h1>
      <div className='doodle-border flex w-full flex-col items-center gap-4 p-6 sm:flex-row sm:gap-8'>
        <img src={current.image} alt={current.name} className='h-32 w-32 object-contain' />
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-bold'>{current.name}</h2>
          <p className='opacity-70 italic'>{current.tagline}</p>
          <p className='text-sm opacity-50 mt-1'>{current.description}</p>
        </div>
      </div>

      <div className='doodle-border grid w-full grid-cols-3 gap-4 p-4 text-center'>
        <div>
          <div className='text-2xl font-bold'>{clanStats[currentClanKey]?.members ?? '—'}</div>
          <div className='text-xs opacity-60'>members</div>
        </div>
        <div>
          <div className='text-2xl font-bold'>{clanStats[currentClanKey]?.victories ?? '—'}</div>
          <div className='text-xs opacity-60'>total victories</div>
        </div>
        <div>
          <div className='text-2xl font-bold'>{clanStats[currentClanKey]?.battles ?? '—'}</div>
          <div className='text-xs opacity-60'>total battles</div>
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
