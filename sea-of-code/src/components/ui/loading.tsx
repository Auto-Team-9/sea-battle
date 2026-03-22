import { useEffect, useState } from 'react';

type LoadingProps = {
  className?: string;
};

const Loading = ({ className = '' }: LoadingProps) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`pointer-events-auto absolute inset-0 z-50 flex items-center justify-center bg-[var(--color-bg-primary)]/20 ${className}`}
    >
      <div className='doodle-border m-auto w-40 bg-[var(--color-bg-primary)] p-4 text-center text-5xl'>
        <p className='text-lg'>Loading{dots}</p>
      </div>
    </div>
  );
};

export default Loading;
