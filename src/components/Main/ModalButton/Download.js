import '../../../App.css';
// import React, { useState } from 'react';
import dwnld from '../../../pictures/icons/icons8-download-48.png';
// import DownloadContent from './DownloadContent'
import { useTranslation } from 'react-i18next';


export function Download() {
  const { t } = useTranslation();

  return (
    <div className="Download">
      <button className='details-btn' >
      <img className="menu-hidden-icon" src={dwnld} alt="post" />
      {t('modalMenuList.download')}</button>
    </div>
  );
}

