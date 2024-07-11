import React, { useState } from "react";
import lightModeLogo from "../../assets/images/logo-bookmark.svg";
import darkModeLogo from "../../assets/images/footer-logo.svg";
import iconClose from "../../assets/images/icon-close.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";

import "./navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navLinks = ["Features", "Pricing", "Contact", "Login"];

  function handleToggle() {
    setOpen(!isOpen);
  }

  return (
    <header className={`header-wrapper`}>
      <nav className="nav-container">
        <figure className="logo-container">
          <img
            src={isOpen ? darkModeLogo : lightModeLogo}
            alt="logo"
            className="nav-logo"
          />
        </figure>
        <ul className={`links-container ${isOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={index} className={`nav-link`}>
              {link}
            </li>
          ))}
        </ul>

        <figure className="toggle-container" onClick={handleToggle}>
          <img
            src={isOpen ? iconClose : iconHamburger}
            alt={`${isOpen ? "icon-close menu" : "icon-open menu"}`}
            className={`${isOpen ? "icon-close" : ""}`}
          />
        </figure>
      </nav>
      <div className={`mask ${isOpen ? "show" : ""}`}></div>
    </header>
  );
}

export default Navbar;
