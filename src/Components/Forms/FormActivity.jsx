import React from "react";
import SearchLocationInput from "../SearchLocationInput";

const FormActivity = (props) => {
  const {
    activityTitle,
    setActivityTitle,
    address,
    setAddress,
    activityDescription,
    setActivityDescription,
  } = props;
  console.log("form act", props.setAddress);
  // return <div>todo !</div>
  return (
    <>
      <div>
        <label htmlFor="activityTitle">Title</label>
        <input
          type="text"
          id="activityTitle"
          name="activityTitle"
          value={activityTitle}
          onChange={(e) => setActivityTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <SearchLocationInput
          type="text"
          id="address"
          name="address"
          setAddress={setAddress}
        />
      </div>
      <div>
        <label htmlFor="activityDescription">Description</label>
        <input
          type="text"
          id="activityDescription"
          name="activityDescription"
          value={activityDescription}
          onChange={(e) => setActivityDescription(e.target.value)}
        />
      </div>
    </>
  );
};

export default FormActivity;
