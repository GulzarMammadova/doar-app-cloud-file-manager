import '../../../App.css';
import './AllFilesList'
// import { Link } from "react-router-dom"


export const AllFilesPost = ({  

    post: { icon, name, type, size }, index }) => {
      return (  
        <div className="AllFilesPost-container">
        <div className="menu-hidden">
          {/* <ul>
            <li><Link to="/"><i class="fa-solid fa-circle-info"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link></li>
          </ul> */}
        </div>
        <div className="icon-preview">
        <div>
        <img className="icon" src={icon} alt="post" />
        </div>
        </div>
          <h4 className="name">{name}</h4>
          <p className="type">{type}</p>
          <p className="size">{size}</p>
        </div>
      );
    };
