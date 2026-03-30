import Loading from '../../components/ui/loading';
import { useAuth } from '../../firebase/useAuth';
import { Topics } from '../../types/quiz';
import { GreetingCard } from './components/GreetingCard';
import Sitrep from './components/Sitrep';

const HomePage = () => {
  const { userData, loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <section className='doodle-border flex flex-1 flex-col gap-3 p-1.5'>
      <div className='flex gap-3'>
        <GreetingCard
          displayName={userData?.displayName || 'Sailor'}
          rank={userData?.stats.rank || 'unga'}
          streakDays={userData?.stats.streak ?? 0}
          to_rank={userData?.stats.to_rank ?? 0}
        />
        <Sitrep currentTopic={Topics.Fundamentals} />
      </div>

      <div className='doodle-border h-full'>
        <div className='flex items-center gap-4'>
          <hr className='doodle-hr w-full flex-grow' />
          <p className='text-lg font-semibold text-blue-900'>
            Current mission: <span className='font-semibold'>{'currentTopic'}</span>
          </p>
          <hr className='doodle-hr w-full flex-grow rotate-180 transform' />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default HomePage;
