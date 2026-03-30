import { useState } from 'react';
import { DizzySailor } from './DizzySailor';
import { SickSailor } from './SickSailor';
import { SmokingSailor } from './SmokingSailor';
import { ThinkingSailor } from './ThinkingSailor';

const RandomSailor = () => {
  const sailors = [SmokingSailor, ThinkingSailor, DizzySailor, SickSailor];

  const [RandomSailor] = useState(() => sailors[Math.floor(Math.random() * sailors.length)]);

  return (
    <div className='relative h-25 w-25'>
      <div className='relative scale-94 !bg-white'>
        <RandomSailor />
      </div>
      <div className='doodle-border absolute inset-0 !bg-transparent'></div>
    </div>
  );
};

export default RandomSailor;
