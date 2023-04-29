import React from "react";

const Loading = ({ title }) => {
  return (
    <div className="dvError">
      <h1>Loading from {title} . . . </h1>
      <p>Please wait ....</p>
    </div>
  );
};

export default Loading;
