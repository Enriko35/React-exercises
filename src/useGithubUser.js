import { Outlet, Link } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function UseGithubUser() {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users`,
    fetcher
  );

  function handleRefresh() {
    mutate();
  }

  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}
export default UseGithubUser;
