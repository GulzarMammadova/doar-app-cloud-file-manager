import React from 'react';
import '../../../App.css';
import { FoldersList } from './FoldersList';
import { useTranslation } from 'react-i18next';

export function Folders () {
  const { t } = useTranslation();

  return (
    <div className="folders">
    <div className="menu-title"><span>{t('main.folders')}</span></div>
      <FoldersList/>
    </div>
  )
}