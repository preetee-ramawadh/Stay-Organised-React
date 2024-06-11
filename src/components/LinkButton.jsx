import React from "react";

const LinkButton = ({ onClick, children }) => {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        padding: "0",
        textDecoration: "underline",
        color: "blue",
        cursor: "pointer",
        fontSize: "inherit",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LinkButton;
