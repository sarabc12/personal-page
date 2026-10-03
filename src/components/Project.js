import React from "react";
import "../project.css";
import { Link } from "react-router-dom";

export default function Project() {
  return(
    <div className="projects">
      <h1>My Projects</h1>
      <Link to="/webpages">
        <button class="btn1">Web Pages</button>
      </Link>
      <Link to="/application">
        <button class="btn1">Application</button>
      </Link>
    </div>
  )
}
