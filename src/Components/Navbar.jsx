import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Navbar = () => {
  const { isLoggedIn, removeUser } = useAuth();
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/trips">Trips</NavLink>

      <a href="/">
        <h1 className="logo">bon voyage</h1>
      </a>

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
