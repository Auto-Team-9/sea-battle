import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../firebase/useAuth';
import { joinClan } from '../../api/users';
import { clans } from '../../constants/images';
import Loading from '../../components/ui/loading';
import Message from '../../components/ui/Message';
import { db } from '../../firebase/config';
import ClanCard from './components/ClanCard';
import ClanDetailView from './components/ClanDetailView';
import type { ClanKey, ClanStatsMap } from '../../types/clans.type';
import './clans.css';

const Clans = () => {
  const { user, userData, loading } = useAuth();
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState('');
  const [detailsClan, setDetailsClan] = useState<ClanKey | null>(null);
  const [clanStats, setClanStats] = useState<ClanStatsMap>({});

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), snapshot => {
      const stats: ClanStatsMap = {};
      snapshot.forEach(doc => {
        const data = doc.data();
        const clan = data.stats?.clan as ClanKey | null;
        if (!clan || !(clan in clans)) return;
        if (!stats[clan]) stats[clan] = { members: 0, victories: 0, battles: 0, topPlayers: [] };
        stats[clan]!.members += 1;
        stats[clan]!.victories += data.stats?.victories ?? 0;
        stats[clan]!.battles += data.stats?.battles ?? 0;
        stats[clan]!.topPlayers.push({
          displayName: data.displayName ?? 'Unknown',
          victories: data.stats?.victories ?? 0,
          rank: data.stats?.rank ?? 'unga',
        });
      });
      Object.values(stats).forEach(clanStat => {
        if (clanStat) {
          clanStat.topPlayers = clanStat.topPlayers
            .sort((a, b) => b.victories - a.victories)
            .slice(0, 5);
        }
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
      const isChange = !!currentClanKey;
      await joinClan(user.uid, clanKey, isChange);
    } catch {
      setError('Failed to join clan. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  if (detailsClan) {
    return (
      <ClanDetailView
        clanKey={detailsClan}
        onBack={() => setDetailsClan(null)}
        stats={clanStats[detailsClan]}
      />
    );
  }

  return (
      <section className='doodle doodle-border mx-auto my-4 flex w-full flex-col items-center gap-6 p-6 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-3xl font-bold'>Choose Your Clan</h1>
          <p className='text-center opacity-70'>
            Join a fraction to battle alongside your allies. Choose wisely — you can change after one week.
          </p>
        </div>

        {error && <Message variant='error' message={error} />}

        <div className='doodle-border w-full p-3 text-center text-sm'>
          ! Changing your clan will reset all your battle statistics
        </div>

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

      </section>
    );
};

export default Clans;
