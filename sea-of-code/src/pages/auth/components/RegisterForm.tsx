import { useState } from 'react';
import { registerUser } from '../../../api/auth';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Loading from '../../../components/loading/loading';
import Message from '../../../components/ui/Message';

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
  const [isLoading, setIsLoading] = useState(false);
  const [backendError, setBackendError] = useState<string | null>(null);

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

    if (backendError) setBackendError(null);
  };

  const validate = (data: FormData): Errors => {
    const newErrors: Errors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Enter your name';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Enter email';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Incorrect email';
    }

    if (!data.password.trim()) {
      newErrors.password = 'Enter password';
    } else if (data.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
    }

    if (!data.passwordConfirm.trim()) {
      newErrors.passwordConfirm = 'Confirm your password';
    } else if (data.passwordConfirm !== data.password) {
      newErrors.passwordConfirm = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();

    if (isLoading) return;

    setBackendError(null);

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const result = await registerUser({
        email: formData.email,
        password: formData.password,
        displayName: formData.name,
      });

      if (result.success) {
        setFormData({
          name: '',
          email: '',
          password: '',
          passwordConfirm: '',
        });
      } else {
        setBackendError(result.error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='relative space-y-4' noValidate>
      {isLoading && <Loading className='fixed' />}
      {backendError && <Message variant='error' size='small' message={backendError} />}

      <Input
        label='Name'
        name='name'
        type='text'
        onChange={handleChange}
        value={formData.name}
        error={errors.name}
        autoComplete='text'
        required
      />

      <Input
        label='Email address'
        name='email'
        type='email'
        onChange={handleChange}
        value={formData.email}
        error={errors.email}
        autoComplete='email'
        required
      />

      <Input
        label='Password'
        name='password'
        type='password'
        onChange={handleChange}
        value={formData.password}
        error={errors.password}
        autoComplete='new-password'
        required
      />

      <Input
        label='Confirm password'
        name='passwordConfirm'
        type='password'
        onChange={handleChange}
        value={formData.passwordConfirm}
        error={errors.passwordConfirm}
        autoComplete='new-password'
        required
      />

      <Button type='submit'>Register</Button>
    </form>
  );
};

export default RegisterForm;
