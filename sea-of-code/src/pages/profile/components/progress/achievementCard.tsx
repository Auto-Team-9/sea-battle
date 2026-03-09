interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
  progress?: number;
  max?: number;
  done: boolean;
}

const AchievementCard = ({
  icon,
  title,
  description,
  progress,
  max,
  done,
}: AchievementCardProps) => {
  return (
    <div className='flex sm:flex-row flex-col justify-between'>
      <div className='flex items-center gap-4'>
        <img src={icon} className='w-18 h-16' alt={title} />
        <div>
          <h2 className='sm:text-2xl text-xl'>{title}</h2>
          <p className='sm:text-md text-xs'>{description}</p>
        </div>
      </div>

      <div className='flex items-center'>
        {done ? (
          <img src='./profile-images/done.png' alt='done' className='sm:w-16 sm:h-16 w-12 h-12' />
        ) : (
          <div>
            <p>
              {progress} / {max}
            </p>
            <progress value={progress} max={max}></progress>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
