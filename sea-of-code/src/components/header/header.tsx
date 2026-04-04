import { NavLink } from 'react-router';
import logo from '../../assets/battleship-alt.svg';
import { useAuth } from '../../firebase/useAuth';
import { logoutUser } from '../../api/auth';
import { defaultAvatar, profileImage, ranks } from '../../constants/images';
import { useRef } from 'react';
import Button from '../ui/Button';
import logoutIcon from '../../assets/logout-icon.svg';
import ThemeButton from '../ui/ThemeButton';
import ProgressBar from '../progress/ProgressBar';

type RankKey = keyof typeof ranks;

const Header = () => {
  const { loading, userData } = useAuth();
  const imgRef = useRef<HTMLImageElement>(null);

  if (loading || !userData) return <></>;

  const avatar = localStorage.getItem(profileImage) || defaultAvatar;
  const displayName = userData.displayName || 'player';

  const rankKey = userData.stats.rank as RankKey;

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `ease-in-out hover:text-indigo-500 transition duration-300 ${isActive ? 'text-indigo-500 cursor-default' : ''}`;

  return (
    <header className='doodle-border my-4 flex items-center justify-between p-2 px-5'>
      <NavLink
        to='/'
        className='flex w-fit cursor-pointer items-center gap-3 transition-transform hover:text-indigo-500'
      >
        <img src={logo} alt='Logo' className='h-14' />
        <span className='text-3xl font-bold transition duration-300'>Sea of Code</span>
      </NavLink>

      <div className='flex items-center justify-between gap-10'>
        <nav className='flex items-center justify-between'>
          <ul className='flex gap-5 text-xl'>
            <NavLink to={'/about'} className={linkClass}>
              About
            </NavLink>
            <NavLink to={'/clans'} className={linkClass}>
              Clans
            </NavLink>
            <NavLink to={'/Profile'} className={linkClass}>
              Profile
            </NavLink>
            <NavLink to={'/'} className={linkClass}>
              Headquarters
            </NavLink>
          </ul>
        </nav>

        <div className='doodle-vr h-15' />

        <div className='flex gap-5'>
          <ThemeButton />

          <Button
            variant='round'
            onClick={logoutUser}
            icon={<img src={logoutIcon} alt='logout icon' className='h-9 w-9' />}
            className='bg-red-400 stroke-red-400 text-[#3c3c3c] hover:bg-red-500'
          ></Button>
        </div>

        <div className='doodle-vr h-15' />

        <NavLink to={'/Profile'} className={''}>
          <div className='group flex items-center gap-3'>
            <div className='relative h-15 w-15'>
              <img
                ref={imgRef}
                src={avatar}
                alt='avatar'
                className='h-full w-full scale-90 object-cover'
              />
              <div className='doodle-border pointer-events-none absolute inset-0 !bg-transparent'></div>
            </div>

            <div className='flex flex-col'>
              <div className='flex items-center gap-3'>
                <span className='text-center text-3xl sm:text-3xl'>{displayName}</span>
                <img
                  className='w-5'
                  src={ranks[rankKey]?.src || ranks.unga.src}
                  alt={ranks[rankKey]?.alt || ''}
                />
              </div>
              <ProgressBar value={userData.stats.to_rank} showValue={true} />
            </div>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
