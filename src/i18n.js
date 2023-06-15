import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './Language/en.json';
import azTranslation from './Language/az.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    az: {
      translation: azTranslation,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes variables
  },
});

export default i18n;
