import { useState, useEffect } from 'react';
import smokeIcon from '../../../../assets/smoke.svg';
import smokeAltIcon from '../../../../assets/smoke-alt.svg';
import smokingIcon from '../../../../assets/smoking.svg';

export function SmokingSailor() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(frame => (frame + 1) % 2);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <img className='h-fit w-fit !bg-transparent' src={smokingIcon} alt='Smoking sailor icon' />

      <div className='absolute top-0 right-0 h-25 w-25 animate-[pulse_3s_ease-in-out_infinite]'>
        <img
          className={`absolute top-0 right-0 h-fit w-fit !bg-transparent transition-opacity`}
          src={smokeIcon}
          alt='Smoke frame'
          aria-hidden='true'
          style={{ opacity: frame === 0 ? 1 : 0 }}
        />
        <img
          className={`absolute -top-1 right-0 h-fit w-fit !bg-transparent transition-opacity`}
          src={smokeAltIcon}
          alt='Smoke frame'
          aria-hidden='true'
          style={{ opacity: frame === 1 ? 1 : 0 }}
        />
      </div>
    </>
  );
}
