import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-900/50 dark:hover:bg-indigo-500 focus-visible:outline-offset-[-8px]',
  secondary:
    'bg-slate-300 hover:bg-slate-400 dark:bg-slate-900/50 dark:hover:bg-slate-800 focus-visible:outline-offset-[-8px]',
  link: 'bg-none border-none text-end text-sm font-medium text-indigo-400 hover:text-indigo-500 !border-0 inline !p-0 focus-visible:outline-offset-0 rounded-none',
};

const Button = ({ variant = 'primary', icon, className = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`doodle-border flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold shadow-xs focus-visible:outline-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
