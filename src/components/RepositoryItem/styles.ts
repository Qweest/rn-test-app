import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { colors, metrics } from '../../styles';
import Avatar from '../Avatar';
import Text from '../Text';

export const Wrapper = styled.View`
  width: 100%;
  height: 75px;
  flex-direction: row;
  align-items: center;
  padding: ${metrics.spacing}px;
`;

export const UserAvatar = styled(Avatar)`
  margin-right: ${metrics.spacing}px;
`;

export const ColumnBlock = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const RepoName = styled(Text)`
  margin-right: ${metrics.spacing * 0.5}px;
`;

export const Language = styled(Text)`
  color: ${colors.orange};
  margin-top: ${metrics.spacing * 0.5}px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  justify-content: center;
  height: 100%;
  padding: 0 ${metrics.spacing}px;
`;

export const Separator = styled.View`
  opacity: 0.25;
  height: 1px;
  width: 100%;
`;
