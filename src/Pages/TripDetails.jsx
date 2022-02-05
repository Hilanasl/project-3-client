import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const TripDetails = () => {
  const [trip, setTrip] = useState(null);
  const { id } = useParams();
  console.log("This is first front:", id);

  useEffect(() => {
    axios
      .get("http://localhost:8000/trip/" + id)
      .then(({ data }) => {
        console.log("This is front:", data);
        setTrip(data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      {trip ? (
        <>
          <p>{trip.title}</p>
          <div>{trip.days.number}</div>
          <div>
            {trip.days.activities.map((activity) => {
              return (
                <>
                  <p>{activity.title}</p>
                  <p>{activity.address}</p>
                  <p>{activity.description}</p>
                </>
              );
            })}
          </div>
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
