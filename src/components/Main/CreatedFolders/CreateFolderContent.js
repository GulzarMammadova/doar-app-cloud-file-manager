import React, { useState } from "react";
import '../../../App.css';

export const CreateFolderContent = ({ optionsNew, onFolderCreate, props }) => {
    const { show, closeModal } = props;
    const [newFolderName, setNewFolderName] = useState('');

    const handleInputChange = (event) => {
        setNewFolderName(event.target.value);
    };

    const handleCreateFolder = () => {
        if (newFolderName.trim() !== '' && onFolderCreate) {
            onFolderCreate(newFolderName.trim());
            setNewFolderName('');
        }
    };
    return (
        <>
            <div className={show ? "overlay" : "hide"} onClick={closeModal} />
            <div className={show ? "modal" : "hide"}>
                <div className="title">
                    <h1>Create Folder</h1>
                </div>
                <div className="folder-list">
                    <input type="text"
                        value={newFolderName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="submit">
                    <div>
                        <input className="submit-btn" type="submit" value="Create" onClick={handleCreateFolder}/>
                    </div>
                    <div>
                        <button className="submit-btn" type="submit" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

