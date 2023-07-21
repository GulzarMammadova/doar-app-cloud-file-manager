import '../../../App.css';
import React, { useState } from 'react';
import dwnld from '../../../pictures/icons/icons8-download-48.png';
import DownloadContent from './DownloadContent'

export function Download() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="Download">
      {!show && <button className='details-btn' onClick={openModal}><img className="menu-hidden-icon" src={dwnld} alt="post" />Download</button>}
      <DownloadContent closeModal={closeModal} show={show} />
    </div>
  );
}

