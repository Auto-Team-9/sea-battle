import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'link' | 'round';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-btn-primary)] hover:bg-[var(--color-btn-primary-hover)] focus-visible:outline-offset-[-8px]',
  secondary:
    'bg-[var(--color-btn-secondary)] hover:bg-[var(--color-btn-secondary-hover)] focus-visible:outline-offset-[-8px]',
  link: 'bg-none border-none text-end text-sm font-medium text-[var(--color-accent)] hover:opacity-80 !border-0 inline !p-0 focus-visible:outline-offset-0 rounded-none',
  round: `hover:bg-[var(--color-btn-primary-hover)] !p-0 doodle-round-button w-fit h-fit !rounded-2xl`,
};

const Button = ({ variant = 'primary', icon, className = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border px-3 py-1.5 text-sm font-semibold shadow-xs transition duration-300 ease-in-out focus-visible:outline-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
