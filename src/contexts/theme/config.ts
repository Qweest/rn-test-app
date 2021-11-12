import colors from '../../styles/colors';
import { ThemeType } from './types';

const theme: ThemeType = {
  dark: {
    isDark: true,
    text: {
      primary: colors.white,
      secondary: colors.lightSteelBlue,
    },
    background: {
      primary: colors.independence,
      secondary: colors.space,
    },
    accent: colors.blueJeans,
  },
  light: {
    isDark: false,
    text: {
      primary: colors.richBlack,
      secondary: colors.dimGray,
    },
    background: {
      primary: colors.manatee,
      secondary: colors.platinum,
    },
    accent: colors.snow,
  },
};

export default theme;
