import React, {  useState } from 'react';
import NotificationsBar from './NotificationsBar';

export function Notifications ()  {

  const [open,setOpen] = useState(false)
  
    return (
      <div className="nav__notification" onClick={()=>setOpen(!open)}>
        <span className="nav_notification_icon"  />
        <i className="fa-regular fa-message fa-lg"></i>
        {/* <span className="nav_notification_num">
         3
        </span> */}
        {open && <NotificationsBar className="notificationBar-open" open={open} />}
      </div>
    );
  }


export default Notifications;