import { createContext } from "react";
import '../App.css';

export const themes = {
  dark: {
    backgroundColor: "#1b2e4bb3",
    textColor: '#fff',
  },
  light: {
    backgroundColor: "#fff",
    textColor: "#031a61",
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => { },
});
