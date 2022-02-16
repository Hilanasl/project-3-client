import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import apiHandler from "./../api/apiHandler";
import Carousel from "../Components/Carousel";
import MapContainer from "../Components/MapContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import styles from "./TripDetails.module.css";

const TripDetails = ({ favesClick, faves }) => {
  const [trip, setTrip] = useState({});
  const { id } = useParams();
  const { currentUser, isLoggedIn, storeToken } = useAuth();

  useEffect(() => {
    apiHandler
      .get("http://localhost:8000/trips/" + id)
      .then(({ data }) => {
        setTrip(data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className={styles.detailsBody}>
      {trip.days ? (
        <>
          <div className={styles.detailsHeader}>
            <h1>{trip.title}</h1>
            <h2>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {trip.location}
            </h2>
            <h3>{trip.description}</h3>
            <h3>Contributed by: {trip.author.username}</h3>
          </div>
          <div></div>
          <div>
            <img className={styles.biggerPic} src={trip.image[0]} alt="" />
          </div>
          <h3>
            Favourited by: {trip.favedBy.length}{" "}
            <i className="fa-solid fa-heart"></i>
          </h3>
          {isLoggedIn && (
            <div className="tripsbtn">
              {!faves.includes(id) && (
                <button onClick={() => favesClick(id)}>
                  Favourite <i className="fa-solid fa-sun"></i>
                </button>
              )}
              {faves.includes(id) && (
                <button onClick={() => favesClick(id)}>
                  Unfavourite{" "}
                  <i className="fa-solid fa-cloud-showers-heavy"></i>
                </button>
              )}
            </div>
          )}
          <Link to="/trips">
            <button>Back to trips</button>
          </Link>
          <div className={styles.containerWrapper}>
            {trip.days.map((day) => {
              return (
                <div className={styles.containerDetails} key={day._id}>
                  <div className={styles.numberBlock} classkey={day._id}>
                    <p>{day.number}</p>
                  </div>
                  <div className={styles.infosBlock}>
                    {day.activities.map((activity) => {
                      return (
                        <div key={activity._id}>
                          <p className={styles.activitiesTitle}>
                            {activity.title}
                          </p>
                          <p>
                            <b>
                              <FontAwesomeIcon
                                className={styles.fontIcons}
                                icon={faMapMarkerAlt}
                              />{" "}
                            </b>
                            {activity.address}
                          </p>
                          <p>
                            <b>
                              <FontAwesomeIcon
                                className={styles.fontIcons}
                                icon={faLightbulb}
                              />{" "}
                            </b>
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
          <MapContainer id={id} />
        </>
      ) : (
        <p>Sorry, no trip yet!</p>
      )}
    </div>
  );
};

export default TripDetails;
