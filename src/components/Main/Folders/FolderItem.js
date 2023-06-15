import '../../../App.css';
import './FoldersList'
import {MenuModal} from '../AllFiles/DropdownButtonContent'


export const FolderItem = ({
    post: { icon, name, count }, index }) => {
    return (
            <div className="folder-items">
                <div className="folder">
                <MenuModal/>
                    <div className="icon-preview">
                        {/* <img className="icon" src={icon} alt="post" /> */}
                        <i class="fa-regular fa-folder fa-2xl"></i>

                    </div>
                    <div className="description">
                        <h4 className="name">{name}</h4>
                        <p className="count">{count}</p>
                    </div>
                </div>
            </div>
    );
};
