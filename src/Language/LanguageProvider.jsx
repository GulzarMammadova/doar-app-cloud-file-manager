// import React, { useState } from 'react';
// import { IntlProvider } from 'react-intl';
// import enTranslation from './translations/en.json';
// import ruTranslation from './translations/ru.json';
// import azTranslation from './translations/az.json';


// const LanguageProvider = ({ children }) => {
//   const [locale, setLocale] = useState('en');
//   const messages = {
//     en: enTranslation,
//     az: azTranslation,
//     ru: ruTranslation,
// };

//   const switchLanguage = (newLocale) => {
//     setLocale(newLocale);
//   };

//   return (
//     <IntlProvider locale={locale} messages={messages[locale]}>
//       {children}
//     </IntlProvider>
//   );
// };

// export default LanguageProvider;
