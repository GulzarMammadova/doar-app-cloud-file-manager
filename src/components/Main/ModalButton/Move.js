import '../../../App.css';
import React, { useState } from 'react';
import move from '../../../pictures/icons/folder.png';
import MoveContent from './MoveContent'
import { useTranslation } from 'react-i18next';

export function Move() {
  const [show, setShow] = useState(false); 
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const { t } = useTranslation();

  return (
    <div className="Move">
      {!show && <button className='details-btn' onClick={openModal}>
        <img className="menu-hidden-icon" src={move} alt="post" />
        {t('modalMenuList.moveTo')}</button>}
      <MoveContent closeModal={closeModal} show={show} />
    </div>
  );
}

