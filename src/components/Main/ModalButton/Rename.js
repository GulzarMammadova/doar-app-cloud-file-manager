import '../../../App.css';
import React, { useState } from 'react';
import rename from '../../../pictures/icons/icons8-edit-64.png';
import RenameContent from './RenameContent'

export function Rename() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="Rename">
      {!show && <button className='details-btn' onClick={openModal}><img className="menu-hidden-icon" src={rename} alt="post" />Rename</button>}
      <RenameContent closeModal={closeModal} show={show} />
    </div>
  );
}

