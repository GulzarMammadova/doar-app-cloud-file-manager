import '../../App.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function SearchBar({ onTextChange }) {
    const { t } = useTranslation();

    return (
        <div className="search dark-mode">
            <div className='search-bar'>
            <i className="fa-solid fa-magnifying-glass"></i>
                <input 
                 type="text"
                 onChange={(e) => onTextChange(e.target.value)} 
                 placeholder={t('placeholder.searchFilesAndFolders')}/>
            </div>
            <div className="settings">
            <ul>
            <li><Link to="/"><i className="fa-solid fa-list-ul fa-lg"></i></Link></li>
            <li><Link to="/"><i className="fa-solid fa-circle-exclamation fa-lg"></i></Link></li>
            <li><Link to="/"><i className="fa-solid fa-gear fa-lg"></i></Link></li>
          </ul>
            </div>
        </div>
    );
}


