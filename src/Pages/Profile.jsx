import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import apiHandler from "./../api/apiHandler";


const Profile = () => {

  const [usersFaves, setUsersFaves] = useState([])

  useEffect(() => {
    apiHandler
      .get("/users/profile")
      .then(({ data }) => {
        setUsersFaves(data.favourites);
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className={styles.profileWrapper}>
      <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Domine:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
      </style>
      <div>
      <h1>Welcome to your Travel Board!</h1>
      </div>

      <div className={styles.profileSection}>

        <section className={styles.addTripContainer}>

        <div className={styles.createtrip}>
        <Link to={"/profile/create"}>
          <h2>
            Let others discover your trips!</h2>
            <><FontAwesomeIcon icon={faPlus} className={styles.plusIcon} /></>
          <h2>Create a new trip</h2>
          </Link>
          </div>

          </section>




        <h2>Your favourite itineraries</h2>

        <section className={styles.favoritesProfile}>
          <div className={styles.favtrips}>

          {usersFaves.map((trip) => {
            return (
            <div className={styles.proftrip} key={trip._id}>

            <p>{trip.title}</p>
            <p>{trip.description}</p>
            <p><i className="fas fa-map-marker-alt"></i> {trip.location}</p>
            <img src={trip?.image[0]} alt=""/>

            <Link to={`/trips/${trip._id}`}>
            <button>See full itinerary</button>
            </Link>
            </div>
            )
          })}
        </div>
        </section>

        <h2>Your added trips</h2>
        <section className={styles.favoritesProfile}>
        <p>waiting for added trips</p>
        </section>
      </div>
    </div>
  );
};

export default Profile;
