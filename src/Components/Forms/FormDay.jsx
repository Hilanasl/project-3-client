import React, { useState } from "react";
import FormActivity from "./FormActivity";

const FormDay = ({ dayNumber, activities, setDays }) => {
  console.log("It's a brand new day !");

  // ADD AN ACTIVITY
  const addActivity = (event) => {
    event.preventDefault();
    setDays((prevState) => {
      const newState = [...prevState];
      newState[dayNumber] = [
        ...newState[dayNumber],
        { title: "", address: "", description: "" },
      ];
      return newState;
    });
  };
  console.log("Activities :", activities);
  // console.log("Title :", title);
  // console.log("Address :", address);
  // console.log("Description :", description);

  if (!activities) return null;
  return (
    <div className='crudform'>

      <div className='activitycount'>
      <h2>Day n° {dayNumber + 1}</h2>
      <h3><i class="fa-solid fa-person-snowboarding"></i> ACTIVITIES: {activities.length} </h3>
      </div>

      {activities.map((activity, i) => (
        <FormActivity
          // callback={callback}
          activity={activity}
          dayNumber={dayNumber}
          activityNumber={i}
          setDays={setDays}
          key={i}
        />
      ))}
      <button onClick={addActivity} className='activitybutton'>ADD ACTIVITY <i class="fa-solid fa-plus"></i></button>

    </div>
  );
};

export default FormDay;

// A new trip = > 1 or several days
// Each day => store 1 or several activities
// Trip has days
// Days has activities
