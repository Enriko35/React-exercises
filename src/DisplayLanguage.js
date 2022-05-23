import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

const Strings = {
  en: { CURRENT_LANGUAGE: "Language is:" },
  it: { CURRENT_LANGUAGE: "La lingua è:" },
};

export const DisplayLanguage = () => {
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1>
        {Strings[language].CURRENT_LANGUAGE} {language}
      </h1>
    </div>
  );
};
