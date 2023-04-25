import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from './components/Header';
import { LeftBar} from './components/LeftBar'
import {Documents} from './pages/Documents';
import {SearchBar} from './components/SearchBar'
import {Main} from './pages/Main'
 
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <LeftBar/>
      <SearchBar/>
      <Main/>
      <Routes>
        <Route path='/src/pages/Documents.js' element={<Documents/>} />
        {/* <Route path='/contact' element={<Images />} />
        <Route path='/portfolio' element={<Videos />} />
        <Route path='/journey' element={<Deleted />} /> */}
      {/* <div className="App">
     
      <div className="right-container">
        WORLD
      </div> */}
    {/* </div> */}
      </Routes>
    </BrowserRouter>
  </>

  );
}


