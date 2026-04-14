type BaseFormData = {
  email: string;
  password: string;
};

export type LoginFormData = BaseFormData & {
  rememberMe: boolean;
};

export type RegisterFormData = BaseFormData & {
  name: string;
  passwordConfirm: string;
};

export type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export function validateName(name: string) {
  if (!name.trim()) {
    return 'Enter your name';
  }
}

export function validateEmail(email: string) {
  if (!email.trim()) {
    return 'Enter email';
  }
  if (!email.includes('@')) {
    return 'Incorrect email';
  }
}

export function validatePassword(password: string) {
  if (!password.trim()) {
    return 'Enter password';
  }
  if (password.length < 6) {
    return 'Password lenght should be > 5';
  }
}

export function validateConfitmPassword(password: string, passwordConfirm: string) {
  if (!passwordConfirm.trim()) {
    return 'Confirm your password';
  }
  if (passwordConfirm !== password) {
    return 'Passwords do not match';
  }
}

export const validateLoginForm = (formData: LoginFormData): FormErrors => {
  const newErrors: FormErrors = {};

  newErrors.email = validateEmail(formData.email);
  newErrors.password = validatePassword(formData.password);

  return newErrors;
};

export const validateRegisterForm = (formData: RegisterFormData): FormErrors => {
  const newErrors: FormErrors = {};

  newErrors.name = validateName(formData.name);
  newErrors.email = validateEmail(formData.email);
  newErrors.password = validatePassword(formData.password);
  newErrors.passwordConfirm = validateConfitmPassword(formData.password, formData.passwordConfirm);

  return newErrors;
};
