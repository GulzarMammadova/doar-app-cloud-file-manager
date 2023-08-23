import React, {  useState } from 'react';
import ProfileContent from './ProfileContent';

export default function Profile()  {

  const [open,setOpen] = useState(false)
  
    return (
      <div className="nav__notification" 
           onClick={()=>setOpen(!open)}>
          <span className="avatar">gm</span>
          {open && 
          <ProfileContent className="notificationBar-open" 
          open={open} />}
      </div>
    );
  }


