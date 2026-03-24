import { useEffect, useRef, useState, type JSX } from 'react';
import { defaultAvatar, profileImage, ranks } from '../../../../constants/images';
import type { UserData } from '../../../../types/types';
import { Pixelit } from '../pixel/pixel';

const UserProfileCard = ({ userData }: { userData: UserData }): JSX.Element => {
  const [avatar, setAvatar] = useState(() => {
    const savedImage = localStorage.getItem(profileImage);
    return savedImage || defaultAvatar;
  });

  const {
    displayName,
    stats: { rank, to_rank },
  } = userData;

  const { name, src, alt } = ranks[rank as keyof typeof ranks];

  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = event => {
      if (event.target?.result && typeof event.target.result === 'string') {
        const image = event.target.result;
        localStorage.setItem(profileImage, image);
        setAvatar(image);
      }
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;

    if (!img || !canvas) return;

    const handleLoad = () => {
      const px = new Pixelit({
        to: canvas,
        from: img,
        scale: 10,
      });

      px.pixelate();
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }, [avatar]);

  return (
    <div className='doodle-border w-full'>
      <div className='flex items-center'>
        <img src='./profile-images/personal.png' alt='personal' className='h-20 w-28 bg-cover' />
        <h1 className='py-4 text-xl sm:text-4xl'>Personal data</h1>
      </div>

      <div className='doodle-border flex flex-col justify-around gap-2 text-[--color-text] sm:gap-6 sm:p-4 lg:flex-row'>
        <div className='flex flex-col items-center'>
          <img ref={imgRef} src={avatar} alt='avatar' className='hidden' />

          <canvas ref={canvasRef} className='h-64 w-36 rounded-xl sm:h-82 sm:w-64' />

          <label
            htmlFor='photo-upload'
            className='doodle-border w-70 cursor-pointer text-center sm:text-2xl lg:w-full'
          >
            Upload a photo
          </label>

          <input
            id='photo-upload'
            type='file'
            accept='image/*'
            className='hidden'
            onChange={handleImageUpload}
          />
        </div>

        <div className='flex flex-col gap-2 py-4 text-2xl sm:gap-4'>
          <h1 className='text-center text-3xl sm:text-5xl'>{displayName}</h1>

          <div className='flex flex-col gap-2 sm:flex-row'>
            <p className='text-xl sm:text-4xl'>Rank: {name}</p>
          </div>

          <div className='flex items-center gap-2 sm:gap-4'>
            <p className='text-xl sm:text-4xl'>Grade:</p>
            <img src={src} alt={alt} className='h-12 w-14 sm:h-16 sm:w-20' />
          </div>

          <div className='flex items-center'>
            <p className='text-xl sm:text-4xl'>Clan:</p>
            <img
              src='./profile-images/сode_сlan.png'
              alt='Clan'
              className='h-12 w-14 sm:h-18 sm:w-22'
            />
          </div>

          <div className='flex items-center gap-4'>
            <p className='text-xl sm:text-4xl'>To rank</p>
            <progress className='text-sm sm:text-2xl' value={to_rank} max='100'></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
