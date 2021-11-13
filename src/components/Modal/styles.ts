import styled from 'styled-components/native';

import { metrics } from '../../styles';

export const ContentWrapper = styled.View`
  height: 60%;
  margin-bottom: -10%;
  padding: ${metrics.spacing}px;
  border-radius: 20px;
`;

export const SwipeLine = styled.View`
  align-self: center;
  width: 150px;
  height: 5px;
  border-radius: 5px;
  opacity: 0.5;
  margin-bottom: ${metrics.spacing}px;
`;
