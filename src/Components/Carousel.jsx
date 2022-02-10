import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Carousel.module.css";

const Carousel = ({ trip }) => {
  // const [currentPosition, setCurrentPosition] = useState(true);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    // if (!carousel.current) {
    //   setCurrentPosition(true);
    // }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  console.log("current pic:", carousel.current);

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Domine:wght@500&family=Montserrat&family=Open+Sans&display=swap"
        rel="stylesheet');
      </style>
      <div className={styles.container}>
        <div className={styles.carousel} ref={carousel}>
          {trip.image?.map((pic, index) => (
<<<<<<< HEAD
            <div className={styles.image} key={index}>
              <img src={pic} alt="" />
=======
            <div className={styles.item} key={index}>
              <div className={styles.image}>
                <img src={pic} alt="" />
              </div>
>>>>>>> 6e35318c065faeb49c5b7aa0b9aaf2dda4bd1c29
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carouselBtns}>
        <button className={styles.chevron} onClick={handleLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles.chevron} onClick={handleRightClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
