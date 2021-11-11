import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';

import { colors } from '../styles';
import { SCREENS } from './constants';
import { Wrapper } from './styles';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.HOME}
          component={() => null}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name={SCREENS.FAVORITES}
          component={() => null}
          options={{ title: 'Favorites' }}
        />
      </Stack.Navigator>
    </Wrapper>
  );
};

export default Navigation;
