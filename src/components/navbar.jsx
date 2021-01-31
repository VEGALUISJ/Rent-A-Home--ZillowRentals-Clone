import React from "react";
import "../assests/styles/navbar.css";

function Navbar() {
  function sayHello() {
    let hamburguer = document.querySelector(".hamburguer");
    let navLinks = document.querySelector(".nav-links");

    hamburguer.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  return (
    <nav>
      <div className="hamburguer">
        <button className="button" onClick={sayHello}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
      <ul className="nav-links">
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
