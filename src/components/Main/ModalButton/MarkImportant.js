import '../../../App.css';
import React, { useState } from 'react';
import star from '../../../pictures/icons/icons8-star-26.png';
// import MarkImportantContent from './MarkImportantContent'

export function MarkImportant() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  // const closeModal = () => setShow(false);

  return (
    <div className="MarkImportant">
      {!show && <button className='details-btn' onClick={openModal}><img className="menu-hidden-icon" src={star} alt="post" />Mark as Important</button>}
      {/* <MarkImportantContent closeModal={closeModal} show={show} /> */}
    </div>
  );
}

