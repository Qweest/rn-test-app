import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import { metrics } from '../../styles';

export const Wrapper = styled.View`
  flex: 1;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Ionicons)`
  margin-left: ${metrics.spacing}px;
`;

export const RemoveIcon = styled(Ionicons)`
  margin-right: ${metrics.spacing}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: ${metrics.fontSize.regular}px;
  font-family: ${metrics.fontFamily.workSans};
  border-radius: 10px;
  padding: ${metrics.spacing * 0.25}px ${metrics.spacing}px;
  margin: 0;
`;
