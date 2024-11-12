import React, { useEffect, useState } from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <span className="text-container">
        <p>@2024 Created by Elise</p>
        <span className="social-links">
          <a href="https://github.com/ElisefRaz17">
            <img src="../assets/github.png" height={25} width={25} />
          </a>
          <a href="https://www.linkedin.com/in/elise-frazier-89b356180/">
            <img src="../assets/linkedin-white.png" height={25} width={25} />
          </a>
          <a href="https://elisefraz17.github.io/personal-portfolio/">
            <img src="../assets/website-logo.png" height={25} width={25} />
          </a>
        </span>
      </span>
    </div>
  );
}
export default Footer;
