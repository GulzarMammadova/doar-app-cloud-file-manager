import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

export function Settings({toggleLayout, isGrid}) {
  // const [open,setOpen] = useState(false)
  
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
        {/* <button  onClick={()=>setOpen(!open)}>
          <i className="fa-solid fa-circle-exclamation fa-lg"></i>
          {open && 
          <ProfileContent className="notificationBar-open" 
          open={open} />}
        </button> */}
        <Link to="/settings"><i className="fa-solid fa-gear fa-lg"></i></Link>
      </div>
      </div> 
    </div>
  );
}
