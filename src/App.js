import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ThemeContext, themes } from './contexts/ThemeContext';
import ToggleDark from './contexts/ToggleDark';
import { Header } from './components/Header/Header';
import { LeftBar } from './components/LeftBar/LeftBar';
import { Main } from './components/Main/Main';
import { MyDevicesFolder } from "./pages/Folders/MyDevicesFolder"
import { RecentsFolder } from "./pages/Folders/RecentsFolder"
import { ImportantFolder } from "./pages/Folders/ImportantFolder"
import { DeletedFolder } from "./pages/Folders/DeletedFolder"
import { AudiosFolder } from "./pages/Folders/AudiosFolder"
import { DocumentsFolder } from "./pages/Folders/DocumentsFolder"
import { ImagesFolder } from "./pages/Folders/ImagesFolder"
import { ZipFolder } from "./pages/Folders/ZipFolder"
import { VideosFolder } from "./pages/Folders/VideosFolder"
import {Login} from './components/Authorization/Login'
import { ManageAcc } from './components/Header/ManageAcc';
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
              <Main/>
              <Routes >
                <Route path="/src/components/Main/Main.js" element={<Main />} />
                <Route path="/allfiles" element={<Main />} />
                <Route path="/my-devices" element={<MyDevicesFolder />} />
                <Route path="/recents" element={<RecentsFolder />} />
                <Route path="/important" element={<ImportantFolder />} />
                <Route path="/deleted" element={<DeletedFolder />} />
                <Route path="/documents" element={<DocumentsFolder />} />
                <Route path="/images" element={<ImagesFolder />} />
                <Route path="/videos" element={<VideosFolder />} />
                <Route path="/audios" element={<AudiosFolder />} />
                <Route path="/zip" element={<ZipFolder />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/manage-account" element={<ManageAcc />} />
                <Route path="/home" element={<ManageAcc />} />
                <Route path="/personal-info" element={<ManageAcc />} />
                <Route path="/data-privacy" element={<ManageAcc />} />
                <Route path="/security" element={<ManageAcc />} />
                <Route path="/people-sharing" element={<ManageAcc />} />
                <Route path="/payment-subscription" element={<ManageAcc />} />
              </Routes>
            </BrowserRouter>

          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}