import '../../App.css';
import { Link } from "react-router-dom"
import Logo from '../../pictures/logo.png'
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

  return (
    <div className="header">
    <div className="logo">
       <img className='logo-img' src={Logo} alt='pic'></img>
    </div>
        <div className="nav-menu">
          <ul>
            <li><Link to="/">{t('header.dashboard')}</Link></li>
            <li><Link to="/apps">{t('header.apps')}</Link></li>
            <li><Link to="/pages">{t('header.pages')}</Link></li>
            <li><Link to="/components">{t('header.components')}</Link></li>
            <li><Link to="/collections">{t('header.collections')}</Link></li>
          </ul>
        </div>
        <div className="notification-bar">
        <ul>
            <li><Link to="/"><i className="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
            <li><Link to="/"></Link><i className="fa-regular fa-message fa-lg"></i></li>
            <li><Link to="/"></Link><i className="fa-regular fa-bell fa-lg"></i></li>
            <li className='avatar'><Link to="/"></Link>gm</li>
          </ul>
        </div>
        </div>

  );
}


