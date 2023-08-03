import React from 'react';

const StarButton = ({ isStarred, onClick }) => {
  return (
    <button className={`star-button ${isStarred ? 'starred' : ''}`} onClick={onClick}>
      {isStarred ? '★' : '☆'}
    </button>
  );
};

export default StarButton;
