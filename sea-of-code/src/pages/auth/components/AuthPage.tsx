import AuthHeader from './AuthHeader';
import AuthLink from './AuthLink';
import OAuthButtons from './OAuthButtons';

type AuthPageProps = {
  title: string;
  form: React.ReactNode;
  linkText: string;
  linkLabel: string;
  linkTo: string;
};

const AuthPage = ({ title, form, linkText, linkLabel, linkTo }: AuthPageProps) => {
  return (
    <div className='flex min-h-full flex-col justify-center self-center'>
      <AuthHeader title={title} />

      <div className='doodle doodle-border mt-5 rounded-xl bg-white/50 p-3 sm:mx-auto sm:mt-7 sm:w-full sm:max-w-sm sm:p-6 dark:bg-black/10'>
        {form}

        <OAuthButtons />

        <AuthLink text={linkText} linkText={linkLabel} linkTo={linkTo} />
      </div>
    </div>
  );
};

export default AuthPage;
