import React from "react";
import "../navbar.css";

export default function Navbar() {
  return(
    <div className="Navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="root">
          <img src="imagelogo.jpg" alt="s-logo" />
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
