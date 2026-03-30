import { useState, useEffect } from 'react';

interface GreetingMessageProps {
  displayName: string;
  intro: string;
  main: string;
  to_rank: number;
  getGreeting: string;
}

const GreetingMessage = ({
  displayName,
  intro,
  main,
  to_rank,
  getGreeting,
}: GreetingMessageProps) => {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative flex h-full w-full'>
      <div
        className='absolute flex h-full w-full flex-col items-center justify-center transition-opacity duration-700'
        style={{ opacity: showMain ? 0 : 1 }}
      >
        <p className='text-2xl'>{getGreeting},</p>
        <p className='text-2xl'>{displayName}</p>
      </div>

      <div
        className='flex h-full w-full flex-col justify-center transition-opacity duration-700'
        style={{ opacity: showMain ? 1 : 0 }}
      >
        <p>{intro}</p>

        <p>{main}</p>

        <p className='text-sm text-[--color-text] opacity-70'>
          {to_rank > 0 ? `${to_rank} XP to the next rank` : 'Maximum rank reached'}
        </p>
      </div>
    </div>
  );
};

export default GreetingMessage;
