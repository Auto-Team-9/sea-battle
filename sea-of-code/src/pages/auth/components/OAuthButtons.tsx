import Button from '../../../components/ui/Button';
import gitHubLogo from '../../../assets/gitHub-logo-black.svg';
import googleLogo from '../../../assets/google-logo.svg';
import { githubSignIn, googleSignIn } from '../../../api/auth';
import { useState } from 'react';
import Loading from '../../../components/ui/loading';

enum OAuthProvider {
  Google,
  GitHub,
}

const OAuthButtons = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOAuth = async (provider: OAuthProvider) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const res = provider === OAuthProvider.Google ? await googleSignIn() : await githubSignIn();
      if (!res.success) {
        console.error(res.error);
        return;
      }
      console.log('User:', res.user);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading className='fixed' />}

      <div className='mt-10 flex items-center gap-4'>
        <hr className='w-full flex-grow' />
        <p className='text-sm whitespace-nowrap'>Or continue with</p>
        <hr className='w-full flex-grow rotate-180 transform' />
      </div>

      <div className='mt-6 grid grid-cols-2 gap-3'>
        <Button
          variant='secondary'
          onClick={() => handleOAuth(OAuthProvider.Google)}
          icon={<img src={googleLogo} alt='GitHub Logo' className='h-5 w-auto' />}
        >
          Google
        </Button>

        <Button
          variant='secondary'
          onClick={() => handleOAuth(OAuthProvider.GitHub)}
          icon={<img src={gitHubLogo} alt='Google Logo' className='h-5 w-auto' />}
        >
          GitHub
        </Button>
      </div>
    </>
  );
};

export default OAuthButtons;
