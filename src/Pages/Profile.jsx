import React from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className={styles.profileWrapper}>
      <div>
        <h1>Welcome to your Travel Board!</h1>
      </div>
      <div className={styles.profileSection}>
        <section className={styles.addTripContainer}>
          <h2 className={styles.addTitle}>
            How about let others discover your trips?
          </h2>
          <div>
            <p className={styles.addSubtitle}>Create a new Trip:</p>
            <Link to={"/profile/create"}>
              {" "}
              <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
            </Link>
          </div>
        </section>
        <section className={styles.favoritesProfile}>
          <h2>Don't forget your favorite itineraries!</h2>
          <div>Check favorites here</div>
        </section>
        <section className={styles.favoritesProfile}>
          <h2>Your added trips</h2>
          <div>Check favorites here</div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
