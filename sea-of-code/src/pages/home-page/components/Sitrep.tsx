import { useState } from 'react';
import { type Topic } from '../../../types/topic';
import { tips } from '../../../constants/constants';
import { motion, AnimatePresence } from 'motion/react';

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

      <div className='flex w-full flex-col gap-2'>
        <div className='flex h-[72px] w-full flex-col justify-center'>
          <AnimatePresence mode='wait'>
            <motion.p
              key={description}
              initial={{ opacity: 0, filter: 'blur(3px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(3px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {description}
            </motion.p>
          </AnimatePresence>
        </div>
        <p className='text-sm text-[--color-text] opacity-70'>TIP: {randomTip}</p>
      </div>
    </div>
  );
};

export default Sitrep;
