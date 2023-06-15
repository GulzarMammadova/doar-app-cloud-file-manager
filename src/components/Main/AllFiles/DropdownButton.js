import '../../App.css';
import React, { useState } from 'react';
import menu from '../../../pictures/icons/icons8-menu-32.png'


const DropdownButton = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
  };

  return (
    <>
    <div className="menu-btn-dropdown">
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
      <img className="icon" src={menu} alt="post" /></button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label} 
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default DropdownButton;
