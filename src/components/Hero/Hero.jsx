import React from "react";
import heroImg from "../../assets/images/illustration-hero.svg";
import "./hero.css";
import "../../App.css";
function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-img-container">
          <figure >
            <img src={heroImg} alt="hero image" className="hero-img" />
          </figure>
          <div className="img-bg desktop"></div>
        </div>
        <article className="hero-text-container">
          <h1 className={`hero-title `}>A Simple Bookmark Manager</h1>
          <p className="hero-paragraph">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero-btn-container">
            <button className="btn hero-chrome">Get it on Chrome</button>
            <button className="btn hero-firefox">Get it on Firefox</button>
          </div>
        </article>
      </div>
      <div className="img-bg mobile"></div>

    </div>
  );
}
export default Hero;
