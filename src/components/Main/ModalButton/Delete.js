import '../../../App.css';
import React, { useState } from 'react';
import trash from '../../../pictures/icons/icons8-trash-can-24.png';
import DeleteContent from './DeleteContent'

export function Delete() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="Delete">
      {!show && <button className='details-btn' onClick={openModal}><img className="menu-hidden-icon" src={trash} alt="post" />Delete</button>}
      <DeleteContent closeModal={closeModal} show={show} />
    </div>
  );
}

