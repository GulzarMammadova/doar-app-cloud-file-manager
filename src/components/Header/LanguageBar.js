import React, { useState } from "react";
import '../../App.css';
import  LanguagesData from "../../languages.json"
import { useTranslation } from 'react-i18next';

export function LanguageBar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="LanguageBar">
 <select id="language-select" value={language} onChange={handleChange}>
        {LanguagesData.languages.map((lang) => (
          <option key={lang.id} value={lang.code}>
            {t(`languageBar.${lang.code.toLowerCase()}`)}
          </option>
        ))}
      </select>
    </div>
  );
}
