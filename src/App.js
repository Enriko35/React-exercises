import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import GithubUserList from "./GithubUserList";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <div>
            <Link to="/Welcome">Welcome</Link> |
            <Link to="/Counter">Counter</Link> |
            <Link to="/GithubUserList">My NickName</Link>
          </div>
          <Routes>
            <Route path="/Welcome" element={<Welcome name="Erik" />} />
            <Route path="/Counter" element={<Counter />} />

            <Route path="/users:/item" element={<GithubUserList />}>
              <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
            </Route>

            <Route
              path="*"
              element={
                <div>
                  <p>Not Found</p>
                  <Link to="/Welcome">Go home</Link>
                </div>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}
