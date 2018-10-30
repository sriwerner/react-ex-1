import React from "react";

const validationComponent = props => {
  let message;
  if (props.size < 5) {
    message = "text too short";
  } else {
    message = "text long enough";
  }
  return <p>{message}</p>;
};

export default validationComponent;
