import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

const Home = () => {
  return (
    <div className="homebody">
      <div className="hometext">
        <h1>TRIP APP</h1>
        <h2>Explore travel itineraries</h2>
        <h2>Search by destination, category or duration</h2>
        <h2>Add your own trips and rate others</h2>
      </div>
      <Link to={"/trips"}>
        START EXPLORING <i className="fa-solid fa-earth-americas"></i>
      </Link>
    </div>
  );
};

export default Home;
