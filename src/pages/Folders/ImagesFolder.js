import React from 'react';
import { useTranslation } from 'react-i18next';
import { RecentlyAccessed } from '../../components/Main/RecentlyAccessed/RecentlyAccessed';


export function ImagesFolder() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
        <div className="recently">
          <div className="menu-title"><span>{t('leftBar.images')}</span></div>
          <RecentlyAccessed />
        </div>
    </div>
  );
}
