import { useParams } from "react-router-dom";
import UsegithubUser from "./UseGithubUser";

const GithubUser = () => {
  const { username } = useParams();
  const { data, load, err, onFetchUser } = UsegithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }

  
  return (
    <div>
      <button onClick={handleGetUserData}>Load...</button>
      {load && <h2>Load...</h2>}
      {err && <h2>There is an error</h2>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
};

export default GithubUser;
