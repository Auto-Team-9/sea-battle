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

type MessageType = 'error' | 'success' | null;

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type Errors = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);
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

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
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

      if (result.success) {
        setFormData({
          email: '',
          password: '',
          rememberMe: false,
        });
      } else {
        setMessage({
          type: 'error',
          text: result.error.message,
        });
      }
    } finally {
      setIsLoading(false);
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
      let errorMessage = 'Something went wrong';

      if (error instanceof FirebaseError) {
        errorMessage = error.message;
      }

      setMessage({
        type: 'error',
        text: errorMessage,
      });
    }
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
      {isLoading && <Loading className='fixed' />}

      {message.type && <Message variant={message.type} size='small' message={message.text} />}

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
