import '../../../App.css';
import './CreatedFoldersList'
import {MenuModal} from '../ModalButton/ModalButtonContent'


export const CreatedFolderItem = ({
    post: { icon, name, count }, index }) => {
    return (
            <div className="folder-items">
                <div className="folder">
                <MenuModal/>
                    <div className="icon-preview">
                        <i className="fa-regular fa-folder fa-2xl"></i>
                    </div>
                    <div className="description">
                        <h4 className="name">{name}</h4>
                        <p className="count">{count}</p>
                    </div>
                </div>
            </div>
    );
};
