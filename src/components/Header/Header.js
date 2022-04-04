import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const active = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      backgroundColor: isActive ? "#0fe8b7" : "#18100bcf",
      color: isActive ? "#30282a" : "aqua",
    };
  };
  return (
    <nav>
      <div className="menu-btn">
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <div
        className={`nav-item ${open ? `nav-item-visible` : `nav-item-none`}`}
      >
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
      </div>
    </nav>
  );
};

export default Header;
