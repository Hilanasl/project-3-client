import React, { useEffect, useState } from "react";
//import apiHandler from '../api/apiHandler.js';

const Trips = ({trips}) => {

  if(!trips) return <div>Loading</div>


  return (
    <div>
      <h1>Trips List</h1>
      <div className='container'>
        {trips.map((trip) => {
          return (
            <div className='trip' key={trip._id}>
            <p>{trip.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Trips;
