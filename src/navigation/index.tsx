import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useThemeContext } from '../contexts/theme';
import Favorites from '../features/favorites';
import Home from '../features/home';
import { colors } from '../styles';
import { SCREENS, TAB_ICONS } from './constants';
import { RightHeaderWrapper, Wrapper } from './styles';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { theme, toggleTheme } = useThemeContext();

  const renderRightHeader = () => {
    return (
      <RightHeaderWrapper onPress={toggleTheme}>
        <Ionicons
          name={theme.isDark ? 'moon' : 'sunny'}
          color={theme.accent}
          size={24}
        />
      </RightHeaderWrapper>
    );
  };

  const renderTabBarIcon =
    (routeName: string) =>
    (options: { focused: boolean; color: string; size: number }) => {
      const { size, color } = options;

      return <Ionicons name={TAB_ICONS[routeName]} size={size} color={color} />;
    };

  return (
    <Wrapper>
      <StatusBar
        barStyle={theme.isDark ? 'dark-content' : 'light-content'}
        backgroundColor={theme.background.primary}
      />
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: theme.background.secondary }}
        screenOptions={({ route }): BottomTabNavigationOptions => {
          return {
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: theme.background.primary,
            },
            headerTitleStyle: { color: theme.text.primary },
            headerRight: renderRightHeader,
            tabBarStyle: {
              borderTopColor: colors.none,
              backgroundColor: theme.background.primary,
            },
            tabBarIcon: renderTabBarIcon(route.name),
            tabBarActiveTintColor: theme.accent,
            tabBarInactiveTintColor: theme.text.secondary,
            tabBarShowLabel: false,
          };
        }}
      >
        <Tab.Screen
          name={SCREENS.HOME}
          component={Home}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name={SCREENS.FAVORITES}
          component={Favorites}
          options={{ title: 'Favorites' }}
        />
      </Tab.Navigator>
      <Toast />
    </Wrapper>
  );
};

export default Navigation;
