import '../../../App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import menu from '../../../pictures/icons/icons8-menu-32.png';
import details from '../../../pictures/icons/details.png';
import important from '../../../pictures/icons/icons8-star-26.png';
import share from '../../../pictures/icons/icons8-share-rounded-24.png';
import dwnl from '../../../pictures/icons/icons8-download-48.png';
import copy from '../../../pictures/icons/copy.png';
import move from '../../../pictures/icons/icons8-edit-64.png';
import rename from '../../../pictures/icons/icons8-edit-64.png';
// import delete from '../../../pictures/icons/icons8-edit-64.png';

const Modal = ({ show, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className='modal-container'>
      <div className="modal-header">
        {children[0]}
      </div>
      <div className="modal-body">
        {children[1]}
      </div>
      {/* <div className="modal-footer">
        {children[2]}
      </div> */}
    </div>
  );
};

const ModalHeader = ({ children }) => {
  return (
    <div className="modal-title">
      {children}
    </div>
  );
};

// const ModalTitle = ({ children }) => {
//   return <h2>{children}</h2>;
// };

const ModalClose = ({ children, onClose }) => {
  return (
    <button className="modal-close" onClick={onClose}>
      {children}
    </button>
  );
};

const ModalBody = ({ children }) => {
  return <div>{children}</div>;
};

const Button = ({ onClick, children }) => {
  return (
    <button className="modal-button" onClick={onClick}>
      {children}
    </button>
  );
};

export const MenuModal = () => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow((prev) => {
      if (prev) {
        document.body.classList.remove('doar-modal-open');
      } else {
        document.body.classList.add('doar-modal-open');
      }
      return !prev;
    });
  };

  return (
    <>
      <Modal show={show}>
        <ModalHeader>
          {/* <ModalTitle>Modal Title</ModalTitle> */}
          <ModalClose onClose={clickHandler}>x</ModalClose>
        </ModalHeader>
        <ModalBody>
        <div className="menu-hidden">
        <ul>
            <li><Link to="/" className="menu-list"><img className="menu-hidden-icon" src={details} alt="post" />View Details</Link></li>
            <li><Link to="/" className="menu-list"><img className="menu-hidden-icon" src={important} alt="post" />Mark as Important</Link></li>
            <li><Link to="/" className="menu-list"><img className="menu-hidden-icon" src={share} alt="post" />Share</Link></li>
            <li><Link to="/" className="menu-list"><img className="menu-hidden-icon" src={dwnl} alt="post" />Download</Link></li>
            <li><Link to="/" className="menu-list"><img className="menu-hidden-icon" src={copy} alt="post" />Copy to</Link></li>
            <li><Link to="/" className="menu-list"><img className="menu-hidden-icon" src={move} alt="post" />Move to</Link></li>
            <li><Link to="/" className="menu-list"><img className="menu-hidden-icon" src={rename} alt="post" />Rename</Link></li>
            <li><Link to="/" className="menu-list"><img className="menu-hidden-icon" src={dwnl} alt="post" />Delete</Link></li>
          </ul>
      </div>
        </ModalBody>
      </Modal>
      <Button onClick={clickHandler}><img className="modal-button-icon" src={menu} alt="post" /></Button>
    </>
  );
};


