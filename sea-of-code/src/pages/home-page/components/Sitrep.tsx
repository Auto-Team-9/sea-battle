import { useState } from 'react';
import { type Topic } from '../../../types/topic';
import { tips } from '../../../constants/constants';

interface SitrepProps {
  currentTopic: Topic;
}

const Sitrep = ({ currentTopic }: SitrepProps) => {
  const description = currentTopic.description;

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
