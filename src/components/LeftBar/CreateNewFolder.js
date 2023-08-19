import React, { useState } from 'react';

const CreateNewFolder = ({ optionsNew, onFolderCreate }) => {
  const [newFolderName, setNewFolderName] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsPopupOpen(false);
    if (onFolderCreate) {
      onFolderCreate(newFolderName.trim());
      setNewFolderName('');
    }
  };

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="create-new-folder">
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={handlePopupToggle}>
              Close
            </button>
            <ul className="dropdown-menu">
              {optionsNew.map((optionNew) => (
                <li
                  key={optionNew.value}
                  onClick={() => handleOptionClick(optionNew)}
                >
                  {optionNew.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewFolder;
