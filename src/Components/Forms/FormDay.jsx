import React from "react";
import FormActivity from "./FormActivity";

const FormDay = (props) => {
  console.log("form daay", props.setAddress);
  return (
    <div>
      <h2>Day n° {props.day}</h2>
      <FormActivity props={props} />
    </div>
  );
};

export default FormDay;

// A new trip = > 1 or several days
// Each day => store 1 or several activities
// Trip has days
// Days has activities
