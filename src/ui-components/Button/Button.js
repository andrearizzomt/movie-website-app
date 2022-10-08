import React from "react";
import { ButtonStyled } from "./ButtonStyles";

const Button = (props) => {
  const { primary, btnText } = props;

  return <ButtonStyled primary={primary}>{btnText}</ButtonStyled>;
};

export default Button;
