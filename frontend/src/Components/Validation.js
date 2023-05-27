import React from "react";

const Validation = ({ error }) => {
  return (
    <p style={{ color: "red" }} className="mb-2">
      {error}
    </p>
  );
};

export default Validation;
