import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ThemeProvider from './contexts/favorites';
import FavoritesProvider from './contexts/theme';
import Navigation from './navigation';

const App = () => {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default App;
