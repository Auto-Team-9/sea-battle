import Button from '../../../components/ui/Button';
import ClanModal from './ClanModal';

interface ChangeClanModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  disabled?: boolean;
}

const ChangeClanModal = ({ onConfirm, onCancel, disabled }: ChangeClanModalProps) => {
  return (
    <ClanModal>
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
    </ClanModal>
  );
};

export default ChangeClanModal;
