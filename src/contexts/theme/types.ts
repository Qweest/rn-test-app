export interface ThemeConfigType {
  isDark: boolean;
  text: {
    primary: string;
    secondary: string;
  };
  background: {
    primary: string;
    secondary: string;
  };
  accent: string;
}

export interface ThemeType {
  light: ThemeConfigType;
  dark: ThemeConfigType;
}

export type ThemeContextType = {
  toggleTheme: () => void;
  theme: ThemeConfigType;
};
