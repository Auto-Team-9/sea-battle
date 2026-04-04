import type { ReactNode } from 'react';

interface ClanModalProps {
  children: ReactNode;
  className?: string;
}

const ClanModal = ({ children, className }: ClanModalProps) => (
  <div className='modal-backdrop-animated fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
    <div
      className={`doodle doodle-border flex w-full max-w-sm flex-col gap-4 p-6 mx-4${className ? ` ${className}` : ''}`}
      style={{
        background: `linear-gradient(var(--color-bg-secondary), transparent 2px), linear-gradient(90deg, var(--color-bg-secondary), transparent 2px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: 'center center',
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      {children}
    </div>
  </div>
);

export default ClanModal;
