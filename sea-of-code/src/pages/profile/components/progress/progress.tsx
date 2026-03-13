import type { JSX } from 'react';
import type { UserData } from '../../../../types/types';
import AchievementCard from './achievementCard';

const Progress = ({ userData }: { userData: UserData }): JSX.Element => {
  const { first_battle, sea_wolf, sniper, fleet_storm } = userData;

  return (
    <div className='doodle-border w-full'>
      <div className='flex items-center gap-4'>
        <img src='./profile-images/achievements.png' className='h-20 w-24' />
        <p className='text-xl sm:text-4xl'>Достижения</p>
      </div>

      <div className='doodle-border flex flex-col gap-4 px-4 py-2'>
        <AchievementCard
          icon='./profile-images/first_battle.png'
          title='Первый бой'
          description='Одержать победу'
          done={first_battle}
        />

        <AchievementCard
          icon='./profile-images/sea_wolf.png'
          title='Морской волк'
          description='Одержать 100 побед'
          progress={sea_wolf}
          max={100}
          done={sea_wolf === 100}
        />

        <AchievementCard
          icon='./profile-images/sniper.png'
          title='Снайпер'
          description='Достичь точности 80%'
          progress={sniper}
          max={100}
          done={sniper >= 80}
        />

        <AchievementCard
          icon='./profile-images/fleet_storm.png'
          title='Гроза флота'
          description='Потопить 100 кораблей'
          progress={fleet_storm}
          max={100}
          done={fleet_storm === 100}
        />
      </div>
    </div>
  );
};

export default Progress;
