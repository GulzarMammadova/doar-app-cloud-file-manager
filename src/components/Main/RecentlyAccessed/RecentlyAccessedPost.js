import '../../../App.css';
import './RecentlyAccessedList'
import {MenuModal} from '../AllFiles/DropdownButtonContent'


export const RecentlyAccessedPost = ({  
    post: { icon, name, size,seen }, index }) => {
      return (  
        <div className="AllFilesPost-container">
         <MenuModal/>
        <div className="icon-preview">
        <img className="icon" src={icon} alt="post" />
        </div>
          <h4 className="name">{name}</h4>
          <p className="size">{size}</p>
          <p className="seen">{seen}</p>

        </div>
      );
    };
