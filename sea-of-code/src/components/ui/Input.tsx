import type { InputHTMLAttributes, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: FC<InputProps> = ({ label, name, className = '', ...props }) => {
  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium'>
        {label}
      </label>

      <div className='mt-2'>
        <input
          id={name}
          name={name}
          className={`block w-full rounded-md bg-white/50 px-3 py-1.5 text-base outline-0 sm:text-sm dark:bg-black/10 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
