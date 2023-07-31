import '../../App.css';
import { Link } from "react-router-dom";
import { LanguageBar } from "../Header/LanguageBar"
import { useTranslation } from 'react-i18next';

export function LeftBarScroll() {
  const { t } = useTranslation();

  return (
    <>
      <div className="scroll-bar">
        <div className="my-drive">
          <div className="menu-title "><span>{t('leftBar.myDrive')}</span></div>
          <ul>
            <li><Link to="/all-files"><i className="fa-regular fa-file"></i> {t('leftBar.allFiles')}</Link></li>
            <li><Link to="/my-devices"><i className="fa-solid fa-desktop"></i>{t('leftBar.myDevices')}</Link></li>
            <li><Link to="/resents"><i className="fa-regular fa-clock"></i>{t('leftBar.resently')}</Link></li>
            <li><Link to="/important"><i className="fa-regular fa-star"></i>{t('leftBar.important')}</Link></li>
            <li><Link to="/deleted"><i className="fa-regular fa-trash-can"></i>{t('leftBar.deletedFiles')}</Link></li>
          </ul>
        </div>
        <div className="file-lib">
          <div className="menu-title"><span>{t('leftBar.fileLib')}</span></div>
          <ul>
            <li><Link to="/documents"><i className="fa-regular fa-file"></i>{t('leftBar.docs')}</Link></li>
            <li><Link to="/images"><i className="fa-regular fa-file-image"></i>{t('leftBar.images')}</Link></li>
            <li><Link to="/videos"><i className="fa-regular fa-file-video"></i>{t('leftBar.video')}</Link></li>
            <li><Link to="/audios"><i className="fa-regular fa-file-audio"></i>{t('leftBar.audio')}</Link></li>
            <li><Link to="/zip"><i className="fa-regular fa-file-zipper"></i>{t('leftBar.zip')}</Link></li>
          </ul>
        </div>
        <div className="storage">
          <div className="menu-title"><span>{t('leftBar.storageStat')}</span></div>
          <div className="storage-status">
            <i className="fa-solid fa-database fa-2xl"></i>
            <p className="used">10.2GB {t('leftBar.usedOf')} 50GB</p>
            <progress className="progress" id="file" value="32" max="100"> 20,4% </progress>
          </div>
          <div className="offer"> <p className="offer-text">
            {t('leftBar.storageTxt')}</p>
            <a href="/">{t('leftBar.learnMore')}</a></div>

        </div>
        <div className="language-bar">
          <LanguageBar />
        </div>
      </div>
    </>
  );
}
