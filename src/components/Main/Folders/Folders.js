import React from 'react';
import '../../../App.css';
import { FoldersList } from './FoldersList';

export function Folders () {
  return (
    <div className="folders">
    <div className="menu-title"><span>folders</span></div>
      <FoldersList/>
    </div>
  )
}