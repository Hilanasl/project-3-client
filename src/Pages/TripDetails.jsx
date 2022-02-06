import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import apiHandler from "./../api/apiHandler";


const TripDetails = () => {

  const [trip, setTrip] = useState({});
  const { id } = useParams();
  console.log("This is first front:", id);

  useEffect(() => {
    apiHandler
      .get("http://localhost:8000/trips/" + id)
      .then(({ data }) => {
        console.log("This is front:", data);
        setTrip(data);
      })
      .catch((e) => console.log(e));
  }, [id]);
 

  return (
    <div>

        {trip ? (
        <>
          <h1>{trip.title}</h1>
          <h2>{trip.location}</h2>
          <h3>{trip.description}</h3>
          {/* <div>
            {trip.days.activities.map((activity) => {
              return (
                <>
                  <p>{activity.title}</p>
                  <p>{activity.address}</p>
                  <p>{activity.description}</p>
                </>
              );
            })}
          </div> */}

          <div className='carousel'>
          {trip.image?.map((image, index) => (
            <img src={image} alt='' key={index}/>
          ))}
          </div>

        </>
      ) : (
        <p>Sorry, no trip yet!</p>
      )}
 

        <Link to="/trips">
        <button>Back to Trips</button>
        </Link>
    </div>
  );
};

export default TripDetails;
