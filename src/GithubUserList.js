import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserList = () => {
  const [user, setUser] = useState(["Enriko35"]);

  function handlerAddUsers(event) {
    event.preventDefault();
    setUser([...user, event.target.elements.input.value]);
  }

  return (
    <div>
      <form onSubmit={handlerAddUsers}>
        <input  name="input" />
        <button type="submit">
          Add
        </button>
      </form>
      <ul>
        {user.map((item) => (
          <li>
            <GithubUser username={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
