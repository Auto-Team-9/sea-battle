import { NavLink } from 'react-router';

const RegisterLink = () => (
  <div className='m-auto mt-6 w-fit text-center md:mt-8'>
    <span className='dark:text-gray-400'>
      Don't have an account?
      <br />
      <NavLink
        to={'/auth/register'}
        className='font-semibold text-indigo-400 hover:text-indigo-500'
      >
        Create Account
      </NavLink>
    </span>
  </div>
);

export default RegisterLink;
