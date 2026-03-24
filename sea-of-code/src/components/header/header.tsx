import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className='p-4'>
      <nav className='flex items-center justify-between'>
        <div className='h-16 w-16 cursor-pointer transition-transform hover:scale-120'>
          <img src='./battleship.png' alt='logo' />
        </div>
        <h1 className='text-4xl'>Sea of Code</h1>
        <ul className='flex gap-4 text-xl'>
          <NavLink
            to={'/auth/register'}
            className='rounded-xl p-2 transition-colors hover:bg-blue-600'
          >
            Register
          </NavLink>
          <NavLink
            to={'/auth/login'}
            className='rounded-xl p-2 transition-colors hover:bg-blue-600'
          >
            Login
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
