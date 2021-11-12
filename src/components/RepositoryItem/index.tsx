import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useThemeContext } from '../../contexts/theme';
import { RepositoryType } from '../../types';
import {
  ColumnBlock,
  FavoriteButton,
  Language,
  RepoName,
  Separator,
  UserAvatar,
  Wrapper,
} from './styles';

interface Props {
  style?: any;
  data: RepositoryType;
  onPress?: () => void;
  onFavoritePress?: () => void;
  isFavorite?: boolean;
}

const RepositoryItem: React.FC<Props> = props => {
  const { style, data, onPress, onFavoritePress, isFavorite } = props;
  const { theme } = useThemeContext();
  const { owner, full_name, language } = data;

  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper style={style}>
        <UserAvatar user={owner} />
        <ColumnBlock style={{ flex: 1 }}>
          <RepoName numberOfLines={1}>{full_name}</RepoName>
          {language && <Language>{language}</Language>}
        </ColumnBlock>
        <FavoriteButton onPress={onFavoritePress}>
          <Ionicons
            name="heart"
            size={24}
            color={isFavorite ? theme.accent : theme.background.primary}
          />
        </FavoriteButton>
      </Wrapper>
      <Separator style={{ backgroundColor: theme.text.secondary }} />
    </TouchableOpacity>
  );
};

export default memo(RepositoryItem);
