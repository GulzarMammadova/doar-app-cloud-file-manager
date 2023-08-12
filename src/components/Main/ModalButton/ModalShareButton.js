import '../../../App.css';
import React, { useState } from 'react';
import share from '../../../pictures/icons/icons8-share-rounded-24.png';
import ModalShareContent from './ModalShareContent'
import { useTranslation } from 'react-i18next';

export function ModalShareButton() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const { t } = useTranslation();

  return (
    <div className="ModalShareButton">
      {!show && <button className='details-btn' onClick={openModal}>
      <img className="menu-hidden-icon" src={share} alt="post" />{t('modalMenuList.share')}</button>}
      <ModalShareContent closeModal={closeModal} show={show} />
    </div>
  );
}

