import React, { useState } from 'react';
import AddFolderButton from './AddFolderButton';

const CreateNewFolder = () => {
  const [folder, setFolder] = useState([]);

  const handleAddFolder = () => {
    const newFolder = { name: 'New Folder' };
    setFolder([...folder, newFolder]);
  };

  return (
    <div>
      {folder.map((folder, index) => (
        <div key={index}>{folder.name}</div>
      ))}
      <AddFolderButton onClick={handleAddFolder} />
    </div>
  );
};

export default CreateNewFolder;
