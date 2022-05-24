import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Welcome" element={<Welcome name="Erik" />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/username" element={<ShowGithubUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
