import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Navbar = () => {
  const { isLoggedIn, removeUser } = useAuth();
  return (
    <div className="navbar">
    <style>
    @import
      url('https://fonts.googleapis.com/css2?family=Domine:wght@500&display=swap');  
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
    </style>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/trips">Trips</NavLink>

      <h1 className='logo'>bon voyage</h1>


      {!isLoggedIn && (
        <>
          <NavLink to="/signin">Sign in</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </>
      )}
      {isLoggedIn && (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <p onClick={removeUser}>Log out</p>
        </>
      )}
    </div>
  );
};

export default Navbar;
