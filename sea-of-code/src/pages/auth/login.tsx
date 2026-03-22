import LoginForm from './components/LoginForm';
import AuthPage from './components/AuthPage';

const Login = () => {
  return (
    <AuthPage
      title='Sign in, commander'
      form={<LoginForm />}
      linkText="Don't have an account?"
      linkLabel='Create Account'
      linkTo='/auth/register'
    />
  );
};

export default Login;
