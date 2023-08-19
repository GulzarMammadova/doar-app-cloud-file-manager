import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const DropdownButtonUpload = () => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log('Uploaded files:', files);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="upload-btn-dropdown">
        <label className="upload-btn" onClick={handleButtonClick}>
          {t('leftBar.uploadBtn')}
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileUpload}
            style={{ display: 'none' }} 
          />
        </label>
      </div>
    </>
  );
};

export default DropdownButtonUpload;
