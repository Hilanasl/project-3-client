import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import apiHandler from "./../api/apiHandler";
import useAuth from "./../auth/useAuth";

const Profile = () => {
  const { currentUser, isLoggedIn, storeToken } = useAuth();
  const [usersFaves, setUsersFaves] = useState([]);
  const [usersAdds, setUsersAdds] = useState([]);

  useEffect(() => {
    apiHandler
      .get("/users/profile/faves")
      .then(({ data }) => {
        setUsersFaves(data.favourites);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    apiHandler
      .get("/users/profile/added")
      .then(({ data }) => {
        setUsersAdds(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await apiHandler.delete(`/trips/${id}/delete`);
      apiHandler
        .get("/users/profile/added")
        .then(({ data }) => {
          setUsersAdds(data);
        })
        .catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.profileWrapper}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Domine:wght@500&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
      </style>

      <div className={styles.profileSection}>
        <section className={styles.addTripContainer}>
          <div className={styles.createtrip}>
            <Link to={"/profile/create"}>
              <h2>Let others discover your trips!</h2>
              <>
                <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
              </>
              <h2>Create itinerary</h2>
            </Link>
          </div>
        </section>

        <h2>Your favourite itineraries</h2>
        <section className={styles.favoritesProfile}>
          <div className={styles.favtrips}>
            {usersFaves.map((trip) => {
              return (
                <div className={styles.proftrip} key={trip._id}>
                  <p className={styles.proftriptitle}>{trip.title}</p>
                  <p>{trip.description}</p>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> {trip.location}
                  </p>
                  <img src={trip?.image[0]} alt="" />

                  <Link to={`/trips/${trip._id}`}>
                    <button>See full itinerary</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <h2>Your added trips</h2>
        <section className={styles.favoritesProfile}>
          <div className={styles.favtrips}>
            {usersAdds.map((trip) => {
              return (
                <div className={styles.proftrip} key={trip._id}>
                  <p className={styles.proftriptitle}>{trip.title}</p>
                  <p>{trip.description}</p>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> {trip.location}
                  </p>
                  <img src={trip?.image[0]} alt="" />

                  <div className={styles.profbuttons}>
                    <a href={`/profile/${trip._id}/update`}>
                      <i className="fa-solid fa-pen"></i>
                    </a>
                    <Link to={`/trips/${trip._id}`}>
                      <button>See full itinerary</button>
                    </Link>
                    <a onClick={() => handleDelete(trip._id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
