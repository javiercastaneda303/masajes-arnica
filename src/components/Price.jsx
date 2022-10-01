import React from "react";
import { useTranslation } from "react-i18next";
export default function Price(){
    const [t, i18n] = useTranslation("global");
    return (
      <>
        <p>
          {t("header.price")}
        </p>
      </>
    )
    
}