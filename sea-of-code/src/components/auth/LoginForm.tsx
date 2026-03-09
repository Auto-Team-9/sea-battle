import Button from '../ui/Button';
import Input from '../ui/Input';

const LoginForm = () => (
  <form className='space-y-6'>
    <Input label='Email address' name='email' type='email' autoComplete='email' required />

    <Input
      label='Password'
      name='password'
      type='password'
      autoComplete='current-password'
      required
    />

    <div className='flex items-center justify-between gap-5'>
      <div className='flex items-center'>
        <input
          id='remember-me'
          name='remember-me'
          type='checkbox'
          className='h-4 w-4 cursor-pointer'
        />

        <label htmlFor='remember-me' className='ml-2 block cursor-pointer text-start text-sm'>
          Remember me
        </label>
      </div>

      <a className='text-end text-sm font-medium text-indigo-400 hover:text-indigo-500' href='#'>
        Forgot password?
      </a>
    </div>

    <Button type='submit'>Sign in</Button>
  </form>
);

export default LoginForm;
