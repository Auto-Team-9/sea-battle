import Button from '../../../components/ui/Button';
import ClanModal from './ClanModal';
import { clans } from '../../../constants/images';
import type { ClanKey } from '../../../types/clans.type';

interface JoinSuccessModalProps {
  clanKey: ClanKey;
  onClose: () => void;
}

const JoinSuccessModal = ({ clanKey, onClose }: JoinSuccessModalProps) => {
  const clan = clans[clanKey];

  return (
    <ClanModal className='modal-bounce-in'>
      <div className='flex flex-col items-center gap-3 text-center'>
        <img src={clan.image} alt={clan.name} className='modal-img-pop h-20 w-20 object-contain' />
        <div className='modal-text-in flex flex-col items-center gap-3'>
          <h2 className='text-xl font-bold'>Welcome to {clan.name}!</h2>
          <p className='text-sm opacity-80'>{clan.tagline}</p>
          <p className='text-sm opacity-70'>
            You have successfully joined the clan. Battle alongside your allies and lead them to victory!
          </p>
          <Button variant='primary' onClick={onClose} className='mt-2'>
            Let's Go!
          </Button>
        </div>
      </div>
    </ClanModal>
  );
};

export default JoinSuccessModal;
