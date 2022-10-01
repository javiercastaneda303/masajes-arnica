import React from "react";
import { useTranslation } from "react-i18next";
export default function Service(){
    const [t, i18n] = useTranslation("global");
    return (
      <>
        <p>
          {t("header.service")}
        </p>
      </>
    )
    
}