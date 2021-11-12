import find from 'lodash/find';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

import {
  InfoScreen,
  RepositoryItem,
  RepositoryModal,
} from '../../../components';
import { useFavoritesContext } from '../../../contexts/favorites';
import { RepositoryType } from '../../../types';
import { ListWrapper, Wrapper } from './styles';

const Favorites = () => {
  const [selectedRepo, setSelectedRepo] = useState<
    RepositoryType | undefined
  >();
  const { favorites, toggleFavorite } = useFavoritesContext();

  const handleFavoritePress = (repo: RepositoryType) => () => {
    toggleFavorite(repo);
  };

  const toggleModal = (repo: RepositoryType | undefined) => () => {
    setSelectedRepo(repo);
  };

  const renderListItem = ({ item }: { item: RepositoryType }) => {
    return (
      <RepositoryItem
        isFavorite={!!find(favorites, { id: item.id })}
        onFavoritePress={handleFavoritePress(item)}
        onPress={toggleModal(item)}
        data={item}
      />
    );
  };

  return (
    <Wrapper>
      <ListWrapper>
        {(favorites.length && (
          <FlatList
            data={favorites}
            style={{ width: '100%' }}
            renderItem={renderListItem}
            keyExtractor={(item: RepositoryType) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )) || <InfoScreen icon="star-outline" text="Empty favorites" />}
      </ListWrapper>
      <RepositoryModal data={selectedRepo} onClose={toggleModal(undefined)} />
    </Wrapper>
  );
};

export default Favorites;
