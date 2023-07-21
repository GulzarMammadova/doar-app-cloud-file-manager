import '../../../App.css';
import React, { useState } from 'react';
import move from '../../../pictures/icons/folder.png';
import MoveContent from './MoveContent'

export function Move() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="Move">
      {!show && <button className='details-btn' onClick={openModal}><img className="menu-hidden-icon" src={move} alt="post" />Move to</button>}
      <MoveContent closeModal={closeModal} show={show} />
    </div>
  );
}

