import '../../../App.css';
import React, { useState } from 'react';
import menu from '../../../pictures/icons/icons8-menu-32.png';
import {ModalViewDetailsButton} from './ModalViewDetailsButton'
import {ModalShareButton} from './ModalShareButton'
import {MarkImportant} from './MarkImportant'
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
          <ModalClose onClose={clickHandler}>x</ModalClose>
        </ModalHeader>
        <ModalBody>
        <div className="menu-hidden">
        <div className="menu-list"><ModalViewDetailsButton /></div>
        <div className="menu-list"><MarkImportant /></div>
        <div className="menu-list"><ModalShareButton /></div>
        <div className="menu-list"><Download /></div>
        <div className="menu-list"><Copy /></div>
        <div className="menu-list"><Move /></div>
        <div className="menu-list"><Rename/></div>
        <div className="menu-list"><Delete/></div>
      </div>
        </ModalBody>
      </Modal>
      <Button onClick={clickHandler}><img className="modal-button-icon" src={menu} alt="post" /></Button>
    </>
  );
};