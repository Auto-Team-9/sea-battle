import LoginForm from '../../components/auth/LoginForm';
import LoginHeader from '../../components/auth/LoginHeader';
import OAuthButtons from '../../components/auth/OAuthButtons';
import RegisterLink from '../../components/auth/RegisterLink';

const Login = () => {
  return (
    <div className='flex min-h-full flex-col justify-center self-center'>
      <LoginHeader />

      <div className='doodle doodle-border mt-5 rounded-xl bg-white/50 p-3 sm:mx-auto sm:mt-7 sm:w-full sm:max-w-sm sm:p-6 dark:bg-black/10'>
        <LoginForm />

        <OAuthButtons />

        <RegisterLink />
      </div>
    </div>
  );
};

export default Login;
