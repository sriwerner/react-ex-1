import React from "react";

const validationComponent = props => {
  let message;
  if (props.size < 5) {
    message = "Text too short";
  } else {
    message = "Text long enough";
  }
  return <p>{message}</p>;
};

export default validationComponent;
