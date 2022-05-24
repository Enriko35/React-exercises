import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import { Welcome } from "./Welcome";
import { Container } from "./Container";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <div>
            <Link to="/Welcome">Welcome</Link> |<Link to="/username">Name</Link>
            |<Link to="/Counter">Counter</Link>
          </div>
          <Routes>
            <Route path="/Welcome" element={<Welcome name="Erik" />} />
            <Route path="/Counter" element={<Counter />} />
            <Route path="/username" element={<ShowGithubUser />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}
