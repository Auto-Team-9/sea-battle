import type { ShipData } from '../types/types';

export const defaultAvatar = './profile-images/default-avatar.png';
export const profileImage = 'profileImage';

export const ranks = {
  unga: {
    name: 'Курсант коммита',
    src: './profile-images/unga.png',
    alt: 'unga',
  },
  mich: {
    name: 'Навигатор багов',
    src: './profile-images/mich.png',
    alt: 'mich',
  },
  leit: {
    name: 'Командор данных',
    src: './profile-images/leit.png',
    alt: 'leit',
  },
  cap: {
    name: 'Капитан системы',
    src: './profile-images/cap.png',
    alt: 'cap',
  },
  admiral: {
    name: 'Адмирал кода',
    src: './profile-images/admiral.png',
    alt: 'admiral',
  },
};

export const clans = {
  1: {
    name: 'Клан Кода',
    image: './profile-images/clan-1.png',
  },
  2: {
    name: 'Братство Багов',
    image: './profile-images/brotherhood_bugs.png',
  },
  4: {
    name: 'Лига Логики',
    image: './profile-images/league_logic.png',
  },
};

export const inititalShips: ShipData[] = [
  { id: 1, width: 160, size: 4, orientation: 'horizontal' },
  { id: 2, width: 120, size: 3, orientation: 'horizontal' },
  { id: 3, width: 120, size: 3, orientation: 'horizontal' },
  { id: 4, width: 80, size: 2, orientation: 'horizontal' },
  { id: 5, width: 80, size: 2, orientation: 'horizontal' },
  { id: 6, width: 80, size: 2, orientation: 'horizontal' },
  { id: 7, width: 40, size: 1, orientation: 'horizontal' },
  { id: 8, width: 40, size: 1, orientation: 'horizontal' },
  { id: 9, width: 40, size: 1, orientation: 'horizontal' },
  { id: 10, width: 40, size: 1, orientation: 'horizontal' },
];
