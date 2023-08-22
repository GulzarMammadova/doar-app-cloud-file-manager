import '../../App.css';
import { LanguageBar } from '../Header/LanguageBar'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export function ManageAcc() {
    const { t } = useTranslation();

    return (
        <>
          <div className="main-container">
          <div className="main-content">
          <div className="manage-acc">
            <div className="manage-acc-content">
            <h1>Manage your info, privacy, and security to make Google work better for you.</h1>
            <div className='manage-acc-content-list'>
            <div className="manage-acc-content-item">
                <h3>Privacy & Personalization</h3>
                <p>See the data in your DoAr Account and choose what activity is saved to personalize your experience</p>
            </div>
            <div className='manage-acc-content-item'>
            <h3>Your account is protected</h3>
                <p>The Security Checkup checked your account and found no recommended action</p>   
            </div>
            <div className='manage-acc-content-item'>
            <h3>Privacy suggestions available</h3>
                <p>Take the Privacy Checkup and choose the set-tings that are right for you</p>   
            </div>
            </div>
            </div>
            </div>
          </div>
          </div>
          <div className="left-container">
          <div className="scroll-bar">
        <div className="my-drive">
          <ul>
          <li><Link to="/home"><i className="fa-regular fa-file"></i>Home</Link></li>
            <li><Link to="/personal-info"><i className="fa-regular fa-file-image"></i>Personal info</Link></li>
            <li><Link to="/data-privacy"><i className="fa-regular fa-file-video"></i>Data & privacy</Link></li>
            <li><Link to="/security"><i className="fa-regular fa-file-audio"></i>Security</Link></li>
            <li><Link to="/people-sharing"><i className="fa-regular fa-file-zipper"></i>People &sharing</Link></li>
            <li><Link to="/payment-subscription"><i className="fa-regular fa-file-zipper"></i>Payment & subscription</Link></li>

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
          <div className="copyright">
                <ul>
                    <li><a href='https://policies.google.com/privacy?hl=en'>Privacy</a></li>
                    <li><a href='https://policies.google.com/terms?hl=en'>Terms</a></li>
                    <li><a href='https://hasthemes.com/contact-us/'>Help</a></li>
                    <li><a href="https://www.google.com/account/about/?hl=en">About</a></li>
                </ul>
                </div>
        </div>
      </div>
          </div>

        </>
    );
}


