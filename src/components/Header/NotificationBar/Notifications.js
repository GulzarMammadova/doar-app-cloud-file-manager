import React, { Component } from 'react';
import { Spring } from 'react-spring';
import NotificationsBar from './NotificationsBar';

export class Notifications extends Component {
  constructor(props) {
    super(props);
    this.toggleNotificationBar = this.toggleNotificationBar.bind(this);
    this.count = 0;
  }

  toggleNotificationBar() {
    this.props.toggleNotificationsBar();
  }

  render() {
    return (
      <div className="nav__notification">
        <span className="nav__notification__icon" onClick={this.toggleNotificationBar} />
        <i className="fa-regular fa-message fa-lg"></i>
        <Spring
          from={{ x: 0 }}
          to={{ x: this.props.open ? 0 : 1 }}
          config={{ stiffness: 170, damping: 26 }}
        >
          {interp => (
            <span
              className="nav__notification__num"
              style={{
                transform: `translateZ(0) scale(${interp.x})`,
                opacity: interp.x,
              }}
            >
              3
            </span>
          )}
        </Spring>
        <NotificationsBar className="notificationBar-open" open={this.props.open} />
      </div>
    );
  }
}

export default Notifications;
