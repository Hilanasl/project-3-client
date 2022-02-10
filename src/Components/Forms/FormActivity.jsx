import React from "react";
import SearchLocationInput from "../SearchLocationInput";

const FormActivity = ({
  // callback,
  activity,
  setDays,
  activityNumber,
  dayNumber,
  update,
}) => {
  const activityChange = (e) => {
    setDays((prevState) => {
      const newState = [...prevState];
      //    Global state [Day X]  [Activity X]  {title....}
      update
        ? (newState[dayNumber].activities[activityNumber] = {
            ...newState[dayNumber].activities[activityNumber],
            [e.target.name]: e.target.value,
          })
        : (newState[dayNumber][activityNumber] = {
            ...newState[dayNumber][activityNumber],
            [e.target.name]: e.target.value,
          });
      return newState;
    });
  };
  return (
    <>
      <div>
        <label htmlFor={"activityTitle-" + activityNumber}>Title</label>
        <input
          type="text"
          name="title" // should I let it ? bc that's not what I was submitting to back. Same as TripForm
          id={`activityTitle-${activityNumber}`}
          value={activity.title}
          onChange={activityChange}
        />
      </div>
      <div>
        <SearchLocationInput
          address={activity.address}
          activityNumber={activityNumber}
          activityChange={activityChange}
        />
      </div>
      <div>
        <label htmlFor={"activityDescription-" + activityNumber}>
          Description
        </label>
        <input
          type="text"
          name="description"
          value={activity.description}
          onChange={activityChange}
        />
      </div>
    </>
  );
};

export default FormActivity;
