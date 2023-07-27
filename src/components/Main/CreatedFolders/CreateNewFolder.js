import React, { useState } from 'react';
import AddFolderButton from './AddFolderButton';

const CreateNewFolder = () => {
  const [folder, setFolder] = useState([]);

  const handleAddFolder = () => {
    // Logic to add a new folder
    const newFolder = { name: 'New Folder' };
    setFolder([...folder, newFolder]);
  };

  return (
    <div>
      {/* Render your folder here */}
      {folder.map((folder, index) => (
        <div key={index}>{folder.name}</div>
      ))}

      {/* Render the AddFolderButton component */}
      <AddFolderButton onClick={handleAddFolder} />
    </div>
  );
};

export default CreateNewFolder;
