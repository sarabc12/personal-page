import React, { useState } from "react";
import "../projects.css";

export default function WebPages() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const handleMouseEnter = (card) => setHoveredCard(card);
  const handleMouseLeave = () => setHoveredCard(null);

  return (
    <div className="webpages">
      <div className="webpages-cards">
        <a
          href="https://www.cinebox.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          onMouseEnter={() => handleMouseEnter("cinebox")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="images/cinebox.jpeg" alt="cinebox"></img>
          {hoveredCard === "cinebox" && (
            <div className="overlay">Cinebox is a movie discovery web app built with Ruby on Rails, PostgreSQL, and Bootstrap. It integrates with The Movie Database API to display dynamic movie content with search and favorite functionality. Users can explore trending films, view details, and curate a personalized favorites list.</div>
          )}
        </a>
        <a
          href="https://airbnbcopy-c389cbe529d1.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          onMouseEnter={() => handleMouseEnter("airbnb")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="images/airbnbclone.png" alt="airbnbclone"></img>
          {hoveredCard === "airbnb" && (
            <div className="overlay">Airbnb Clone – As my first project at Le Wagon Web Development Bootcamp, I built a full-stack Airbnb-inspired web application. This platform allows users to browse listings, book stays, and manage their own properties. Using Ruby on Rails, PostgreSQL, and simple front-end styling with HTML, CSS, and JavaScript.</div>
          )}
        </a>
      </div>
    </div>
  );
}
