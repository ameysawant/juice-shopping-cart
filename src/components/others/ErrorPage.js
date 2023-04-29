import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="dvError">
      <h1>{error} Not Found </h1>
      <p>Could not fetch your api url</p>
    </div>
  );
};

export default ErrorPage;
