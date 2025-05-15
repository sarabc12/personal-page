import React from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink} from "react-scroll";

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
          <ScrollLink to="about" smooth={true} duration={1000} offset={-70} className="btn">About Me</ScrollLink>
          <ScrollLink to="project" smooth={true} duration={1000} className="btn">Project</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={1000} className="btn">Contact me</ScrollLink>
        </div>

      </div>
    </div>
  );
}
