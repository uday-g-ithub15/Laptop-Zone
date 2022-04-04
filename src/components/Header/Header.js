import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const active = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      backgroundColor: isActive ? "#0fe8b7" : "#18100bcf",
      color: isActive ? "#30282a" : "aqua",
    };
  };
  return (
    <nav>
      <NavLink style={active} to={"/"}>
        Home
      </NavLink>
      <NavLink style={active} to={"/reviews"}>
        Reviews
      </NavLink>
      <NavLink style={active} to={"/dashboard"}>
        Dashboard
      </NavLink>
      <NavLink style={active} to={"/blogs"}>
        Blogs
      </NavLink>
      <NavLink style={active} to={"/about"}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
