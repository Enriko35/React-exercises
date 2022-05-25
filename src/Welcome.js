import React from "react";

export const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <h1>Come stai oggi {name}?</h1>
    </div>
  );
};
