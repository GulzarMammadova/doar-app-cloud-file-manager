import '../../App.css';
import { RecentlyAccessed } from './RecentlyAccessed/RecentlyAccessed'
import { Files } from './AllFiles/Files'
import { Folders } from "./Folders/Folders"
import { useTranslation } from 'react-i18next';

export function Main() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <h1>{t('leftBar.allFiles')}</h1>
      <div className="recently">
        <div className="menu-title"><span>{t('main.resentlyAcc')}</span></div>
        <RecentlyAccessed />
      </div>
      <Folders />
      <div className="files">
        <div className="menu-title"><span>{t('main.files')}</span></div>
        <Files />
      </div>
    </div>
  );
}

