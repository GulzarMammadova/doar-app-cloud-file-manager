import React, { useState } from 'react';
import '../../App.css';
import { SearchBar } from './SearchBar';
import { Settings } from "./Settings";
import Notifications from './NotificationBar/Notifications';

export function Header() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotificationsBar = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <a href='//src/index.js'>do<span>ar</span> </a>
      </div>
      <div className="nav-menu">
        <SearchBar />
      </div>
      <div className="notification-bar">
      <Notifications toggleNotificationsBar={toggleNotificationsBar} open={isNotificationsOpen} />
        <div className="nav__notification">
          <span className="nav__notification__icon"><i className="fa-regular fa-bell fa-lg"></i></span>
          <span className="nav__notification__num">2</span>
        </div>
        <div className="nav__notification">
          <span className="avatar">gm</span>
        </div>
      </div>
      <div className="div">
        <Settings />
      </div>
    </div>
  );
}
