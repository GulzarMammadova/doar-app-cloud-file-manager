import '../../../App.css';
import React, { useState } from 'react';
import menu from '../../../pictures/icons/icons8-menu-32.png';
import {ModalViewDetailsButton} from './ModalViewDetailsButton'
import {ModalShareButton} from './ModalShareButton'
import {Move} from './Move'
import {Rename} from './Rename'
import {Delete} from './Delete'
import {Download} from './Download'
import {Copy} from './Copy'


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

  const openModal = () => {
    setShow(true);
    document.body.classList.add('doar-modal-open');
  };

  const closeModal = () => {
    setShow(false);
    document.body.classList.remove('doar-modal-open');
  };

  const handleMenuItemClick = () => {
    openModal(); 
  };

  const handleMenuClick = () => {
    if (show) {
      closeModal(); 
    } else {
      openModal(); 
    }
  };
  return (
    <>
      <Modal show={show}>
        <ModalHeader>
          <ModalClose onClose={closeModal}>x</ModalClose>
        </ModalHeader>
        <ModalBody>
          <div className={`menu-hidden ${show ? 'menu-list-open' : ''}`}>
            <div className="menu-list" onClick={handleMenuItemClick}><ModalViewDetailsButton /></div>
            <div className="menu-list" onClick={handleMenuItemClick}><ModalShareButton /></div>
            <div className="menu-list" onClick={handleMenuItemClick}><Download /></div>
            <div className="menu-list" onClick={handleMenuItemClick}><Copy /></div>
            <div className="menu-list" onClick={handleMenuItemClick}><Move /></div>
            <div className="menu-list" onClick={handleMenuItemClick}><Rename/></div>
            <div className="menu-list" onClick={handleMenuItemClick}><Delete/></div>
          </div>
        </ModalBody>
      </Modal>
      <Button onClick={handleMenuClick}>
        <img className="modal-button-icon" src={menu} alt="post" />
      </Button>
    </>
  );
};
