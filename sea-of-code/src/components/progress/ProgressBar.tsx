import './progress.css';

interface ProgressBarProps {
  value: number;
  max?: number;
  showValue?: boolean;
}

const ProgressBar = ({ value, max = 100, showValue = true }: ProgressBarProps) => {
  return (
    <div className='relative flex h-5.5 w-full max-w-md items-center justify-center px-0.5'>
      <progress className='doodle-progress h-4 w-full' value={max - value} max={max} />
      <div className='doodle-border absolute top-0 left-0 h-full w-full !bg-transparent'></div>

      {showValue && (
        <span className='absolute top-1/2 right-2 -translate-y-1/2 text-xs font-bold text-[var(--color-text)] opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {value}xp
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
