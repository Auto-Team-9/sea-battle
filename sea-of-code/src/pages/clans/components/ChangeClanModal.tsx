import Button from '../../../components/ui/Button';

interface ChangeClanModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  disabled?: boolean;
}

const ChangeClanModal = ({ onConfirm, onCancel, disabled }: ChangeClanModalProps) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div
        className='doodle doodle-border flex w-full max-w-sm flex-col gap-4 p-6 mx-4'
        style={{
          background: `linear-gradient(var(--color-bg-secondary), transparent 2px), linear-gradient(90deg, var(--color-bg-secondary), transparent 2px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: 'center center',
          backgroundColor: 'var(--color-bg-primary)',
        }}
      >
        <h2 className='text-xl font-bold'>Change Clan?</h2>
        <p className='text-sm opacity-80'>
          Are you sure you want to change your clan? All your battle statistics will be reset.
        </p>
        <div className='flex gap-3'>
          <Button variant='primary' onClick={onConfirm} disabled={disabled}>
            Confirm
          </Button>
          <Button variant='secondary' onClick={onCancel} disabled={disabled}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeClanModal;
