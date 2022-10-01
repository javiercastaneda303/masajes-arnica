import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from './img/logo.png';
import './App.css';

import { useTranslation } from "react-i18next";

import ButtonAppBar from './components/navbar' ;
import Header from './components/Header';
import ChangeLanguage from './components/ChangeLanguage';

function App() {

  const { t, i18n } = useTranslation();
  const lang = useParams().lang
  useEffect(() => {
    i18n.changeLanguage(lang); // %% ¿quizás no haga falta ahora el use effect?  coger el idioma por defecto del navegador || local Storage
    document.title = 'Masajes Arnica';
  }, [i18n,lang]);
  
  return (
    <div className="App">      
          <ButtonAppBar />
          <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
              
              <Header />
              <ChangeLanguage />
          </header>
    </div>
  );
}

export default App;
