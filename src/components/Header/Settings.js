import React from 'react';
import '../../App.css';

export function Settings({toggleLayout, isGrid}) {
  const openPage = () => {
    window.open('_blank');
    };
  return (
    <div>
      <div className="settings">
      <div className="settings-list">
      <button onClick={toggleLayout}>
      {isGrid ? (
              <i className="fa-solid fa-th-large fa-lg"></i>
            ) : (
              <i className="fa-solid fa-list-ul fa-lg"></i>
            )}
      </button>
        <button>
          <i className="fa-solid fa-circle-exclamation fa-lg"></i>
        </button>
        <button  onClick={openPage}><i className="fa-solid fa-gear fa-lg"></i>
        </button>
      </div>
      </div>
    </div>
  );
}
