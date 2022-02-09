import React from "react";

const FormActivity = ({
  // callback,
  activity,
  setDays,
  activityNumber,
  dayNumber,
}) => {
  const activityChange = (e) => {
    setDays((prevState) => {
      const newState = [...prevState];
      //    Global state [Day X]  [Activity X]  {title....}
      newState[dayNumber][activityNumber] = {
        ...newState[dayNumber][activityNumber],
        [e.target.name]: e.target.value,
      };
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
        <label htmlFor={"address-" + activityNumber}>Address</label>
        <input
          type="text"
          name="address"
          value={activity.address}
          onChange={activityChange}
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
