import React from "react";
import "../navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <div className="Navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="root">
          <Link to="/">
            <img src="imagelogo.png" alt="s-logo" />
          </Link>
        </a>
        <div className="buttons-container">
          <button className="btn">About Me</button>
          <button className="btn">Project</button>
          <button className="btn">Contact me</button>
        </div>

      </div>
    </div>
  );
}
