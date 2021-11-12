import AsyncStorage from '@react-native-async-storage/async-storage';
import filter from 'lodash/filter';
import find from 'lodash/find';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { RepositoryType } from '../../types';
import { FAVORITES_STORAGE_KEY } from './constants';
import { FavoritesContextType } from './types';

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

const FavoritesProvider: React.FC = props => {
  const { children } = props;
  const [favorites, setFavorites] = useState<RepositoryType[]>([]);

  const retrieveFavorites = async () => {
    const storedValue = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);

    if (storedValue) {
      const data = JSON.parse(storedValue);

      setFavorites(data);
    }
  };

  const saveFavorites = async () => {
    const jsonValue = JSON.stringify(favorites);
    try {
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleFavorite = (item: RepositoryType) => {
    if (find(favorites, { id: item.id })) {
      const filtered = filter(favorites, it => it.id !== item.id);
      setFavorites(filtered);
    } else {
      const {
        id,
        stargazers_count,
        language,
        full_name,
        owner,
        html_url,
        description,
      } = item;

      setFavorites([
        ...favorites,
        {
          id,
          stargazers_count,
          language,
          full_name,
          owner,
          html_url,
          description,
        },
      ]);
    }
  };

  useEffect(() => {
    saveFavorites();
  }, [favorites]);

  useEffect(() => {
    retrieveFavorites();
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavoritesContext must be used within a UserProvider');
  }

  return context;
};

export default FavoritesProvider;
