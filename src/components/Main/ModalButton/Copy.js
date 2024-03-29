import '../../../App.css';
import React, { useState } from 'react';
import copy from '../../../pictures/icons/copy.png';
import CopyContent from './CopyContent'
import { useTranslation } from 'react-i18next';

export function Copy() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const { t } = useTranslation();

  return (
    <div className="Copy">
      {!show && <button className='details-btn' onClick={openModal}>
      <img className="menu-hidden-icon" src={copy} alt="post" />
      {t('modalMenuList.copyTo')}</button>}
      <CopyContent closeModal={closeModal} show={show} />
    </div>
  );
}

