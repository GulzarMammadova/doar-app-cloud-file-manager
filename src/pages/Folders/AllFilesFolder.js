import '../../App.css';
import React from 'react';
import { RecentlyAccessed } from '../../components/Main/RecentlyAccessed/RecentlyAccessed';
import { useTranslation } from 'react-i18next';

export default function AllFilesFolder() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
        <div className="recently">
          <div className="menu-title"><span>{t('leftBar.allFiles')}</span></div>
          <RecentlyAccessed />
        </div>
    </div>
  );
}