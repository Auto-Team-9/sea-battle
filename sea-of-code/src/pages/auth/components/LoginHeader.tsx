import logo from '../../assets/battleship-alt.svg';

const LoginHeader = () => (
  <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
    <img src={logo} alt='Battleship Logo' className='mx-auto h-24 w-auto' />

    <h2 className='text-center text-2xl'>Sign in, commander</h2>
  </div>
);

export default LoginHeader;
