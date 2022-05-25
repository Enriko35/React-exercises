import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

const GithubUserList = () => {
  const [user, setUser] = useState(["Enriko35"]);

  function handlerAddUsers(event) {
    event.preventDefault();
    setUser([...user, event.target.elements.input.value]);
  }

  return (
    <div>
      <form onSubmit={handlerAddUsers}>
        <input name="input" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {user.map((item) => (
          <li>
            <ShowGithubUser />

            <li>
              <Link to="/item">{item}</Link>
            </li>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};

export default GithubUserList;
