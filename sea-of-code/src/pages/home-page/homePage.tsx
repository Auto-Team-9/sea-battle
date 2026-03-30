import { useState } from 'react';
import Loading from '../../components/ui/loading';
import { useAuth } from '../../firebase/useAuth';
import { Topics } from '../../types/quiz';
import { GreetingCard } from './components/GreetingCard';
import MapComponent from './components/MapComponent';
import Sitrep from './components/Sitrep';

const topicList = Object.values(Topics);

const HomePage = () => {
  const { userData, loading } = useAuth();
  const [topicIndex, setTopicIndex] = useState(0);

  const currentTopic = topicList[topicIndex];

  const handleNextTopic = () => {
    setTopicIndex(prev => (prev + 1) % topicList.length);
  };

  const handlePrevTopic = () => {
    setTopicIndex(prev => (prev - 1 + topicList.length) % topicList.length);
  };

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
        <Sitrep currentTopic={currentTopic} />
      </div>
      <MapComponent
        key={currentTopic}
        currentTopic={currentTopic}
        onNext={handleNextTopic}
        onPrev={handlePrevTopic}
      />
    </section>
  );
};

export default HomePage;
