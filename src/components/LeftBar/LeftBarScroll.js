import '../../App.css';
import { Link } from "react-router-dom";
import {LanguageBar} from "../Header/LanguageBar"
import { useTranslation } from 'react-i18next';

export function LeftBarScroll() {
  const { t } = useTranslation();

  return (
      <div className="scroll-bar dark-mode">
      <div className="my-drive dark-mode">
      <div className="menu-title "><span>{t('leftBar.myDrive')}</span></div>
      <ul>
            <li><Link to="/"><i className="fa-regular fa-file"></i>{t('leftBar.allFiles')}</Link></li>
            <li><Link to="/"><i className="fa-solid fa-desktop"></i> {t('leftBar.myDevices')}</Link></li>
            <li><Link to="/"><i className="fa-regular fa-clock"></i> {t('leftBar.resently')}</Link></li>
            <li><Link to="/"><i className="fa-regular fa-star"></i> {t('leftBar.important')}</Link></li>
            <li><Link to="/"><i className="fa-regular fa-trash-can"></i>{t('leftBar.deletedFiles')}</Link></li>
          </ul>
      </div>
      <div className="file-lib dark-mode">
      <div className="menu-title"><span>{t('leftBar.fileLib')}</span></div>
      <ul>
            <li><Link to="/"><i className="fa-regular fa-file"></i>{t('leftBar.docs')}</Link></li>
            <li><Link to="/"><i className="fa-regular fa-file-image"></i> {t('leftBar.images')}</Link></li>
            <li><Link to="/"><i className="fa-regular fa-file-video"></i>{t('leftBar.video')}</Link></li>
            <li><Link to="/"><i className="fa-regular fa-file-audio"></i> {t('leftBar.audio')}</Link></li>
            <li><Link to="/"><i className="fa-regular fa-file-zipper"></i>{t('leftBar.zip')}</Link></li>
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
      <LanguageBar/>
      </div>
      </div>
  );
}
