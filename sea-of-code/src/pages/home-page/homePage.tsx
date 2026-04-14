import { useState } from 'react';
import { useAuth } from '../../firebase/useAuth';
import { type TopicId } from '../../types/topic';
import { GreetingCard } from './components/GreetingCard';
import MapComponent from './components/MapComponent';
import Sitrep from './components/Sitrep';
import { topics } from '../../constants/topics';

const topicList = Object.keys(topics) as TopicId[];

const HomePage = () => {
  const { userData } = useAuth();
  const [topicIndex, setTopicIndex] = useState(0);

  const currentTopicId = topicList[topicIndex];
  const currentTopic = topics[currentTopicId];

  const handleNextTopic = () => {
    setTopicIndex(prev => (prev + 1) % topicList.length);
  };

  const handlePrevTopic = () => {
    setTopicIndex(prev => (prev - 1 + topicList.length) % topicList.length);
  };

  return (
    <section className='doodle-border mb-4 flex max-h-[840px] flex-1 flex-col gap-3 p-1.5'>
      <div className='flex gap-3'>
        <GreetingCard
          displayName={userData?.displayName || 'Sailor'}
          rank={userData?.stats.rank || 'unga'}
          streakDays={userData?.stats.streak ?? 0}
          to_rank={userData?.stats.to_rank ?? 0}
        />
        <Sitrep currentTopic={currentTopic} />
      </div>
      <MapComponent currentTopic={currentTopic} onNext={handleNextTopic} onPrev={handlePrevTopic} />
    </section>
  );
};

export default HomePage;
