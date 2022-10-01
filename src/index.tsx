import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import Service from './components/Service';
import Price from './components/Price';
import Contact from './components/Contact';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        global: global_en
      },
      es: {
        global: global_es
      }
    },
    lng: "es", // %% PENDIENTE ELIMINAR!!!!  if you're using a language detector, do not define the lng option
    fallbackLng: "es",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Service />} />
            <Route path="/service/:lang" element={<Service />} />
            <Route path="/service/" element={<Service />} />
            <Route path="/price/:lang" element={<Price />} />
            <Route path="/price/" element={<Price />} />
            <Route path="/contact/:lang" element={<Contact />} />
            <Route path="/contact/" element={<Contact />} />            
          </Route>
        </Routes>
      </BrowserRouter>           
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
