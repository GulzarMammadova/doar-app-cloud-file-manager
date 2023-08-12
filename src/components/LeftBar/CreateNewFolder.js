import '../../App.css';
import React, { useState } from 'react';
import './DropdownButtonNew' 

const CreateNewFolder = ({ optionsNew, onFolderCreate }) => {
  const [newFolderName, setNewFolderName] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsPopupOpen(false);
    if (onFolderCreate) {
      onFolderCreate(option.value);
    }
  };

  const handleInputChange = (event) => {
    setNewFolderName(event.target.value);
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim() !== '' && onFolderCreate) {
      onFolderCreate(newFolderName.trim());
      setNewFolderName('');
      setIsPopupOpen(false);
    }
  };

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
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
                <li>
                  <input
                    type="text"
                    value={newFolderName}
                    onChange={handleInputChange}
                    placeholder="Enter folder name"
                  />
                  <button onClick={handleCreateFolder}>Create Folder</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateNewFolder;
