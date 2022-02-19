import Button from "layout/Button";
import React from "react";

const ResetButton = (props) => {
  return <Button onClick={props.onReset}>우선순위 리셋</Button>;
};

export default ResetButton;
