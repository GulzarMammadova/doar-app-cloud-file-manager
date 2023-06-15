import '../../App.css';
import React, { useState } from 'react';

const DropdownButtonUpload = ({ optionsUpload }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
  };

  return (
    <>
    <div className="upload-btn-dropdown">
      <button className="upload-btn" onClick={() => setIsOpen(!isOpen)}>
        Upload </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {optionsUpload.map((optionUpload) => (
            <li key={optionUpload.value} onClick={() => handleOptionClick(optionUpload)}>
              {optionUpload.label} 
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default DropdownButtonUpload;
