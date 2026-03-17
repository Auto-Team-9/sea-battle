import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

const Input = ({ label, name, error, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium'>
        {label}
      </label>

      <div className='my-2'>
        <input
          id={name}
          name={name}
          className={`block w-full rounded-md bg-white/50 px-3 py-1.5 text-base outline-0 sm:text-sm dark:bg-black/10 ${error ? 'outline-2 -outline-offset-8 outline-rose-500 outline-dashed' : ''}`}
          {...props}
        />
      </div>

      {error && <p className='block text-sm font-medium text-rose-500'>{error}</p>}
    </div>
  );
};

export default Input;
