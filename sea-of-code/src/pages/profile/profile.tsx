import Journal from './components/journal/journal';
import UserProfileCard from './components/user-profile-card/userProfileCard';
import Progress from './components/progress/progress';
import { Link } from 'react-router';

const Profile = () => {
  return (
    <section
      id='profile'
      className='flex flex-col items-center gap-4 bg-center min-h-screen p-4  doodle-border 
      w-full                
      sm:w-[95%]           
      md:w-[90%]            
      lg:w-[85%]            
      xl:w-240         
      mx-auto               
      my-4'
    >
      <Link
        to={'/Auto-Team-9-Widget-Trainer/'}
        className='text-3xl text-[--color-text] px-8 py-2 border-2 doodle-border rounded-xs cursor-pointer mx-auto hover:animate-pulse hover:text-amber-500 transition-colors'
      >
        Dashboard
      </Link>
      <UserProfileCard />
      <Journal />
      <Progress />
    </section>
  );
};

export default Profile;
