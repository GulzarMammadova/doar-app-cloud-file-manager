import React from 'react';
import { useTranslation } from 'react-i18next';

export function DeletedFolder() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className='main-content'>
        <h1>{t('leftBar.deletedFiles')}</h1>
        <div className="recently">
          <div className="menu-title"><span></span></div>
          <p className="menu-notification-text">This folder is empty</p>
        </div>
      </div>
    </div>
  );
}
