import { Link, Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <>
      <Container>
        <h1>My application</h1>
      </Container>
      <div>
        <Link to="/Welcome"> Home | </Link>
        <Link to="/users:/username"> Chi sono | </Link>
        <Link to="/Counter"> Counter | </Link>
        <Link to="users">Users</Link>
      </div>

      <Routes>
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}
