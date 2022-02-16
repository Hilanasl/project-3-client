import React, { useState } from "react";
import FormActivity from "./FormActivity";

const FormDay = ({ dayNumber, activities, setDays, update }) => {
  console.log("It's a brand new day !");

  // ADD AN ACTIVITY
  const addActivity = (event) => {
    event.preventDefault();
    setDays((prevState) => {
      const newState = [...prevState];
      update
        ? (newState[dayNumber].activities = [
            ...newState[dayNumber].activities,
            { title: "", address: "", description: "" },
          ])
        : (newState[dayNumber] = [
            ...newState[dayNumber],
            { title: "", address: "", description: "" },
          ]);
      return newState;
    });
  };
  console.log("Activities :", activities);

  if (!activities) return null;
  return (
    <div className="crudform">
      <div className="activitycount">
        <h2>Day n° {dayNumber + 1}</h2>
        <h3>
          <i class="fa-solid fa-person-snowboarding"></i> ACTIVITIES:{" "}
          {activities.length}{" "}
        </h3>
      </div>

      {activities.map((activity, i) => (
        <FormActivity
          activity={activity}
          dayNumber={dayNumber}
          activityNumber={i}
          setDays={setDays}
          key={i}
          update={update}
        />
      ))}
      <button onClick={addActivity} className="activitybutton">
        ADD ACTIVITY <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default FormDay;
