import type { JSX } from 'react';
import type { UserData } from '../../../../types/types';
import AchievementCard from './achievementCard';

const Progress = ({ userData }: { userData: UserData }): JSX.Element => {
  const { first_battle, sea_wolf, sniper, fleet_storm } = userData;

  return (
    <div className='doodle-border w-full'>
      <div className='flex items-center gap-4'>
        <img src='./profile-images/achievements.png' className='h-20 w-24' />
        <p className='text-xl sm:text-4xl'>Progress</p>
      </div>

      <div className='doodle-border flex flex-col gap-4 px-4 py-2'>
        <AchievementCard
          icon='./profile-images/first_battle.png'
          title='First battle'
          description='Win a victory'
          done={first_battle}
        />

        <AchievementCard
          icon='./profile-images/sea_wolf.png'
          title='Sea wolf'
          description='Win 100 victories'
          progress={sea_wolf}
          max={100}
          done={sea_wolf === 100}
        />

        <AchievementCard
          icon='./profile-images/sniper.png'
          title='Sniper'
          description='Accuracy of 80%'
          progress={sniper}
          max={100}
          done={sniper >= 80}
        />

        <AchievementCard
          icon='./profile-images/fleet_storm.png'
          title='Storm of seas'
          description='Sink 100 ships'
          progress={fleet_storm}
          max={100}
          done={fleet_storm === 100}
        />
      </div>
    </div>
  );
};

export default Progress;
