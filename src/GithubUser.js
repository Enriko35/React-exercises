import { useEffect, useState } from "react";

const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
          console.log(json)
        setData(json);
      });
  }, [username]);

  return <div>
      {data &&<h1>{data.login}</h1> }
  </div>;
};

export default GithubUser;
