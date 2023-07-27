import '../../../App.css';
import React, { useState } from 'react';
import details from '../../../pictures/icons/details.png';
import ModalViewDetailsContent from './ModalViewDetailsContent'
import { useTranslation } from 'react-i18next';

export function ModalViewDetailsButton() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const { t } = useTranslation();

  return (
    <div className="ModalViewDetailsButton">
      {!show && <button className='details-btn' onClick={openModal}>
      <img className="menu-hidden-icon" src={details} alt="post" />{t('modalMenuList.view')}</button>}
      <ModalViewDetailsContent closeModal={closeModal} show={show} />
    </div>
  );
}

