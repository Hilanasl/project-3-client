import React from "react";
import SearchLocationInput from "../SearchLocationInput";

const FormActivity = ({
  activity,
  setDays,
  activityNumber,
  dayNumber,
  update,
}) => {
  const activityChange = (e) => {
    console.log(e.target, "<<< ici");
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
    <div className="crudform">
      <div>
        <label htmlFor={"activityTitle-" + activityNumber}>Title</label>
        <input
          type="text"
          name="title"
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
