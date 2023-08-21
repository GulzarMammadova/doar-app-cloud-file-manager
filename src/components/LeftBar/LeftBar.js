import '../../App.css';
import { LeftBarScroll } from './LeftBarScroll';
import React,{useState} from 'react';
import DropdownButtonNew from './DropdownButtonNew';
import DropdownButtonUpload from './DropdownButtonUpload'
import { CreateFolderContent } from '../Main/CreatedFolders/CreateFolderContent'

export function LeftBar() {
  const optionsNew = [
    { value: 'Folder', label: 'Folder' },
    { value: 'Notes', label: 'Notes'},
  ];
  const [folders, setFolders] = useState([]); 
  const [showCreateFolder, setShowCreateFolder] = useState(false);

  const handleFolderCreate = (folderName) => {
    setFolders([...folders, folderName]);
  };
  return (
    <div className="left-container">
    <div className="left-bar-create-btns">
      <DropdownButtonNew 
       optionsNew={optionsNew}  
       onFolderCreate={handleFolderCreate}
       setShowCreateFolder={setShowCreateFolder} 
        />
      <DropdownButtonUpload/>
      </div>
    <LeftBarScroll />
    {showCreateFolder && (
        <CreateFolderContent
          optionsNew={optionsNew}
          onFolderCreate={handleFolderCreate}
          setShowCreateFolder={setShowCreateFolder} 
        />
      )}
    </div>
  );
}
