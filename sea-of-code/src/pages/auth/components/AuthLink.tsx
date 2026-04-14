import { NavLink } from 'react-router';

interface AuthLinkProps {
  text: string;
  linkTo: string;
  linkText: string;
}

const AuthLink = ({ text, linkTo, linkText }: AuthLinkProps) => (
  <div className='m-auto mt-5 w-fit text-center'>
    <span>
      {text}
      <br />
      <NavLink
        to={linkTo}
        className='inline-block text-indigo-500 transition duration-300 ease-in-out hover:scale-110 active:scale-95'
      >
        {linkText}
      </NavLink>
    </span>
  </div>
);

export default AuthLink;
