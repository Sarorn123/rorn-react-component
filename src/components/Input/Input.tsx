import React from "react";

interface Props {
  placeholder: string
}

const Input = ({placeholder}: Props) => {
  return <input placeholder={placeholder} />;
};

export default Input;
