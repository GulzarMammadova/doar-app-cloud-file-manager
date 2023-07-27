import React from 'react';
import { Link } from 'react-router-dom';

export function Settings() {

  return (
    <div className="main-container">
      <div className="settings">
        <ul>
          <li><Link to="/view"><i className="fa-solid fa-list-ul fa-lg"></i></Link></li>
          <li><Link to="/details"><i className="fa-solid fa-circle-exclamation fa-lg"></i></Link></li>
          <li><Link to="/settings"><i className="fa-solid fa-gear fa-lg"></i></Link></li>
        </ul>
      </div>
    </div>
  );
}
