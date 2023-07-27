import React from 'react';
import '../../../App.css';
import { CreatedFoldersList } from './CreatedFoldersList';
import { useTranslation } from 'react-i18next';

export function CreatedFolders () {
  const { t } = useTranslation();

  return (
    <div className="folders">
    <div className="menu-title"><span>{t('main.folders')}</span></div>
      <CreatedFoldersList/>
    </div>
  )
}