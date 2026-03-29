import Loading from '../../components/ui/loading';
import { useAuth } from '../../firebase/useAuth';
import { GreetingCard } from './components/GreetingCard';

const HomePage = () => {
  const { userData, loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <section className='doodle-border flex flex-1 flex-col gap-2'>
      <div className='flex gap-2'>
        <GreetingCard
          displayName={userData?.displayName || 'Sailor'}
          rank={userData?.stats.rank || 'unga'}
          streakDays={userData?.stats.streak ?? 0}
          to_rank={userData?.stats.to_rank ?? 0}
        />
        <div className='doodle-border flex items-center gap-5 p-4'>
          <div className='flex h-full items-center'>
            <p className='rotate-180 text-2xl [writing-mode:vertical-rl]'>SITREP</p>
            <div className='doodle-vr h-full' />
          </div>
        </div>
      </div>

      <div className='doodle-border h-full'></div>
      <div></div>
    </section>
  );
};

export default HomePage;
