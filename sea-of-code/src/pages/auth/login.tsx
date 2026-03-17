import LoginForm from './components/LoginForm';
import AuthHeader from './components/AuthHeader';
import OAuthButtons from './components/OAuthButtons';
import AuthLink from './components/AuthLink';

const Login = () => {
  return (
    <div className='flex min-h-full flex-col justify-center self-center'>
      <AuthHeader title={'Sign in, commander'} />

      <div className='doodle doodle-border mt-5 rounded-xl bg-white/50 p-3 sm:mx-auto sm:mt-7 sm:w-full sm:max-w-sm sm:p-6 dark:bg-black/10'>
        <LoginForm />

        <OAuthButtons />

        <AuthLink
          text={"Don't have an account?"}
          linkText={'Create Account'}
          linkTo={'/Auto-Team-9-Widget-Trainer/auth/register'}
        />
      </div>
    </div>
  );
};

export default Login;
