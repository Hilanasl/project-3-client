import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiHandler from "./../api/apiHandler";
import Carousel from "../Components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const TripDetails = () => {
  const [trip, setTrip] = useState({});
  const { id } = useParams();

  useEffect(() => {
    apiHandler
      .get("http://localhost:8000/trips/" + id)
      .then(({ data }) => {
        setTrip(data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      {trip.days ? (
        <>
          <div className="detailsHeader">
            <h1>{trip.title}</h1>
            <h2>{trip.location}</h2>
            <h3>{trip.description}</h3>
          </div>
          <div>
            <img className="biggerPic" src={trip.image[0]} alt="" />
          </div>
          <div className="containerWrapper">
            {trip.days.map((day) => {
              return (
                <div className="containerDetails">
                  <div className="numberBlock" classkey={day._id}>
                    <p>{day.number}</p>
                  </div>
                  <div className="infosBlock">
                    {day.activities.map((activity) => {
                      return (
                        <div key={activity._id}>
                          <p>
                            <b>{activity.title}</b>
                          </p>
                          <p>
                            <b>Address: </b>
                            {activity.address}
                          </p>
                          <p>
                            <b>Little tip: </b>
                            {activity.description}
                          </p>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <Carousel trip={trip} />
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
