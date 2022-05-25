import React from "react";
import GithubUser from "./GithubUser";

const ShowGithubUser = (username) => {
  console.log(username);
  return (
    <div>
      <GithubUser item={username} />
    </div>
  );
};

export default ShowGithubUser;
