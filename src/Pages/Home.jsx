import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

const Home = () => {
  return (
    <div className="homebody">
      <div className="hometext">
        <h2>Explore travel itineraries by place, theme or duration</h2>
        <h2>Add your own trips and rate others</h2>
      </div>
    </div>
  );
};

export default Home;
