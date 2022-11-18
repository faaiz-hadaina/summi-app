import React from "react";

const Button = ({ color, onClick, title }) => {
  const btnStyle = {
    backgroundColor: color,
  };
  return (
    <button onClick={onClick} style={btnStyle} className="btn">
      {title}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
