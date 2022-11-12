import React from "react";

const Button = ({ color, onClick }) => {
  const btnStyle = {
    backgroundColor: color
  };
  return (
    <button onClick={onClick} style={btnStyle} className="btn">
      Add
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue"
};

export default Button;
