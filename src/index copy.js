// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { store } from './store/index';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './App';
// import { NoteBrowse } from './pages/Note/NoteBrowse/NoteBrowse'
// import { NoteCreate } from './pages/Note/NoteCreate/NoteCreate'
// import { PageNotFound } from './pages/Note/PageNotFound/PageNotFound'
// import { Note } from './pages/Note/Note'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' exact element={<App />} >
//             <Route path='/' element={<NoteBrowse />} />
//             <Route path='/note/new' element={<NoteCreate />} />
//             <Route path='/note/:id' element={<Note />} />
//             <Route path='*' element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

// reportWebVitals();

// import '../../App.css';
// import React, { useState } from 'react';

// const DropdownButtonNew = ({ optionsNew }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOptionClick = (option) => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//     <div className="new-btn-dropdown">
//       <button className="new-btn" onClick={() => setIsOpen(!isOpen)}>
//         NEW </button>
//       {isOpen && (
//         <ul className="dropdown-menu">
//           {optionsNew.map((optionNew) => (
//             <li key={optionNew.value} onClick={() => handleOptionClick(optionNew)}>
//               {optionNew.label} 
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     </>
//   );
// };

// export default DropdownButtonNew;


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
        document.body.classNameList.remove('doar-modal-open');
      } else {
        document.body.classNameList.add('doar-modal-open');
      }
      return !prev;
    });
  };

  return (
    <>
      <Modal show={show} size="sm">
        <ModalHeader>
          {/* <ModalTitle>Modal Title</ModalTitle> */}
          <ModalClose onClose={clickHandler}>x</ModalClose>
        </ModalHeader>
        <ModalBody>
        <div className="menu-hidden">
        <ul>
            <li><Button className="menu-list"><img className="menu-hidden-icon" src={details} alt="post" />View Details</Button></li>
            <li><Button className="menu-list"><img className="menu-hidden-icon" src={important} alt="post" />Mark as Important</Button></li>
            <li><Button className="menu-list"><img className="menu-hidden-icon" src={share} alt="post" />Share</Button></li>
            <li><Button className="menu-list"><img className="menu-hidden-icon" src={dwnl} alt="post" />Download</Button></li>
            <li><Button className="menu-list"><img className="menu-hidden-icon" src={copy} alt="post" />Copy to</Button></li>
            <li><Button className="menu-list"><img className="menu-hidden-icon" src={move} alt="post" />Move to</Button></li>
            <li><Button className="menu-list"><img className="menu-hidden-icon" src={rename} alt="post" />Rename</Button></li>
            <li><Button className="menu-list"><img className="menu-hidden-icon" src={dwnl} alt="post" />Delete</Button></li>
          </ul>
      </div>
        </ModalBody>
      </Modal>
      <Button onClick={clickHandler}><img className="modal-button-icon" src={menu} alt="post" /></Button>
    </>
  );
};



