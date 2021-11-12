import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';

import config from './config';
import { ThemeContextType } from './types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC = props => {
  const { children } = props;
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme === 'dark' ? config.dark : config.light,
  );

  const toggleTheme = () => {
    setTheme(theme.isDark ? config.light : config.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a UserProvider');
  }

  return context;
};

export default ThemeProvider;
