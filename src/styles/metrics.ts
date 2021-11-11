import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  width,
  height,
  spacing: width / 30,
  fontSize: {
    small: width / 38,
    medium: width / 32,
    regular: width / 26,
    large: width / 20,
    xLarge: width / 7,
  },
  fontFamily: {
    workSans: 'WorkSans-Regular',
    workSansI: 'WorkSans-Italic',
    workSansB: 'WorkSans-Bold',
  },
};
