import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import { metrics } from '../../styles';
import Text from '../Text';

export const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Ionicons)`
  margin-bottom: ${metrics.spacing}px;
`;

export const InfoText = styled(Text)`
  font-size: ${metrics.fontSize.large}px;
`;
