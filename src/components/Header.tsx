import React from "react";
import { useTranslation } from "react-i18next";
export default function Header(){
    const [t, i18n] = useTranslation("global");
    return (
      <div>
        <p>
          {t("header.language")}
        </p>
        <p>
          {t("header.slogan")}
        </p>
        <br/><br/>
      </div>
    )
    
}