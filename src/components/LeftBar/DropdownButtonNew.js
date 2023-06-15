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
