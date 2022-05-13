import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <button
      className={`${props.secondary ? "secondary" : ""}`}
    >
      {props.text}
    </button>
  );
}

export default Button;
