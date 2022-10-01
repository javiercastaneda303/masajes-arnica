import React from "react";
import { useNavigate, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function ChangeLanguage(){
    const [t, i18n] = useTranslation("global");
    const navigate = useNavigate();
    const goTo = (lang: string) => {
      i18n.changeLanguage(lang)
      localStorage.setItem('lang',lang)
      if (window.location.pathname.split('/')[1]){
        navigate(`${window.location.pathname.split('/')[1]}/${lang}`)
      } else {
        navigate(`service/${lang}`)
      }
    }
    return (
      <div>  
         <img onClick={()=> goTo('es')} src="/icons/spain.png" className="icon-language" alt="spain" style={{ cursor: 'pointer' }} />
         <img onClick={()=> goTo('en')} src="/icons/united_kingdom.png" className="icon-language" alt="united_kingdom" style={{ cursor: 'pointer' }} />        
          <br/> 
      </div>
    )
    
}