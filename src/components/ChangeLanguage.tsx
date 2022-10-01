import React from "react";
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function ChangeLanguage(){
    const [t, i18n] = useTranslation("global");
    const navigate = useNavigate();
    return (
      <div>        
        <img onClick={()=> navigate(`/es`)} src="/icons/spain.png" className="icon-language" alt="spain" style={{ cursor: 'pointer' }} />
        <img onClick={()=> navigate(`/en`)} src="/icons/united_kingdom.png" className="icon-language" alt="united_kingdom" style={{ cursor: 'pointer' }} />        
      </div>
    )
    
}