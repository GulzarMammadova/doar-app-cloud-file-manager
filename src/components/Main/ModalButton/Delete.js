import '../../../App.css';
// import React, { useState } from 'react';
import trash from '../../../pictures/icons/icons8-trash-can-24.png';
// import DeleteContent from './DeleteContent'
import { useTranslation } from 'react-i18next';


export function Delete() {
  const { t } = useTranslation();

  return (
    <div className="Delete">
      <button className='details-btn'>
      <img className="menu-hidden-icon" src={trash} alt="post" />
      {t('modalMenuList.delete')}</button>
    </div>
  );
}

