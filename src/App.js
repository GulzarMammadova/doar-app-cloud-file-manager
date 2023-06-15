import './App.css';

import {BrowserRouter } from "react-router-dom"
import { Header } from './components/Header/Header';
import { LeftBar} from './components/LeftBar/LeftBar'
import {SearchBar} from './components/Main/SearchBar'
import {Main} from './components/Main/Main'
// import {Login} from './components/Authorization/Login'
import 'i18next';


export default function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Login/> */}
      <Header />
      <LeftBar/>
      <SearchBar/>
      <Main/>
    </BrowserRouter>
  </>
  );
}


