import '../../../App.css';
import './AllFilesList'
import {MenuModal} from './DropdownButtonContent'

export const AllFilesPost = ({

  post: { icon, name, type, size }, index }) => {
  return (
    <div className="AllFilesPost-container">
      <MenuModal/>
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
