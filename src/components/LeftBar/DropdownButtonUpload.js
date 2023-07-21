import '../../App.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DropdownButtonUpload = ({ optionsUpload }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
  };
  const { t } = useTranslation();
  return (
    <>
    <div className="upload-btn-dropdown">
      <button className="upload-btn" onClick={() => setIsOpen(!isOpen)}>
      {t('leftBar.uploadBtn')}</button>
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
