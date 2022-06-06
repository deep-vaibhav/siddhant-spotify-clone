import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">
        <p className="link">Home</p>
      </Link>

      <div className="searchContainer">
        <input placeholder="Search" />
      </div>
    </div>
  );
}

export default Navbar;
