import '../../App.css';
import { useTranslation } from 'react-i18next';

export function SearchBar({ onTextChange }) {
    const { t } = useTranslation();

    return (
        <div className="search">
            <div className='search-bar'>
            <i className="fa-solid fa-magnifying-glass"></i>
                <input 
                 type="text"
                 onChange={(e) => onTextChange(e.target.value)} 
                 placeholder={t('placeholder.searchFilesAndFolders')}/>
            </div>
        </div>
    );
}


