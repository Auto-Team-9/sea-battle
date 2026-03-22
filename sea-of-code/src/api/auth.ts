import { auth, githubProvider, provider } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type AuthError,
  type UserCredential,
} from 'firebase/auth';

export type RegisterData = {
  email: string;
  password: string;
  displayName: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type AuthSuccessResponse = {
  success: true;
  user: UserCredential['user'] | null;
};

export type AuthErrorReponse = {
  success: false;
  error: {
    code: string;
    message: string;
  };
};

export type AuthResponse = AuthSuccessResponse | AuthErrorReponse;

export const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);

    await updateProfile(userCredential.user, {
      displayName: data.displayName,
    });

    await userCredential.user.reload();

    return {
      success: true,
      user: userCredential.user,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);

    return {
      success: true,
      user: userCredential.user,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const logoutUser = async (): Promise<AuthResponse> => {
  try {
    await signOut(auth);
    return { success: true, user: null };
  } catch (error) {
    return handleError(error);
  }
};

export const googleSignIn = async (): Promise<AuthResponse> => {
  try {
    const result = await signInWithPopup(auth, provider);

    return {
      success: true,
      user: result.user,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const githubSignIn = async (): Promise<AuthResponse> => {
  try {
    const result = await signInWithPopup(auth, githubProvider);

    return {
      success: true,
      user: result.user,
    };
  } catch (error) {
    return handleError(error);
  }
};

const handleError = (error: unknown): AuthErrorReponse => {
  if (isAuthError(error)) {
    return {
      success: false,
      error: {
        code: error.code,
        message: errorMessageFormatting(error.code),
      },
    };
  }

  return {
    success: false,
    error: {
      code: 'unknown',
      message: 'Something went wrong',
    },
  };
};

const errorMessageFormatting = (message: string): string => {
  return message.replace(/auth\/|-/g, ' ');
};

const isAuthError = (error: unknown): error is AuthError => {
  return typeof error === 'object' && error !== null && 'code' in error && 'message' in error;
};
