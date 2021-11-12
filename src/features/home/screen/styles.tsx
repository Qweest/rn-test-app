import styled from 'styled-components/native';

import { metrics } from '../../../styles';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  padding: ${metrics.spacing}px;
  padding-top: 0;
`;

export const ListWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FilterButton = styled.TouchableOpacity`
  padding-left: ${metrics.spacing * 0.5}px;
`;
