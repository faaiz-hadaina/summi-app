import React from "react";
import Contacts from "./../components/Contacts";
import Header from "./../components/Header";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Contacts />
      <div className="notice">
        <span>Click to select multiple contacts</span>
      </div>
    </div>
  );
};

export default Home;
