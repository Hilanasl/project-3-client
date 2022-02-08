import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import apiHandler from '../api/apiHandler.js';
import Search from "./../Components/Search";
import FilterCats from "../Components/FilterCats";
import FilterDays from "../Components/FilterDays";
import './../AllTrips.css'

const Trips = ({ trips }) => {
  const [searchedString, setSearchedString] = useState("");
  const [searchedTrips, SetSearchedTrips] = useState(trips);
  const [filteredCats, setFilteredCats] = useState([]);
  const [matchedCats, setMatchedCats] = useState([]);
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

  //IF FILTERED CATS = TRIPS.MAP(TRIP CATEGORIES) then new searched trips.push trip

  // useEffect(() => {

  trips.map((trip) => {
    {
      trip.categories.map((cat) => {
        console.log(typeof trip.categories);
        console.log(typeof trip.filteredCats);

        // if (cat === filteredCats[0] || filteredCats[1] || filteredCats[2] || filteredCats[3] || filteredCats[4] || filteredCats[5] || filteredCats[6] || filteredCats[7] || filteredCats[8] || filteredCats[9] || filteredCats[10] || filteredCats[11])
        // {console.log('match', {cat}, {trip})}
        // newArray.push({trip})}
        // const newArray = [...newArray, {trip}]}
        // {
        //   setMatchedCats([...matchedCats, cat])
        // }
        //console.log('cat is', matchedCats);
      });
    }
  });
  // }, [filteredCats])

  // if (cat = (categories[0] || categories[1] ||categories[2])) {
  //newCatArray.push(cat)
  //   })
  // })

  // if (searchedString !== '') {
  //   const newSearchedTrips = trips.filter((trip) => {
  //     return trip.location.toLowerCase().includes(searchedString.toLowerCase());
  //   })

  //     SetSearchedTrips(newSearchedTrips)

  //   } else SetSearchedTrips(trips)
  // }, [trips, filteredCats])

  useEffect(() => {
    if (searchedString !== "") {
      const newSearchedTrips = trips.filter((trip) => {
        return trip.location
          .toLowerCase()
          .includes(searchedString.toLowerCase());
      });
      SetSearchedTrips(newSearchedTrips);
    } else SetSearchedTrips(trips);
  }, [trips, searchedString]);

  return (
    <div className="tripsbody">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Domine:wght@500&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');{" "}
      </style>
      <h1>All Trips</h1>

      <div className="searchbar">
        <Search
          searchedString={searchedString}
          callbackSearch={setSearchedString}
        />

        <button className="toggleBtn" onClick={toggleBtn}>
          <i class="fas fa-filter fa-2x"></i>
        </button>
      </div>

      {showFilters && (
        <div class="filters">
          <FilterCats
            filteredCats={filteredCats}
            callbackFilter={callbackFilter}
          />

          <FilterDays />
        </div>
      )}

      <p className="instruct">Click on a trip to see the full itinerary</p>

      <div className="tripscontainer">
        {searchedTrips.map((trip) => {
          return (
            <div className="trip" key={trip._id}>
              <Link to={trip._id}>
                <p className="title">{trip.title}</p>
              </Link>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trips;
