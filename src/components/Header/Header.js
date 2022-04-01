import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/orderreview">Order Review</NavLink>
        <NavLink to="/about">About</NavLink>

        {/* another way to set active link */}

        {/* <NavLink
          style={({ isActive }) => {
            return {
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={({isActive})=> {
               return {
                    color: isActive ? 'yellow' : ''

               }
          }}
          to="/orderreview"
        >
          Order Review
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Header;
