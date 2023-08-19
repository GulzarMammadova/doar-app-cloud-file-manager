import React from "react";
import '../../App.css';
import { useTranslation } from 'react-i18next';

export function LanguageBar() {
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="LanguageBar">
      <select id="language-select" title="language-bar" value={i18n.language} onChange={handleChange}>
        <option value="en">{t('languageBar.en')}</option>
        <option value="az">{t('languageBar.az')}</option>
      </select>
    </div>
  );
}
