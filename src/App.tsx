import React, { useEffect } from 'react';
import logo from './img/logo.png';
import './App.css';

import { useTranslation } from "react-i18next";

import Header from './components/Header';
import ChangeLanguage from './components/ChangeLanguage';

function App() {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('es'); // %% ¿quizás no haga falta ahora el use effect?  coger el idioma por defecto del navegador || local Storage
    document.title = 'Masajes Arnica';
  }, [i18n]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          <Header />
          <ChangeLanguage />
        </p>
      </header>
    </div>
  );
}

export default App;
