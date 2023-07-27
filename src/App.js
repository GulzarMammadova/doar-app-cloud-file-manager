import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeContext, themes } from './contexts/ThemeContext';
import ToggleDark from './contexts/ToggleDark';
import { Header } from './components/Header/Header';
import { LeftBar } from './components/LeftBar/LeftBar';
import { Main } from './components/Main/Main';
// import { AllFilesFolder } from "./pages/Folders/AllFilesFolder"
import { MyDevicesFolder } from "./pages/Folders/MyDevicesFolder"
import { RecentsFolder } from "./pages/Folders/RecentsFolder"
import { ImportantFolder } from "./pages/Folders/ImportantFolder"
import { DeletedFolder } from "./pages/Folders/DeletedFolder"
import { AudiosFolder } from "./pages/Folders/AudiosFolder"
import { DocumentsFolder } from "./pages/Folders/DocumentsFolder"
import { ImagesFolder } from "./pages/Folders/ImagesFolder"
import { ZipFolder } from "./pages/Folders/ZipFolder"
import { VideosFolder } from "./pages/Folders/VideosFolder"

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
              <Routes>
                <Route path="//src/components/Main/Main.js" element={<Main />} />
                {/* <Route path="/all-files" element={<AllFilesFolder />} /> */}
                <Route path="/my-devices" element={<MyDevicesFolder />} />
                <Route path="/recents" element={<RecentsFolder />} />
                <Route path="/important" element={<ImportantFolder />} />
                <Route path="/deleted" element={<DeletedFolder />} />
                <Route path="/documents" element={<DocumentsFolder />} />
                <Route path="/images" element={<ImagesFolder />} />
                <Route path="/videos" element={<VideosFolder />} />
                <Route path="/audios" element={<AudiosFolder />} />
                <Route path="/zip" element={<ZipFolder />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
