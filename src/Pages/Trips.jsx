import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import apiHandler from '../api/apiHandler.js';
import Search from "./../Components/Search";
import FilterCats from "../Components/FilterCats";
import FilterDays from "../Components/FilterDays";
import './../AllTrips.css'


const Trips = ({ trips }) => {
  const [searchedString, setSearchedString] = useState("");
  const [searchedTrips, SetSearchedTrips] = useState(trips);
  const [filteredCats, setFilteredCats] = useState([]);
  const [duration, setDuration] = useState("");


  const categories = [
    "adventure",
    "budget",
    "comfortable",
    "luxury",
    "family",
    "culture",
    "shopping",
    "romantic",
    "party",
    "gastronomic",
    "nature",
  ];

  if (!trips) return <div>Loading</div>;

  const [showFilters, setShowFilters] = useState(false);
  const toggleBtn = () => {
    setShowFilters(!showFilters);
  };

  const callbackFilter = (selectedCat, isChecked) => {
    if (isChecked) {
      setFilteredCats([...filteredCats, selectedCat]);
    } else {
      setFilteredCats(filteredCats.filter((cat) => cat !== selectedCat));
    }
  };

  useEffect(() => {
    searchedTrips.map((trip) => {
      console.log(trip.days.length <= duration)
    })
  }, [duration])

  useEffect(() => {
    let newSearchedTrips
    let filteredTrips
    let filteredDuration


    if (searchedString !== "") {
      newSearchedTrips = trips.filter((trip) => {
        return trip.location
        .toLowerCase()
          .includes(searchedString.toLowerCase());
        });
      SetSearchedTrips(newSearchedTrips);
    } else newSearchedTrips = trips

    if (filteredCats.length > 0) {
      filteredTrips = newSearchedTrips.filter((trip) => {  
        const result = filteredCats.filter((match) => {
        if (trip.categories.includes(match)) return trip
        })
        if (result.length !== 0) return result
      })
      newSearchedTrips = filteredTrips
        SetSearchedTrips(filteredTrips)
    } else SetSearchedTrips(newSearchedTrips)

    if (duration > 0) {
      filteredDuration = newSearchedTrips.filter((trip) => {
        if (trip.days.length <= duration) return trip
      }) 
      SetSearchedTrips(filteredDuration)
    } else SetSearchedTrips(newSearchedTrips)

  }, [trips, searchedString, filteredCats, duration]);


  return (
    <div className="tripsbody">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Domine:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
      </style>
      <h3 className='pagetitle'>Search trips by destination, theme or duration</h3>

      <div className="searchbar">
        <Search
          searchedString={searchedString}
          callbackSearch={setSearchedString}
        />

        <button className="toggleBtn" onClick={toggleBtn}>
          <i className="fas fa-filter fa-2x"></i>
        </button>
      </div>

      {showFilters && (
        <div className="filters">
          <FilterCats
            filteredCats={filteredCats}
            callbackFilter={callbackFilter}
          />

          <FilterDays
            duration={duration}
            filterDays={setDuration}
             />
        </div>
      )}

      <p className="instruct">Click on a trip to see the full itinerary</p>

      <div className="tripscontainer">
        {searchedTrips.map((trip) => {
          return (
            <div className="trip" key={trip._id}>
              <Link to={trip._id}>
                <h3 className="title">{trip.title}</h3>
              <p>{trip.description}</p>
              <p>
                <i className="fas fa-map-marker-alt"></i> {trip.location}
              </p>
              <p>{trip.categories.join(", ")}</p>
              <p>Contributor: {trip.author.username}</p>
              <img src={trip.image[0]} alt="" />
              <p className="daynumber">
                <i className="far fa-calendar-alt"></i> DAYS: {trip.days.length}
              </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trips;
