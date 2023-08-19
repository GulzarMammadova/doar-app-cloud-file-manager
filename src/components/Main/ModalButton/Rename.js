import '../../../App.css';
import React, { useState } from 'react';
import rename from '../../../pictures/icons/icons8-edit-64.png';
import { useTranslation } from 'react-i18next';
import RenameContent from './RenameContent'

export function Rename() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="Rename">
          {!show && <button className='details-btn' onClick={openModal}>
          <img className="menu-hidden-icon" src={rename} alt="post" />
          {t('modalMenuList.rename')}</button>}
          <RenameContent closeModal={closeModal} show={show} />
    </div>
  ); 
}

