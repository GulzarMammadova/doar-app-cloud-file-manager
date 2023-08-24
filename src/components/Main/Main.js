import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { RecentlyAccessed } from './RecentlyAccessed/RecentlyAccessed';
import { Files } from './AllFiles/Files';
import { CreatedFolders } from "./CreatedFolders/CreatedFolders";
import { Settings } from "../Header/Settings";

export function Main() {
  const { t } = useTranslation();
  const [isGrid, setIsGrid] = useState(true);

  const toggleLayout = () => {
    setIsGrid(prevIsGrid => !prevIsGrid);
  };
 
  return (
    <div className={`main-container ${isGrid ? 'grid-layout' : 'list-layout'}`}>
      <Settings toggleLayout={toggleLayout} isGrid={isGrid}/>
      <div className='main-content'> 
        <h1>{t('leftBar.allFiles')}</h1>
        <div className="recently">
          <div className="menu-title"><span>{t('main.resentlyAcc')}</span></div>
          <RecentlyAccessed/>
        </div>
        <CreatedFolders />
        <div className="files">
          <div className="menu-title"><span>{t('main.files')}</span></div>
          <Files />
        </div>
      </div>
    </div>
  );
}
