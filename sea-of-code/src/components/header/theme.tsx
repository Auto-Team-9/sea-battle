const THEME_KEY = 'theme';
export type Theme = 'light' | 'dark';

export const setTheme = (theme: Theme) => {
  const root = document.documentElement;

  root.setAttribute('data-theme', theme);

  root.classList.toggle('dark', theme === 'dark');

  localStorage.setItem(THEME_KEY, theme);
};

export const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem(THEME_KEY) as Theme | null;

  if (saved) return saved;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
