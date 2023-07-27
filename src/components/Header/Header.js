import '../../App.css';
import { Link } from "react-router-dom"
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
          <li><Link to="/"></Link><i className="fa-regular fa-message fa-lg"></i></li>
          <li><Link to="/"></Link><i className="fa-regular fa-bell fa-lg"></i></li>
          <li className='avatar'><Link to="/"></Link>gm</li>
        </ul>
      </div>
      <div className="div">
        <Settings/>
      </div>
    </div>

  );
}


