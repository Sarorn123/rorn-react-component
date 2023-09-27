import React from "react";
import "./Button.css"

interface Props {
  label: string;
}

const Button = ({ label }: Props) => {
  return <button>{label}</button>;
};

export default Button;
