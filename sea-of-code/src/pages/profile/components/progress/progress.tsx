import AchievementCard from './achievementCard';

const Progress = () => {
  return (
    <div className='doodle-border w-full'>
      <div className='flex items-center gap-4'>
        <img src='./profile-images/achievements.png' className='w-24 h-20' />
        <p className='sm:text-4xl text-xl'>Достижения</p>
      </div>

      <div className='flex flex-col gap-4 doodle-border px-4 py-2'>
        <AchievementCard
          icon='./profile-images/first_battle.png'
          title='Первый бой'
          description='Одержать победу'
          done={true}
        />

        <AchievementCard
          icon='./profile-images/sea_wolf.png'
          title='Морской волк'
          description='Одержать 100 побед'
          progress={98}
          max={100}
          done={false}
        />

        <AchievementCard
          icon='./profile-images/sniper.png'
          title='Снайпер'
          description='Достичь точности 80%'
          progress={50}
          max={100}
          done={false}
        />

        <AchievementCard
          icon='./profile-images/fleet_storm.png'
          title='Гроза флота'
          description='Потопить 100 кораблей'
          progress={50}
          max={100}
          done={false}
        />
      </div>
    </div>
  );
};

export default Progress;
