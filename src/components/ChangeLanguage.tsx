import React from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage(){
    const [t, i18n] = useTranslation("global");
    return (
      <div>        
        <img onClick={()=> i18n.changeLanguage("es")} src="/icons/spain.png" className="icon-language" alt="spain" style={{ cursor: 'pointer' }} />
        <img onClick={()=> i18n.changeLanguage("en")} src="/icons/united_kingdom.png" className="icon-language" alt="united_kingdom" style={{ cursor: 'pointer' }} />        
      </div>
    )
    
}