import { useState, useEffect, useMemo, createContext } from 'react';
import themes from '../assets/styles/themes';

export const ThemeContext = createContext();

export function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const currentTheme = useMemo(() => (
    themes[theme] || themes.dark
  ), [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider 
      value={{ theme: currentTheme, handleToggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/*
  'src/index.js' is importing "ThemeContextProvider" because we need to use "ThemeContext", through useContext, on 'src/componets/App'.
*/