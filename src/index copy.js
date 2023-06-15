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

import '../../App.css';
import React, { useState } from 'react';

const DropdownButtonNew = ({ optionsNew }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
  };

  return (
    <>
    <div className="new-btn-dropdown">
      <button className="new-btn" onClick={() => setIsOpen(!isOpen)}>
        NEW </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {optionsNew.map((optionNew) => (
            <li key={optionNew.value} onClick={() => handleOptionClick(optionNew)}>
              {optionNew.label} 
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default DropdownButtonNew;
