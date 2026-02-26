import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className='p-4'>
      <nav className='flex justify-between items-center'>
        <div className='w-16 h-16 cursor-pointer hover:scale-120 transition-transform'>
          <img src='./battleship.png' alt='logo' />
        </div>
        <h1 className='text-4xl'>Sea of Code</h1>
        <ul className='flex gap-4 text-xl '>
          <NavLink
            to={'/auth/register'}
            className='p-2 hover:bg-blue-600 transition-colors rounded-xl'
          >
            Register
          </NavLink>
          <NavLink
            to={'/auth/login'}
            className='p-2 hover:bg-blue-600 transition-colors rounded-xl'
          >
            Login
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
