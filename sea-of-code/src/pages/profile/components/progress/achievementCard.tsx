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
    <div className='flex flex-col justify-between sm:flex-row'>
      <div className='flex items-center gap-4'>
        <img src={icon} className='h-16 w-18' alt={title} />
        <div>
          <h2 className='text-xl sm:text-2xl'>{title}</h2>
          <p className='sm:text-md text-xs'>{description}</p>
        </div>
      </div>

      <div className='flex items-center'>
        {done ? (
          <img src='./profile-images/done.png' alt='done' className='h-12 w-12 sm:h-16 sm:w-16' />
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
