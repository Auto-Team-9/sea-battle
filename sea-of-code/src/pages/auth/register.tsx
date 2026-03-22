import AuthPage from './components/AuthPage';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <AuthPage
      title='New commander'
      form={<RegisterForm />}
      linkText='Already have an account?'
      linkLabel='Login'
      linkTo='/auth/login'
    />
  );
};

export default Register;
