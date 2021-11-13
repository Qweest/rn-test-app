import axios from 'axios';
import debounce from 'lodash/debounce';
import filter from 'lodash/filter';
import find from 'lodash/find';
import map from 'lodash/map';
import trim from 'lodash/trim';
import uniqBy from 'lodash/uniqBy';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  InfoScreen,
  Input,
  Picker,
  RepositoryItem,
  RepositoryModal,
} from '../../../components';
import { useFavoritesContext } from '../../../contexts/favorites';
import { useThemeContext } from '../../../contexts/theme';
import { RepositoryType } from '../../../types';
import { GITHUB_REPO_URL } from '../constants';
import { FilterButton, InputWrapper, ListWrapper, Wrapper } from './styles';

const Home = () => {
  const { theme } = useThemeContext();
  const [search, setSearch] = useState('');
  const [repos, setRepos] = useState<RepositoryType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [canSearch, setCanSearch] = useState(true);
  const [page, setPage] = useState({ current: 0, next: 1 });
  const [selectedRepo, setSelectedRepo] = useState<
    RepositoryType | undefined
  >();
  const { favorites, toggleFavorite } = useFavoritesContext();
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [languages, setLanguages] = useState<string[]>([]);
  const [openPicker, setOpenPicker] = useState(false);
  const [reposToShow, setReposToShow] = useState<RepositoryType[]>([]);

  const searchRepositories = async (keyword: string) => {
    try {
      const { data, headers } = await axios.get(
        GITHUB_REPO_URL + `?q=${keyword}&page=${page.next}`,
      );
      const { items } = data as { items: RepositoryType[] };
      const nextRepos = uniqBy([...repos, ...items], 'id');
      const { link } = headers;
      const next = link?.match(/rel="next"/);

      setPage({
        current: page.next,
        next: next ? page.next + 1 : page.next,
      });
      setRepos(nextRepos);
    } catch (e) {
      console.log(e);
      Toast.show({
        type: 'error',
        text1: 'Something bad happened',
        position: 'bottom',
        keyboardOffset: 100,
      });
    }

    setIsLoading(false);
  };

  const searchRepositoriesWithDebounce = useCallback(
    debounce(searchRepositories, 1000),
    [],
  );

  const handleEndReach = async () => {
    if (page.current !== page.next && canSearch) {
      setCanSearch(false);
      await searchRepositories(search);
      setCanSearch(true);
    }
  };

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

  useEffect(() => {
    setPage({ current: 0, next: 1 });
    setRepos([]);
    searchRepositoriesWithDebounce.cancel();

    if (trim(search).length) {
      setIsLoading(true);
      searchRepositoriesWithDebounce(search);
    } else {
      setIsLoading(false);
    }
  }, [search]);

  useEffect(() => {
    if (repos.length) {
      const data = uniqBy(repos, 'language');
      const langs = map(data, it => it.language);
      const filtered = filter(langs, it => it) as string[];

      setLanguages(filtered);
    } else {
      setLanguages([]);
    }
  }, [repos]);

  useEffect(() => {
    if (selectedLanguage === 'all') {
      setReposToShow(repos);
    } else {
      const filtered = filter(repos, { language: selectedLanguage });
      setReposToShow(filtered);
    }
  }, [selectedLanguage, repos]);

  return (
    <Wrapper>
      <InputWrapper style={{ backgroundColor: theme.background.primary }}>
        <Input
          icon="search"
          placeholder="Search for repositories..."
          value={search}
          onChangeText={setSearch}
          removable
        />
        {languages.length !== 0 ? (
          <FilterButton onPress={() => setOpenPicker(!openPicker)}>
            <Ionicons name="pint" color={theme.text.secondary} size={20} />
          </FilterButton>
        ) : null}
      </InputWrapper>
      <ListWrapper>
        {(isLoading && (
          <ActivityIndicator size="small" color={theme.background.primary} />
        )) ||
          (reposToShow.length && (
            <FlatList
              data={reposToShow}
              style={{ width: '100%' }}
              renderItem={renderListItem}
              keyExtractor={(item: RepositoryType) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              onEndReached={handleEndReach}
              onEndReachedThreshold={100}
            />
          )) || <InfoScreen icon="globe" text="Try to search repositories" />}
      </ListWrapper>
      <RepositoryModal data={selectedRepo} onClose={toggleModal(undefined)} />
      <Picker
        isVisible={openPicker}
        onClose={() => setOpenPicker(false)}
        selectedValue={selectedLanguage}
        onValueChange={language => setSelectedLanguage(language)}
        data={map(languages, it => ({ label: it, value: it }))}
        firstOption={{ label: 'All', value: 'all' }}
      />
    </Wrapper>
  );
};

export default Home;
