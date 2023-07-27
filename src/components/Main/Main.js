import React from 'react';
import { useTranslation } from 'react-i18next';
import { RecentlyAccessed } from './RecentlyAccessed/RecentlyAccessed';
import { Files } from './AllFiles/Files';
import { CreatedFolders } from "./CreatedFolders/CreatedFolders";

export function Main() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className='main-content'> 
        <h1>{t('leftBar.allFiles')}</h1>
        <div className="recently">
          <div className="menu-title"><span>{t('main.resentlyAcc')}</span></div>
          <RecentlyAccessed />
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
