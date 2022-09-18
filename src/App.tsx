import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { useTranslation } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('es');
  }, [i18n]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('Welcome to React')}
        </p>
      </header>
    </div>
  );
}

export default App;
