import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import apiHandler from '../api/apiHandler.js';

const Trips = ({ trips }) => {
  if (!trips) return <div>Loading</div>;

  return (
    <div>
      <h1>Trips</h1>
      <div className="container">
        {trips.map((trip) => {
          return (
            <div className="trip" key={trip._id}>
              <Link to={trip._id}>
                <p>{trip.title}</p>
              </Link>
              <p>Location: {trip.location}</p>
              <p>{trip.description}</p>
              <p>Contributor: {trip.author.username}</p>
              <img className="mainPics" src={trip.image[0]} alt="" />
              <p className="daynumber">Days: {trip.days.length}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trips;
