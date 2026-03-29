import { useState, useEffect } from 'react';
import sick1Icon from '../../../assets/sick-1.svg';
import sick2Icon from '../../../assets/sick-2.svg';
import sick3Icon from '../../../assets/sick-3.svg';
import sick4Icon from '../../../assets/sick-4.svg';

export function SickSailor() {
  const [frame, setFrame] = useState(0);

  const frames = [sick1Icon, sick2Icon, sick3Icon, sick4Icon];

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(frame => (frame + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <img className='h-fit w-fit !bg-transparent' src={frames[frame]} alt='Thinking sailor icon' />
  );
}
