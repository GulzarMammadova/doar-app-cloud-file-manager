import React from "react";
import "../../../App.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function CopyContent(props) {
  const { show, closeModal } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <div className="title">
          <h1>Copy Item to</h1>
          <span>Please select a folder</span>
        </div>
        <div className="folder-list">
        <div className="folder-list-content">
          <div className="menu-title "><span>All locations</span></div>
          <ul>
            <li><Link to="/allfiles"><i className="fa-regular fa-file"></i> {t('leftBar.allFiles')}</Link></li>
            <li><Link to="/my-devices"><i className="fa-solid fa-desktop"></i> {t('leftBar.myDevices')}</Link></li>
            <li><Link to="/recents"><i className="fa-regular fa-clock"></i> {t('leftBar.recently')}</Link></li>
            <li><Link to="/important"><i className="fa-regular fa-star"></i> {t('leftBar.important')}</Link></li>
            <li><Link to="/deleted"><i className="fa-regular fa-trash-can"></i> {t('leftBar.deletedFiles')}</Link></li>
            <li><Link to="/documents"><i className="fa-regular fa-file"></i> {t('leftBar.docs')}</Link></li>
            <li><Link to="/images"><i className="fa-regular fa-file-image"></i> {t('leftBar.images')}</Link></li>
            <li><Link to="/videos"><i className="fa-regular fa-file-video"></i> {t('leftBar.video')}</Link></li>
            <li><Link to="/audios"><i className="fa-regular fa-file-audio"></i> {t('leftBar.audio')}</Link></li>
            <li><Link to="/zip"><i className="fa-regular fa-file-zipper"></i> {t('leftBar.zip')}</Link></li>
          </ul>
        </div>
        </div>
        <div className="submit">
          <div>
            <input className="submit-btn" type="submit" value="Copy" />
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
