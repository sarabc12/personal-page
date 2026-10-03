import React from "react";
import "../footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return(
    <div className="footer">
      <p className="footer-text">
        © {currentYear} Sara Burchi Colonna, All rights reserved.
      </p>
    </div>
  )
}
