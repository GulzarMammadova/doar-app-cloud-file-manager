import '../../App.css';
import React, { useState } from 'react';
// import { LanguageBar } from './LanguageBar'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
  };
  return [storedValue, setValue];
}
export function SettingsContent() {
  const { t } = useTranslation();

  const [storageProgress] = useLocalStorage('storageProgress', 32);
  const [density, setDensity] = useLocalStorage('density', false);
  const [uploadsToDocs, setUploadsToDocs] = useLocalStorage('uploadsToDocs', false);
  const [offlineChanges, setOfflineChanges] = useLocalStorage('offlineChanges', false);
  const [showMySuggested, setShowMySuggested] = useLocalStorage('showMySuggested', false);
  const [showSharedSuggested, setShowSharedSuggested] = useLocalStorage('showSharedSuggested', false);

  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <div className="settings-menu">
            <div className="settings-content">
              <div className="settings-content-list">
                <div className="settings-content-item">
                  <h1>Storage</h1>
                  <progress className="progress" 
                            id="file" 
                            value={storageProgress} 
                            max="100">
                            {storageProgress.toFixed(1)}%
                  </progress>
                  <p className="used">10.2GB {t('leftBar.usedOf')} 50GB</p>
                  <button className='buy-storage'><a href="/">Buy storage</a></button>
                </div>
                <div className="settings-content-item">
                  <h1>Density</h1>
                  <div>
                    <input type="radio" 
                           id="comfortable" 
                           name="drone" 
                           value="comfortable" 
                           checked={density === 'comfortable'}
                           onChange={() => setDensity('comfortable')} />
                    <label for="comfortable">Comfortable</label>
                  </div>
                  <div>
                    <input type="radio" 
                           id="cozy" 
                           name="drone" 
                           value="cozy" 
                           checked={density === 'cozy'}
                           onChange={() => setDensity('cozy')} />
                    <label for="cozy">Cozy</label>
                  </div>
                  <div>
                    <input type="radio" 
                           id="compact" 
                           name="drone" 
                           value="compact" 
                           checked={density === 'compact'}
                           onChange={() => setDensity('compact')}/>
                    <label for="compact">Compact</label>
                  </div>
                </div>
                <div className="settings-content-item">
                  <h1>Uploads</h1>
                  <div>
                    <input type="checkbox" 
                           id="uploads" 
                           name="interest" 
                           value="uploads" 
                           checked={uploadsToDocs}
               onChange={() => setUploadsToDocs(!uploadsToDocs)} />
                    <label for="uploads">Convert uploads to Docs editor format</label>
                  </div>
                </div>
                <div className="settings-content-item">
                  <h1>Offline</h1>
                  <div>
                    <input type="checkbox" 
                           id="offline" 
                           name="interest" 
                           value="offline"
                           checked={offlineChanges}
               onChange={() => setOfflineChanges(!offlineChanges)} />
                    <label for="offline">Make all changes offline</label>
                  </div>
                </div>
                <div className="settings-content-item">
                  <h1>Suggested files</h1>
                  <div>
                    <input type="checkbox" 
                           id="my-suggested" 
                           name="interest" 
                           value="my-suggested" 
                           checked={showMySuggested}
               onChange={() => setShowMySuggested(!showMySuggested)} />
                    <label for="my-suggested">Show suggested files in MyDrive</label>
                  </div>
                  <div>
                    <input type="checkbox" 
                           id="shared-suggested" 
                           name="interest" 
                           value="shared-suggested" 
                           checked={showSharedSuggested}
                          onChange={() => setShowSharedSuggested(!showSharedSuggested)} />
                    <label for="shared-suggested">Show suggested files in Shared with me</label>
                  </div>
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
              <li><Link to="/general">General</Link></li>
              <li><Link to="/notifications">Notifications</Link></li>
              <li><Link to="/manage-account">Manage Account</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}


