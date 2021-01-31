import React from "react";
import "../assests/styles/navbar.css";

function Navbar() {
  function sayHello() {
    let navLinks = document.querySelector("#nav-links");
    console.log("click", navLinks);
    navLinks.classList.toggle("open");
  }

  return (
    <nav>
      <div className="hamburguer" onClick={sayHello}>
        <button className="button">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
      <ul className="nav-links" id="nav-links">
        <li>
          <a href="https://www.linkedin.com/in/vegaluisj/">About</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vegaluisj/">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vegaluisj/">Project</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
