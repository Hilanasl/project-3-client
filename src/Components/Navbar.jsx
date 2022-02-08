import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};

export default Navbar;
