import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [username]);
  return { data };
}
