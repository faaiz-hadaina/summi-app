import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import FileUpload from "./FileUpload";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1>{"Phonebook App"}</h1>
      <div className="add-container">
        <Button onClick={() => navigate("/addcontact")} color="green" />
        <FileUpload />
      </div>
    </header>
  );
};

export default Header;
