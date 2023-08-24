import React from 'react';
import { useTranslation } from 'react-i18next';

export function DeletedFolder({ deletedItems }) {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className='main-content'>
        <h1>{t('leftBar.deletedFiles')}</h1>
        <div className="recently">
          <div className="menu-title"><span></span></div>
          <div className="deleted-items">
            {deletedItems && deletedItems.length > 0
              ? deletedItems.map((item) => (
                <div key={item.id} className="deleted-item">
                <span>{item.name}</span>
                </div>
              ))
              : <p className="menu-notification-text">{t('messages.folderMsg')}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
