import React from "react";
import GithubUser from "./GithubUser";

const ShowGithubUser = (username) => {
  console.log(username);
  return (
    <div>
      <GithubUser username="Enriko35" />
    </div>
  );
};

export default ShowGithubUser;
