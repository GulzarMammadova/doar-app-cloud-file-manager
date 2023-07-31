import React from 'react';
import { useTranslation } from 'react-i18next';
import { RecentlyAccessed } from '../../components/Main/RecentlyAccessed/RecentlyAccessed';

export function VideosFolder() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className='main-content'>
        <h1>{t('leftBar.video')}</h1></div>
      <div className="folders-container">
        <div className="folders-content">
        <RecentlyAccessed />
        </div>
      </div>
    </div>
  );
}
