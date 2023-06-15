import '../../App.css';
import React from 'react';
import DropdownButton from './DropdownButton';

export function FilesMenu() {
  const options = [
    { value: 'Folder', label: 'Folder' },
    { value: 'Notes', label: 'Notes'},
  ];

  return (
    <div className="menu-hidden-container">
    <div className="menu-hidden-create-btns">
      <DropdownButton optionsNew={options}  />
      </div>
    </div>
  );
}
