import React from "react";
import FormSignIn from "../Components/Forms/FormSignIn";
import "./../AuthForms.css"

const SignIn = () => {
  return (
    <div className='signinbody'>
        <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Domine:wght@500&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');{" "}
      </style>
      <FormSignIn />
    </div>
  );
};

export default SignIn;
