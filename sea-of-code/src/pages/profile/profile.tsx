import { useState, useEffect } from 'react';
import Journal from './components/journal/journal';
import UserProfileCard from './components/user-profile-card/userProfileCard';
import Progress from './components/progress/progress';
import type { UserData } from '../../types/types.js';
import Loading from '../../components/ui/loading.js';
import { getDataFromUser } from '../../api/users.js';
import Message from '../../components/ui/Message.js';
import { useAuth } from '../../firebase/useAuth.js';

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState('');
  const { user, loading } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const getUserdata = async () => {
      if (!user) return;

      try {
        const data = await getDataFromUser(user.uid);
        if (!isMounted) return;

        if (data) {
          const { displayName, stats } = data;
          setUserData({ displayName, stats });
        } else {
          setError('The user was not found');
          setUserData(null);
        }
      } catch (error) {
        if (!isMounted) return;
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setError(errorMessage);
        setUserData(null);
        console.error('Error when uploading user data:', error);
      }
    };

    getUserdata();

    return () => {
      isMounted = false;
    };
  }, [user]);

  if (loading) return <Loading />;
  if (error) return <Message variant='error' message={error} />;
  if (!user) return <Message variant='error' message='Please log in' />;
  if (!userData) return <Loading />;

  return (
    <section
      id='profile'
      className='doodle-border mx-auto my-4 flex min-h-screen w-full flex-col items-center gap-4 bg-center p-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'
    >
      <UserProfileCard userData={userData} />
      <Journal userData={userData} />
      <Progress userData={userData} />
    </section>
  );
};

export default Profile;
