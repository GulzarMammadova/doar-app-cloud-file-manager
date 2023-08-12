import '../../App.css';
import { SearchBar } from './SearchBar';
import {Settings} from "./Settings"

export function Header() {

  return (
    <div className="header">
      <div className="logo">
        <a href='/src/components/Main/Main.js'>do<span>ar</span> </a>
      </div>
      <div className="nav-menu">
        <SearchBar />
      </div>
      <div className="notification-bar">
        <ul>
          <li className='message'><i className="fa-regular fa-message fa-lg"></i></li>
          <li className='bell'><i className="fa-regular fa-bell fa-lg"></i></li>
          <li className='avatar'>gm</li>
        </ul>
      </div>
      <div className="div">
        <Settings/>
      </div>
    </div>

  );
}


