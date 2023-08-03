import React from 'react';
import { useTranslation } from 'react-i18next';
import { RecentlyAccessed } from '../../components/Main/RecentlyAccessed/RecentlyAccessed';


export function RecentsFolder() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className='main-content'>
        <h1>{t('leftBar.recently')}</h1>
        <div className="recently">
          <div className="menu-title"><span></span></div>
          <RecentlyAccessed />
        </div>
      </div>
    </div>
  );
}
