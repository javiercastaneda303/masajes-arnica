import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import logo from './img/logo.png';
import './App.css';

import { useTranslation } from "react-i18next";

import ButtonAppBar from './components/navbar' ;
import Header from './components/Header';
import ChangeLanguage from './components/ChangeLanguage';

function App() {

  const { t, i18n } = useTranslation();
  const langURL = useParams().lang || undefined; // hay qeu tiparlo que que únicamente tenga unos valoes válidos es y en
  // const [lang, setLang] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (langURL === 'es' || langURL === 'en' ) {  // %% ¿quizás no haga falta ahora el use effect?  coger el idioma por defecto del navegador || local Storage
      i18n.changeLanguage(langURL); // %% OJO  que como useParams().lang no lo pueda usar el instante, falla el sistema
      localStorage.setItem('lang',langURL)
      localStorage.setItem('component', window.location.pathname.split('/')[1])
    } else if (lang === 'es' || lang === 'en' ) {
      i18n.changeLanguage(lang)
    } else  {
      i18n.changeLanguage('es') // ésto no hace falta, ya lo hace el i18n, ponle ruso para testear
    }
    document.title = 'Masajes Arnica';
    // when go to / => url go to home  ¿there are a better form to do this?
    if (!window.location.pathname.split('/')[1]){
      navigate(`service/${i18n.language}`)
    }
  }, [i18n]);
  
  return (
    <div className="App">      
          <ButtonAppBar />
          <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
              <Outlet />
              <Header />
              <ChangeLanguage />
          </header>
    </div>
  );
}

export default App;
