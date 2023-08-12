import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './App';
import ThemeContextWrapper from './contexts/ThemeContextWrapper';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import enTranslation from './Language/en.json';
import azTranslation from './Language/az.json';
import Loader from "./pictures/loader.gif"

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

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={Loader} alt="loader" />
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const AppWithPreloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeContextWrapper>
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            {loading ? <Preloader/> : <App/>}
          </Provider>
        </I18nextProvider>
      </React.StrictMode>
    </ThemeContextWrapper>
  );
};

root.render(<AppWithPreloader />);
