import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export function App() {
  const [language, setLanguage] = useState("it");
  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <div>
        <select value={language} onChange={handleLanguage}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>

        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    </div>
  );
}
