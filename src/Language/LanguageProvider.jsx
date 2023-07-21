import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json'; 
import azTranslation from './az.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      az: { translation: azTranslation },
    },
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

