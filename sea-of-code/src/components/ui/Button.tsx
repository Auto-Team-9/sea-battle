import type { ButtonHTMLAttributes, ReactNode } from 'react';
import ArrowIcon from '../../assets/arrow.svg?react';
import RoundIcon from '../../styles/vendor/doodleCss/round.svg?react';

type ButtonVariant = 'primary' | 'secondary' | 'link' | 'round' | 'arrow';

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
  round: `relative hover:bg-[var(--color-btn-primary-hover)] !p-0 doodle-round-button w-fit h-fit !rounded-2xl`,
  arrow: `!p-0 !h-fit !w-fit border-none text-[var(--color-text)] hover:text-[var(--color-btn-primary-hover)] `,
};

const Button = ({ variant = 'primary', icon, className = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border px-3 py-1.5 text-sm transition duration-300 ease-in-out hover:scale-110 focus-visible:outline-2 active:scale-95 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {variant === 'arrow' ? (
        <ArrowIcon className='h-20 fill-current stroke-current text-current' />
      ) : null}
      {variant === 'round' ? (
        <RoundIcon className='absolute h-fit fill-current text-current opacity-50' />
      ) : null}
      {icon}
      {children}
    </button>
  );
};

export default Button;
