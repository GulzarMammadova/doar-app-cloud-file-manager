import '../../../App.css';
// import React, { useState } from 'react';
import star from '../../../pictures/icons/icons8-star-26.png';
import { useTranslation } from 'react-i18next';

export function MarkImportant() {

  const { t } = useTranslation();

  return (
    <div className="MarkImportant">
       <button className='details-btn'>
      <img className="menu-hidden-icon" src={star} alt="post" />
      {t('modalMenuList.markImport')}</button>
    </div>
  );
}

