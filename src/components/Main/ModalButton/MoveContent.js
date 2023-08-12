import React, { useState } from "react";
import '../../../App.css';
import { useTranslation } from 'react-i18next';

export default function MoveContent(props) {
  const { show, closeModal } = props;
  const { t } = useTranslation();
  const [selectedFolder, setSelectedFolder] = useState(null);

  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <div className="title">
          <h1>Move Item to</h1>
          <span>Please select a folder</span>
        </div>
        <div className="folder-list">
          <div className="folder-list-content">
            <div className="menu-title "><span>All locations</span></div>
            <ul>
              <li onClick={() => setSelectedFolder("/allfiles")}><i className="fa-regular fa-file"></i> {t('leftBar.allFiles')}</li>
              <li onClick={() => setSelectedFolder("/my-devices")}><i className="fa-solid fa-desktop"></i> {t('leftBar.myDevices')}</li>
              <li onClick={() => setSelectedFolder("/recents")}><i className="fa-regular fa-clock"></i> {t('leftBar.recently')}</li>
              <li onClick={() => setSelectedFolder("/important")}><i className="fa-regular fa-star"></i> {t('leftBar.important')}</li>
              <li onClick={() => setSelectedFolder("/deleted")}><i className="fa-regular fa-trash-can"></i> {t('leftBar.deletedFiles')}</li>
              <li onClick={() => setSelectedFolder("/documents")}><i className="fa-regular fa-file"></i> {t('leftBar.docs')}</li>
              <li onClick={() => setSelectedFolder("/images")}><i className="fa-regular fa-file-image"></i> {t('leftBar.images')}</li>
              <li onClick={() => setSelectedFolder("/videos")}><i className="fa-regular fa-file-video"></i> {t('leftBar.video')}</li>
              <li onClick={() => setSelectedFolder("/audios")}><i className="fa-regular fa-file-audio"></i> {t('leftBar.audio')}</li>
              <li onClick={() => setSelectedFolder("/zip")}><i className="fa-regular fa-file-zipper"></i> {t('leftBar.zip')}</li>
            </ul>
          </div>
        </div>

        <div className="submit">
          <div>
            <input
              className="submit-btn"
              type="submit"
              value="Move"
              onClick={() => {
                if (selectedFolder) {
                  // Perform the move operation using the selectedFolder value
                  // Replace the comments below with your actual move logic
                  console.log(`Moving item to: ${selectedFolder}`);

                  // Reset the selected folder after the move operation
                  setSelectedFolder(null);
                }
              }}
            />
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

