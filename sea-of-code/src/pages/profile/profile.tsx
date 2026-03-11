import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getDataFromUser } from '../../firebase/config.js';

import Journal from './components/journal/journal';
import UserProfileCard from './components/user-profile-card/userProfileCard';
import Progress from './components/progress/progress';
import type { UserData } from '../../types/types.js';
import Loading from '../../components/loading/loading.js';
import CustomError from '../../components/error/custom-error.js';

const Profile = () => {
  const [userData, setUserData] = useState<UserData>({
    nickname: '',
    rank: '',
    clan: '',
    defeats: 0,
    fighting: 0,
    first_battle: false,
    fleet_storm: 0,
    miles_at_sea: 0,
    sea_wolf: 0,
    sniper: 0,
    to_rank: 0,
    victories: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUserdata = async () => {
      try {
        setLoading(true);
        const data = await getDataFromUser('current');
        if (data) {
          setUserData(prev => ({ ...prev, ...data }));
        } else {
          setError('Пользователь не найден');
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setError(errorMessage);
        console.error('Ошибка при загрузке данных пользователя:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserdata();
  }, []);

  if (loading) return <Loading />;
  if (error) return <CustomError message={error} />;

  return (
    <section
      id='profile'
      className='doodle-border mx-auto my-4 flex min-h-screen w-full flex-col items-center gap-4 bg-center p-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'
    >
      <Link
        to={'/Auto-Team-9-Widget-Trainer/'}
        className='doodle-border mx-auto cursor-pointer rounded-xs border-2 px-8 py-2 text-3xl text-[--color-text] transition-colors hover:animate-pulse hover:text-amber-500'
      >
        Dashboard
      </Link>
      <UserProfileCard userData={userData} />
      <Journal userData={userData} />
      <Progress userData={userData} />
    </section>
  );
};

export default Profile;
