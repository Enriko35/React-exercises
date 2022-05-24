import React from "react";
import { Route, Routes } from "react-router-dom";

export const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
    </div>
  );
};
export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome name="Erik" />} />
      </Routes>
    </div>
  );
}
