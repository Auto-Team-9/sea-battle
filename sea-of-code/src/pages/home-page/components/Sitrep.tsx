import { useState } from 'react';
import { Topics } from '../../../types/quiz';
import { tips } from '../../../constants/constants';
import { topicDescriptions } from '../../../constants/topics';

interface SitrepProps {
  currentTopic: Topics;
}

const Sitrep = ({ currentTopic }: SitrepProps) => {
  const description = topicDescriptions[currentTopic];

  const [randomTip] = useState(() => tips[Math.floor(Math.random() * tips.length)]);

  return (
    <div className='doodle-border flex items-center gap-5 p-4'>
      <div className='flex h-full items-center'>
        <h3 className='rotate-180 text-2xl tracking-wide whitespace-nowrap uppercase opacity-70 [writing-mode:vertical-rl]'>
          SITREP
        </h3>
        <div className='doodle-vr h-full' />
      </div>

      <div className='flex flex-col gap-2'>
        <p className='text-'>{description}</p>

        <div className='flex flex-col gap-1 text-sm text-[--color-text] opacity-70'>
          <p>TIP: {randomTip}</p>
        </div>
      </div>
    </div>
  );
};

export default Sitrep;
