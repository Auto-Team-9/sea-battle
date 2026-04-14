import { useState } from 'react';
import { registerUser } from '../../../api/auth';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Loading from '../../../components/ui/loading';
import Message from '../../../components/ui/Message';
import { validateRegisterForm, type FormErrors, type RegisterFormData } from './formValidation';
import { FirebaseError } from 'firebase/app';

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
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

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();

    if (isLoading) return;

    setBackendError(null);

    const validationErrors = validateRegisterForm(formData);
    const hasErrors = Object.values(validationErrors).some(Boolean);

    if (hasErrors) {
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

      if (!result.success) {
        setIsLoading(false);
        setBackendError(result.error.message);
      }
    } catch (error: unknown) {
      handleError(error);
    }
  };

  function handleError(error: unknown) {
    let errorMessage = 'Something went wrong';

    if (error instanceof FirebaseError) {
      errorMessage = error.message;
    }
    setIsLoading(false);

    setBackendError(errorMessage);
  }

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
        maxLength={10}
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
        maxLength={25}
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
        maxLength={25}
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
        maxLength={25}
        autoComplete='new-password'
        required
      />

      <Button type='submit'>Register</Button>
    </form>
  );
};

export default RegisterForm;
