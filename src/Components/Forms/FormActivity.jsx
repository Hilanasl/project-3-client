import React from "react";
import SearchLocationInput from "../SearchLocationInput";

const FormActivity = ({
  // callback,
  activity,
  setDays,
  activityNumber,
  dayNumber,
}) => {
  const activityChange = (e) => {
    console.log(e.target, "<<< ici");
    setDays((prevState) => {
      const newState = [...prevState];
      //    Global state [Day X]  [Activity X]  {title....}
      newState[dayNumber][activityNumber] = {
        ...newState[dayNumber][activityNumber],
        [e.target.name]: e.target.coords
          ? { text: e.target.value, coords: e.target.coords }
          : e.target.value,
      };

      return newState;
    });
  };
  return (
    <div className='crudform'>
      <div>
        <label htmlFor={"activityTitle-" + activityNumber}>Title</label>
        <input
          type="text"
          name="title" // should I let it ? bc that's not what I was submitting to back. Same as TripForm
          id={`activityTitle-${activityNumber}`}
          className="crud-long-input"
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
          className="crud-long-input"
          value={activity.description}
          onChange={activityChange}
        />
      </div>
    </div>
  );
};

export default FormActivity;
