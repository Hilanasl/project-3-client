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
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  console.log("current pic:", carousel.current);

  return (
    <div>
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
