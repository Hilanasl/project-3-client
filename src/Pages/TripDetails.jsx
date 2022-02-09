import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiHandler from "./../api/apiHandler";
import Carousel from "../Components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import styles from "./TripDetails.module.css";

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
    <div className={styles.detailsBody}>
      {trip.days ? (
        <>
          <div className={styles.detailsHeader}>
            <h1>{trip.title}</h1>
            <h2>{trip.location}</h2>
            <h3>{trip.description}</h3>
          </div>
          <div>
            <img className={styles.biggerPic} src={trip.image[0]} alt="" />
          </div>
          <div className={styles.containerWrapper}>
            {trip.days.map((day) => {
              return (
                <div className={styles.containerDetails}>
                  <div className={styles.numberBlock} classkey={day._id}>
                    <p>{day.number}</p>
                  </div>
                  <div className={styles.infosBlock}>
                    {day.activities.map((activity) => {
                      return (
                        <div key={activity._id}>
                          <p>
                            <b>{activity.title}</b>
                          </p>
                          <p>
                            <b>
                              <FontAwesomeIcon icon={faMapMarkerAlt} />:{" "}
                            </b>
                            {activity.address}
                          </p>
                          <p>
                            <b>
                              <FontAwesomeIcon icon={faSmileWink} />:{" "}
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
