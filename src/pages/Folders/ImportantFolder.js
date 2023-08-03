import React, { useState, useEffect }from 'react';
import { useTranslation } from 'react-i18next';
import { AllFilesPost } from '../../components/Main/AllFiles/AllFilesPost';
import {AllFilesList} from '../../components/Main/AllFiles/AllFilesList';


export function ImportantFolder() {
  const { t } = useTranslation();
  const [starredFiles, setStarredFiles] = useState([]);
  useEffect(() => {
    const starredFiles = JSON.parse(localStorage.getItem('starredFiles')) || [];
    setStarredFiles(starredFiles);
  }, []);

  return (
    <div className="main-container">
      <div className='main-content'>
        <h1>{t('leftBar.important')}</h1>
        <div className="recently">
          <div className="menu-title"><span></span></div>
          {starredFiles.map(fileIndex => (
        <AllFilesPost key={fileIndex} post={AllFilesList} index={fileIndex} />
      ))}
        </div>
      </div>
    </div>
  );
}
