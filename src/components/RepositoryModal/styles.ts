import styled from 'styled-components/native';

import { metrics } from '../../styles';
import Text from '../Text';

export const ContentWrapper = styled.View`
  height: 50%;
  padding: ${metrics.spacing}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${metrics.spacing * 0.5}px;
`;

export const UrlButton = styled.TouchableOpacity`
  flex: 1;
  padding: ${metrics.spacing * 0.25}px ${metrics.spacing * 0.5}px;
  border-radius: 5px;
`;

export const UrlText = styled(Text)`
  font-size: ${metrics.fontSize.medium}px;
`;

export const Title = styled(Text)`
  font-size: ${metrics.fontSize.large}px;
  font-family: ${metrics.fontFamily.workSansB};
  margin-bottom: ${metrics.spacing}px;
`;

export const Label = styled(Text)`
  font-family: ${metrics.fontFamily.workSansI};
  width: 100px;
`;

export const Description = styled(Text)``;
