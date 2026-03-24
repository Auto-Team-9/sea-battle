import type { JSX } from 'react';
import type { UserData } from '../../../../types/types';

const Journal = ({ userData }: { userData: UserData }): JSX.Element => {
  const { victories, defeats, fighting, sniper, miles_at_sea } = userData;

  return (
    <div className='doodle-border flex w-full flex-col'>
      <div className='flex items-center'>
        <img src='./profile-images/ships_log.png' alt='ships_log' className='h-20 w-28 bg-cover' />
        <h1 className='py-4 text-xl sm:text-4xl'>Ship's log</h1>
      </div>
      <div className='doodle-border flex flex-wrap justify-around gap-2 sm:gap-11 sm:p-4'>
        <div className='flex flex-col items-center text-sm sm:text-2xl md:gap-2'>
          <img
            src='./profile-images/victories.png'
            alt='victories'
            className='h-16 w-20 sm:h-24 sm:w-28'
          />
          <p className=''>Wins</p>
          <p>{victories}</p>
        </div>
        <div className='flex flex-col items-center text-sm sm:text-2xl md:gap-2'>
          <img
            src='./profile-images/defeats.png'
            alt='defeats'
            className='h-16 w-20 sm:h-24 sm:w-28'
          />
          <p>Defeats</p>
          <p>{defeats}</p>
        </div>
        <div className='flex flex-col items-center text-sm sm:text-2xl md:gap-2'>
          <img
            src='./profile-images/battles.png'
            alt='battles'
            className='h-16 w-20 sm:h-24 sm:w-28'
          />
          <p>Fights</p>
          <p>{fighting}</p>
        </div>
        <div className='flex flex-col items-center text-sm sm:text-2xl md:gap-2'>
          <img
            src='./profile-images/accuracy.png'
            alt='accuracy'
            className='h-16 w-20 sm:h-24 sm:w-28'
          />
          <p>Hits</p>
          <p>{sniper}</p>
        </div>
        <div className='flex flex-col items-center text-sm sm:text-2xl md:gap-2'>
          <img
            src='./profile-images/miles.png'
            alt='time at sea'
            className='h-16 w-20 sm:h-24 sm:w-28'
          />
          <p>Miles at sea</p>
          <p>{miles_at_sea}</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
