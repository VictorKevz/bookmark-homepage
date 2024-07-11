import React, { useState } from "react";
import "./footer.css";
import logo from "../../assets/images/footer-logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo-links-container">
          <img src={logo} alt="bookmark logo" className="footer-logo" />
          <ul className="footer-links-container">
            <li className="footer-link">Features</li>
            <li className="footer-link">Pricing</li>
            <li className="footer-link">Contact</li>
          </ul>
        </div>

        <div className="footer-socials-container">
          <img src={facebook} alt="facebook logo" className="social-icon fb" />
          <img src={twitter} alt="twitter logo" className="social-icon twitter" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
