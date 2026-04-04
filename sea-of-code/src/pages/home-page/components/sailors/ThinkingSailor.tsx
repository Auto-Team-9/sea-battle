import { useState, useEffect } from 'react';

import thinkerIcon from '../../../../assets/thinker.svg';

export function ThinkingSailor() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(frame => (frame + 1) % 2);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <img
      className='h-fit w-fit !bg-transparent'
      src={thinkerIcon}
      style={{
        transform: frame === 0 ? 'scaleX(1)' : 'scaleX(-1)',
      }}
      alt='Thinking sailor icon'
    />
  );
}
