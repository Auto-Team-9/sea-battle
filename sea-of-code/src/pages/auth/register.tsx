import AuthHeader from '../../components/auth/AuthHeader';
import OAuthButtons from '../../components/auth/OAuthButtons';
import AuthLink from '../../components/auth/AuthLink';
import RegisterForm from '../../components/auth/RegisterForm';

const Register = () => {
  return (
    <div className='flex min-h-full flex-col justify-center self-center'>
      <AuthHeader title={'New commander'} />

      <div className='doodle doodle-border mt-5 rounded-xl bg-white/50 p-3 sm:mx-auto sm:mt-7 sm:w-full sm:max-w-sm sm:p-6 dark:bg-black/10'>
        <RegisterForm />

        <OAuthButtons />

        <AuthLink text={'Already have an account?'} linkText={'Login'} linkTo={'/auth/login'} />
      </div>
    </div>
  );
};

export default Register;
