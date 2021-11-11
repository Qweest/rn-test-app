import { Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { colors, metrics } from '../styles';

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.white,
    shadowColor: colors.none,
  },
  headerBackStyle: {
    width: 20,
    height: 20,
    marginLeft: Platform.OS === 'ios' ? metrics.spacing : 0,
    marginRight: metrics.spacing,
    marginBottom: Platform.OS === 'ios' ? 6 : 0,
    resizeMode: 'contain',
  },
  headerTitleStyle: {
    width: 250,
    textAlign: 'center',
    fontSize: metrics.fontSize.regular,
    color: colors.white,
  },
});

export const Wrapper = styled.View`
  flex: 1;
`;
