import { useState, useEffect } from 'react';
import { getInitialTheme, setTheme, type Theme } from '../header/theme';
import Button from './Button';
import sunIcon from '../../assets/sun-icon.svg';
import halfMoonIcon from '../../assets/half-moon-icon.svg';

const ThemeButton = () => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);
  const toggleTheme = () => setThemeState(theme === 'light' ? 'dark' : 'light');

  return (
    <Button
      variant='round'
      onClick={toggleTheme}
      className={`${theme === 'light' ? 'bg-[#3c3c3c]' : 'bg-white'}`}
      icon={
        <img
          src={theme === 'light' ? halfMoonIcon : sunIcon}
          alt='theme icon'
          className={'h-9 w-9'}
        />
      }
    ></Button>
  );
};

export default ThemeButton;
