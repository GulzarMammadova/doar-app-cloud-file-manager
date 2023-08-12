import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './RecentlyAccessedList'
import {MenuModal} from '../ModalButton/ModalButtonContent'
import StarButton from '../AllFiles/StarButton';

 export const RecentlyAccessedPost = ({
  post: { icon, name, type, size },
  index
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

  return (
    <div className="AllFilesPost-container">
      <MenuModal />
      <div className="icon-preview">
        <div>
          <img className="icon" src={icon} alt="post" />
        </div>
      </div>
      <h4 className="name">{name}</h4>
      <p className="type">{type}</p>
      <p className="size">{size}</p>
      <StarButton isStarred={isStarred} onClick={handleStarClick} />
    </div>
  );
};