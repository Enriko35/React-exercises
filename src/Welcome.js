import React from "react";

export const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
    </div>
  );
};
