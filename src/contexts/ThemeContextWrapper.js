import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export default function ThemeContextWrapper(props) {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme === 'light' ? themes.light : themes.dark;

  const [theme, setTheme] = useState(initialTheme);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    localStorage.setItem('theme', theme === themes.light ? 'light' : 'dark');

    switch (theme) {
      case themes.light:
        document.body.classList.add('dark-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('dark-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
