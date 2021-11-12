import { RepositoryType } from '../../types';

export type FavoritesContextType = {
  toggleFavorite: (item: RepositoryType) => void;
  favorites: RepositoryType[];
};
