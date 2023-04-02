import React from "react";

const Alert = ({ error }) => {
  return (
    error !== null && (
      <div className={`alert alert-${error.type}`}>{error.msg}</div>
    )
  );
};

export default Alert;
