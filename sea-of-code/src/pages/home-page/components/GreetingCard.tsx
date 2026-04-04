import GreetingMessage from './GreetingMessage';
import RandomSailor from './sailors/RandomSailor';

type GreetingCardProps = {
  displayName: string;
  rank: string;
  streakDays: number;
  to_rank: number;
};

export const GreetingCard = ({ displayName, rank, streakDays, to_rank }: GreetingCardProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getRankText = () => {
    switch (rank) {
      case 'unga':
        return {
          intro: `Welcome aboard, Cadet`,
          main:
            streakDays > 1
              ? `${streakDays} days at sea - keep it up!`
              : 'Time to make your first move',
        };

      case 'mich':
        return {
          intro: `Bug Navigator, chart the course`,
          main:
            streakDays > 1
              ? `${streakDays} days navigating bugs - steady sailing`
              : 'Bugs are waiting on the horizon',
        };

      case 'leit':
        return {
          intro: `Commander, systems are under control`,
          main:
            streakDays > 1
              ? `${streakDays} days in command - precise and efficient`
              : 'All systems ready. Awaiting your command',
        };

      case 'cap':
        return {
          intro: 'Captain on deck!',
          main:
            streakDays > 1
              ? `${streakDays} days leading the fleet`
              : 'Your fleet awaits orders, Captain',
        };

      case 'admiral':
        return {
          intro: `Admiral, the code seas are yours`,
          main:
            streakDays > 1
              ? `${streakDays} days dominating the seas`
              : 'The fleet stands ready for your command, Admiral',
        };

      default:
        return {
          intro: '',
          main: '',
        };
    }
  };

  const { intro, main } = getRankText();

  return (
    <div className='doodle doodle-border flex w-fit shrink-0 gap-5 p-4'>
      <RandomSailor />

      <div className='relative flex flex-col'>
        <div className='flex items-center gap-4'>
          <hr className='w-full flex-grow' />
          <p className='tracking-wide whitespace-nowrap uppercase opacity-70'>Assistant</p>
          <hr className='w-full flex-grow rotate-180 transform' />
        </div>

        <GreetingMessage
          displayName={displayName}
          intro={intro}
          main={main}
          to_rank={to_rank}
          getGreeting={getGreeting()}
        />
      </div>
    </div>
  );
};
