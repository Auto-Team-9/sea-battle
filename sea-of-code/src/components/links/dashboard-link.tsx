import { Link } from 'react-router';

const DasboardLink = () => {
  return (
    <Link
      to={'/Auto-Team-9-Widget-Trainer/'}
      className='doodle-border mx-auto cursor-pointer rounded-xs border-2 px-8 py-2 text-3xl text-[--color-text] transition-colors hover:animate-pulse hover:text-amber-500'
    >
      Dashboard
    </Link>
  );
};

export default DasboardLink;
