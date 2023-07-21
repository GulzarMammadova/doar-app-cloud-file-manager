import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './App';
import ThemeContextWrapper from './contexts/ThemeContextWrapper'
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import enTranslation from './Language/en.json';
import azTranslation from './Language/az.json';

function getInitialLanguage() {
  const storedLanguage = localStorage.getItem('language');
  return storedLanguage || 'en';
}

const initialLanguage = getInitialLanguage();

i18n.init({
  resources: {
    en: { translation: enTranslation },
    az: { translation: azTranslation },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
    </React.StrictMode>
  </ThemeContextWrapper>
);
