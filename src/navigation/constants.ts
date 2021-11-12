import { DynamicKey } from '../types';

export const SCREENS = {
  HOME: 'HOME',
  FAVORITES: 'FAVORITES',
};

export const TAB_ICONS: DynamicKey<string> = {
  [SCREENS.HOME]: 'home',
  [SCREENS.FAVORITES]: 'bookmark',
};
