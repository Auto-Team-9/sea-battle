import logo from '../../../assets/battleship-alt.svg';

interface AuthHeaderProps {
  title: string;
}

const AuthHeader = ({ title }: AuthHeaderProps) => (
  <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
    <img src={logo} alt='Battleship Logo' className='mx-auto h-24 w-auto' />
    <h2 className='text-center text-2xl'>{title}</h2>
  </div>
);

export default AuthHeader;
