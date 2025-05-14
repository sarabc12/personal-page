import React from "react";
import "../projects.css"


export default function WebPages() {
  return(
    <div className="webpages">
      <h1>web pages</h1>
      <div className="webpages-cards">
        <a href="https://www.cinebox.space/" target="_blank" rel="noopener noreferrer">
          <img src="images/cinebox.jpeg" alt="cinebox"></img>
        </a>
        <a href="https://airbnbcopy-c389cbe529d1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="images/airbnbclone.png" alt="airbnbclone"></img>
        </a>
      </div>
    </div>
  )
}
