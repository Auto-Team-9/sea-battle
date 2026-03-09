import Button from '../ui/Button';
import Input from '../ui/Input';

const RegisterForm = () => (
  <form className='space-y-6'>
    <Input label='Name' name='name' type='name' autoComplete='text' required />

    <Input label='Email address' name='email' type='email' autoComplete='email' required />

    <Input
      label='Password'
      name='password'
      type='password'
      autoComplete='current-password'
      required
    />

    <Input
      label='Confirm password'
      name='passwordConfirm'
      type='password'
      autoComplete='new-password'
      required
    />

    <Button type='submit'>Register</Button>
  </form>
);

export default RegisterForm;
