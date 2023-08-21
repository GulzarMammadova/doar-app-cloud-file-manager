import React, {  useState } from 'react';
import MessagesBar from './MessagesBar';

export function Messages()  {

  const [open,setOpen] = useState(false)
  
    return (
      <div className="nav__notification" onClick={()=>setOpen(!open)}>
        <span className="nav_notification_icon"  />
        <i className="fa-regular fa-bell fa-lg"></i>
        {/* <span className="nav_notification_num">
         3
        </span> */}
        {open && <MessagesBar className="notificationBar-open" open={open} />}
      </div>
    );
  }


export default Messages;