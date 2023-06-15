import '../../App.css';
import { Link } from "react-router-dom"
import Logo from '../../pictures/logo.png'
// import Lightswitch from './Lightswitch';

export function Header() {
  return (
    <div className="header">
    <div className="logo">
       <img className='logo-img' src={Logo} alt='pic'></img>
    </div>
        <div className="nav-menu">
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/apps">Apps</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/components">Components</Link></li>
            <li><Link to="/collections">Collections</Link></li>
          </ul>
        </div>
        <div className="notification-bar">
       {/* <Lightswitch/> */}
        <ul>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
            <li><Link to="/"></Link><i className="fa-regular fa-message fa-lg"></i></li>
            <li><Link to="/"></Link><i className="fa-regular fa-bell fa-lg"></i></li>
            <li className='avatar'><Link to="/"></Link>gm</li>
          </ul>
        </div>
        </div>
  );
}


