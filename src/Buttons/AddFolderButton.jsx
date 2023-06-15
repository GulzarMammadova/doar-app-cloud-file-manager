import React from 'react';

const AddFolderButton = ({ onClick }) => {
  return (
    <button onClick={onClick}><i class="fa-regular fa-file"></i> Folder</button>
  );
};

export default AddFolderButton;
