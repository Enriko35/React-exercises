import React from "react";
import { ReduxCounter } from "./ReduxCounter";

export const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <h1>Come stai oggi {name}?</h1>
      <ReduxCounter />
    </div>
  );
};
