// import React, {useContext} from "react";
// import Lightswitch from '../components/Lightswitch'
// import { DarkModeContext } from "./DarkModeContext";
import { Header } from '../components/Header';
import { LeftBar} from '../components/LeftBar'
// import {Documents} from './pages/Documents';
import {SearchBar} from '../components/SearchBar'
import {Main} from '../pages/Main'

function Container(){
   
    //extracting darkMode state from DarkModeContext
    // const {darkMode} = useContext(DarkModeContext)
    return(
        <>
        {/* <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
    <Lightswitch/>
    </div> */}
    <Header />
      <LeftBar/>
      <SearchBar/>
      <Main/>
    </>
        )
}
export default Container