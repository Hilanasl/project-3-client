import React from "react";
import FormSignUp from "../Components/Forms/FormSignUp";
import apiHandler from "../api/apiHandler.js";
import "./../AuthForms.css"


const SignUp = () => {
  return (
    <div className='signupbody'>
        <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Domine:wght@500&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');{" "}
      </style>
      <FormSignUp />
    </div>
  );
};

export default SignUp;
