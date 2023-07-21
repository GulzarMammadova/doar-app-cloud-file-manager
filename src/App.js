import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext, themes } from './contexts/ThemeContext';
import ToggleDark from './contexts/ToggleDark';
import { Header } from './components/Header/Header';
import { LeftBar } from './components/LeftBar/LeftBar';
import { SearchBar } from './components/Main/SearchBar';
import { Main } from './components/Main/Main';

export default function App() {
  return (
    <div className="App">
      <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
          <>
            <ToggleDark
              toggleDark={() => {
                const newTheme = theme === themes.dark ? themes.light : themes.dark;
                changeTheme(newTheme);
              }}
              isDarkMode={theme === themes.dark}
            />
            <BrowserRouter>
              <Header />
              <LeftBar />
              <SearchBar />
              <Main />
            </BrowserRouter>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
