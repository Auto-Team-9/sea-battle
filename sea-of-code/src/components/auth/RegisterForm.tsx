import { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
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

  const validate = (data: FormData): Errors => {
    const newErrors: Errors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Enter your name';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Enter email';
    } else if (!data.email.includes('@')) {
      newErrors.email = 'Incorrect email';
    }

    if (!data.password.trim()) {
      newErrors.password = 'Enter password';
    } else if (data.password.length < 6) {
      newErrors.password = 'Minimum 6 characters';
    }

    if (!data.passwordConfirm.trim()) {
      newErrors.passwordConfirm = 'Confirm your password';
    } else if (data.passwordConfirm !== data.password) {
      newErrors.passwordConfirm = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Форма регистрации:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4' noValidate>
      <Input
        label='Name'
        name='name'
        type='name'
        onChange={handleChange}
        error={errors.name}
        autoComplete='text'
        required
      />

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

      <Input
        label='Confirm password'
        name='passwordConfirm'
        type='password'
        onChange={handleChange}
        error={errors.passwordConfirm}
        autoComplete='new-password'
        required
      />

      <Button type='submit'>Register</Button>
    </form>
  );
};

export default RegisterForm;
