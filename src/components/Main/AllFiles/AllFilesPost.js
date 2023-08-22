import React, { useState, useEffect } from 'react';
import { MenuModal } from '../ModalButton/ModalButtonContent';
import StarButton from './StarButton';
import '../../../App.css';
import './AllFilesList';

export const AllFilesPost = ({
  post: { url, icon, name, type, size, id},
  index,
  setLastOpenedUrl,
  handleRenameFile
}) => {

  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    const starredFiles = JSON.parse(localStorage.getItem('starredFiles')) || [];
    setIsStarred(starredFiles.includes(index));
  }, [index]);

  const handleStarClick = () => {
    const starredFiles = JSON.parse(localStorage.getItem('starredFiles')) || [];
    
    if (starredFiles.includes(index)) {
      const updatedStarredFiles = starredFiles.filter(fileIndex => fileIndex !== index);
      localStorage.setItem('starredFiles', JSON.stringify(updatedStarredFiles));
    } else {
      const updatedStarredFiles = [...starredFiles, index];
      localStorage.setItem('starredFiles', JSON.stringify(updatedStarredFiles));
    }

    setIsStarred(!isStarred);
  };
  const openUrl = () => {
    window.open(url, '_blank');
    setLastOpenedUrl(url);
    };

  return (
    <div className="AllFilesPost-container">
      <MenuModal />
      <div className="icon-preview" onClick={openUrl}>
        <div>
          <img className="icon" src={icon} alt="post"/>
        </div>
      </div>
    <div className="text-container">
    <h4 className="name">{name}</h4>
      <p className="type">{type}</p>
      <p className="size">{size}</p>
    </div>
      <StarButton isStarred={isStarred} onClick={handleStarClick}/>
    </div>
  );
};
