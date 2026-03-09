import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-900/50 dark:hover:bg-indigo-500',
  secondary: 'bg-slate-300 hover:bg-slate-400 dark:bg-slate-900/50 dark:hover:bg-slate-800',
};

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
