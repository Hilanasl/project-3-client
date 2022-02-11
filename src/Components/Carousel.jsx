import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Carousel.module.css";

const Carousel = ({ trip }) => {
  const [arrayOfPics, setArrayOfPics] = useState(trip.image);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

    console.log("this is scrollLeft", carousel.current.scrollLeft);
    console.log("this is offsetWidth", carousel.current.offsetWidth);
    // if (!carousel.current) {
    //   setCurrentPosition(true);
    // }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    // if (carousel.current.scrollLeft === 375) {
    //   carousel.current.scrollLeft = 0;
    // } else {
    //   carousel.current.scrollLeft += carousel.current.offsetWidth;
    // }
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    console.log("this is scrollLeft", carousel.current.scrollLeft);
    console.log("this is offsetWidth", carousel.current.offsetWidth);
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
            <div className={styles.image} key={index}>
              <img src={pic} alt="" />
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
