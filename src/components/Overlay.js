import React from "react";

const Overlay = ({ handleClicked }) => {
  return <div onClick={handleClicked} className="overlay"></div>;
};

export default Overlay;
