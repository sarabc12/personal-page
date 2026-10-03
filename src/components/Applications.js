import React, { useState } from "react";
import "../projects.css"

export default function Application() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const handleMouseEnter = (card) => setHoveredCard(card);
    const handleMouseLeave = () => setHoveredCard(null);
  return(
    <div className="application">
      <div className="webpages-cards">
        <a
        href="https://www.betterreads.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="card"
        onMouseEnter={() => handleMouseEnter("betterreads")}
        onMouseLeave={handleMouseLeave}
        >
          <img src="images/betterreads.png" alt="betterreads"></img>
          {hoveredCard === "betterreads" && (
            <div className="overlay">BetterReads is a book tracking and review application, inspired by GoodReads but with improved features. Built using Ruby on Rails, SCSS, and JavaScript, it allows users to create lists, write reviews, and discover new books dynamically.</div>
          )}
        </a>
      </div>
    </div>
  )
}
