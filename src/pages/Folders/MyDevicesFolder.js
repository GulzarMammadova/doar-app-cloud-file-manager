import React from 'react';
import { useTranslation } from 'react-i18next';
import { RecentlyAccessed } from '../../components/Main/RecentlyAccessed/RecentlyAccessed';


export function MyDevicesFolder() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
        <div className="recently">
          <div className="menu-title"><span>{t('leftBar.myDevices')}</span></div>
          <RecentlyAccessed />
        </div>
    </div>
  );
}
