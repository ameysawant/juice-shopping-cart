import React from "react";

const OutOfStock = ({ error }) => {
  return <div>{error.toUpperCase()}</div>;
};

export default OutOfStock;
