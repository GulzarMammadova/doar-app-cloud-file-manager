import React from 'react';
import '../../../App.css';
import trash from '../../../pictures/icons/icons8-trash-can-24.png';
import { useTranslation } from 'react-i18next';


export const Delete = ({isDeleted, onClick}) => {
  const { t } = useTranslation();
  return (
    <div className="Delete">
      <button className={`details-btn ${isDeleted ? 'deleted' : ''}`} onClick={onClick}>
      <img className="menu-hidden-icon" src={trash} alt="post" />
      {t('modalMenuList.delete')}</button>
    </div>
  );
}

 