import React from "react";
import "./CharComponent.css";

const charComponent = prop => {
  return <div className="char">{prop.letter}</div>;
};

export default charComponent;
