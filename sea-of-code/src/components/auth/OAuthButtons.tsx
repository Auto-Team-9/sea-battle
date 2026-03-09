import Button from '../ui/Button';
import gitHubLogo from '../../assets/gitHub-logo-black.svg';
import googleLogo from '../../assets/google-logo.svg';

const OAuthButtons = () => (
  <>
    <div className='mt-10 flex items-center gap-4'>
      <hr className='w-full flex-grow' />
      <p className='text-sm whitespace-nowrap'>Or continue with</p>
      <hr className='w-full flex-grow rotate-180 transform' />
    </div>

    <div className='mt-6 grid grid-cols-2 gap-3'>
      <Button
        variant='secondary'
        icon={<img src={googleLogo} alt='GitHub Logo' className='h-5 w-auto' />}
      >
        Google
      </Button>

      <Button
        variant='secondary'
        icon={<img src={gitHubLogo} alt='Google Logo' className='h-5 w-auto' />}
      >
        GitHub
      </Button>
    </div>
  </>
);

export default OAuthButtons;
