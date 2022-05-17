import React from "react";
import { DisplayLenguage } from "./DisplayLenguage";

const Strings = {
  en: { CURRENT_LANGUAGE: "Language is:" },
  it: { CURRENT_LANGUAGE: "La lingua è:" },
};

export class Language extends React.Component {
  render() {
    return (
      <div>
        <p>Ciao Mondo</p>
        <DisplayLenguage.Consumer>
          {(language) => {
            return <h1>{Strings[language].CURRENT_LANGUAGE}</h1>;
          }}
        </DisplayLenguage.Consumer>
      </div>
    );
  }
}
