import React from 'react';

const AddFolderButton = ({ onClick }) => {
  return (
    <button onClick={onClick}><i className="fa-regular fa-file"></i> Folder</button>
  );
};

export default AddFolderButton;
