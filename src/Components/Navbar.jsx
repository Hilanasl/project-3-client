import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";


const Navbar = () => {
  const { isLoggedIn, removeUser } = useAuth();
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      {!isLoggedIn && (
        <>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
      {isLoggedIn && (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <p onClick={removeUser}>Logout</p>
        </>
      )}
    </div>
  );
};

export default Navbar;
