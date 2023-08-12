import '../../App.css';
import { LeftBarScroll } from './LeftBarScroll';
import React from 'react';
import DropdownButtonNew from './DropdownButtonNew';
import DropdownButtonUpload from './DropdownButtonUpload'


export function LeftBar() {
  const optionsNew = [
    { value: 'Folder', label: 'Folder' },
    { value: 'Notes', label: 'Notes'},
  ];
  const optionsUpload = [
    { value: 'File', label: 'File' },
    { value: `'Folder'`, label: 'Folder'},
  ];
  return (
    <div className="left-container">
    <div className="left-bar-create-btns">
      <DropdownButtonNew optionsNew={optionsNew}  />
      <DropdownButtonUpload optionsUpload={optionsUpload} />
      </div>
    <LeftBarScroll />
    </div>
  );
}
