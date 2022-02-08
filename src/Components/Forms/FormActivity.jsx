import React from 'react';

const FormActivity = (props) => {
  const {activityTitle, setActivityTitle, address, setAddress, activityDescription, setActivityDescription } = props;

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
        <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
  )
};

export default FormActivity;
