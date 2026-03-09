import { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

type FormData = {
  email: string;
  password: string;
};

type Errors = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Форма:', formData);
  };

  const validate = (formData: FormData): Errors => {
    const newErrors: Errors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Enter email';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Incorrect email';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Enter password';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 characters';
    }

    return newErrors;
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4' noValidate>
      <Input
        label='Email address'
        name='email'
        type='email'
        onChange={handleChange}
        error={errors.email}
        autoComplete='email'
        required
      />

      <Input
        label='Password'
        name='password'
        type='password'
        onChange={handleChange}
        error={errors.password}
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
};

export default LoginForm;
