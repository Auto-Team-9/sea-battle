import { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { loginUser } from '../../../api/auth';
import Loading from '../../../components/ui/loading';
import { auth } from '../../../firebase/config';
import {
  browserLocalPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,
  setPersistence,
} from 'firebase/auth';
import Message from '../../../components/ui/Message';
import { FirebaseError } from 'firebase/app';
import { validateLoginForm, type FormErrors, type LoginFormData } from './formValidation';

type MessageType = 'error' | 'success' | null;

const LoginForm = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [message, setMessage] = useState<{
    type: MessageType;
    text: string;
  }>({
    type: null,
    text: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: undefined,
    });

    if (message.type) {
      setMessage({ type: null, text: '' });
    }
  };

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();

    if (isLoading) return;

    if (message.type) {
      setMessage({ type: null, text: '' });
    }

    const validationErrors = validateLoginForm(formData);
    const hasErrors = Object.values(validationErrors).some(Boolean);

    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      await setPersistence(
        auth,
        formData.rememberMe ? browserLocalPersistence : browserSessionPersistence
      );

      const result = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (!result.success) {
        setIsLoading(false);
        setMessage({
          type: 'error',
          text: result.error.message,
        });
      }
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const handleResetPassword = async () => {
    if (!formData.email.trim()) {
      setErrors(prev => ({
        ...prev,
        email: 'Enter email to reset password',
      }));
      return;
    }

    try {
      await sendPasswordResetEmail(auth, formData.email);

      setMessage({
        type: 'success',
        text: 'Check your email for reset link',
      });
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

    setMessage({
      type: 'error',
      text: errorMessage,
    });
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4' noValidate>
      {isLoading && <Loading className='fixed' />}

      {message.type && <Message variant={message.type} size='small' message={message.text} />}

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
        autoComplete='current-password'
        required
      />
      <div className='flex items-center justify-between gap-5'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='rememberMe'
            type='checkbox'
            checked={formData.rememberMe}
            onChange={handleChange}
            className='h-4 w-4 cursor-pointer'
          />

          <label htmlFor='remember-me' className='ml-2 block cursor-pointer text-start text-sm'>
            Remember me
          </label>
        </div>

        <Button type='button' variant='link' onClick={handleResetPassword}>
          Forgot password?
        </Button>
      </div>
      <Button type='submit'>Sign in</Button>
    </form>
  );
};

export default LoginForm;
