import React, { useState } from 'react';
import StarButton from './StarButton';
import '../../../App.css';

export const MarkImportant = () => {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  return (
    <div className="MarkImportant">
      <StarButton isStarred={isStarred} onClick={handleStarClick} />
    </div>
  );
};


