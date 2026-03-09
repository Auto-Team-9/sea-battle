import type { FC } from 'react';
import { NavLink } from 'react-router';

interface AuthLinkProps {
  text: string;
  linkTo: string;
  linkText: string;
}

const RegisterLink: FC<AuthLinkProps> = ({ text, linkTo, linkText }) => (
  <div className='m-auto mt-6 w-fit text-center md:mt-8'>
    <span className='dark:text-gray-400'>
      {text}
      <br />
      <NavLink to={linkTo} className='font-semibold text-indigo-400 hover:text-indigo-500'>
        {linkText}
      </NavLink>
    </span>
  </div>
);

export default RegisterLink;
