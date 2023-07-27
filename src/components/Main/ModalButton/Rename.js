import '../../../App.css';
// import React, { useState } from 'react';
import rename from '../../../pictures/icons/icons8-edit-64.png';
import { useTranslation } from 'react-i18next';

export function Rename() {
  const { t } = useTranslation();

  return (
    <div className="Rename">
     <button className='details-btn'>
        <img className="menu-hidden-icon" src={rename} alt="post" />
        {t('modalMenuList.rename')}</button>
    </div>
  );
}

