import '../../../App.css';
import React, { useState } from 'react';
import details from '../../../pictures/icons/details.png';
import ModalViewDetailsContent from './ModalViewDetailsContent'

export function ModalViewDetailsButton() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="ModalViewDetailsButton">
      {!show && <button className='details-btn' onClick={openModal}><img className="menu-hidden-icon" src={details} alt="post" />View Details</button>}
      <ModalViewDetailsContent closeModal={closeModal} show={show} />
    </div>
  );
}

