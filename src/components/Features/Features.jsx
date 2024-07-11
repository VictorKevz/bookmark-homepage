import React, { useState } from "react";
import "./features.css";
import featuresData from "./FeaturesData";

function Features() {
  const [currentId, setCurrentID] = useState(0);
  const { id,title, parag, imgSrc, CTA } = featuresData[currentId];

  function handleClicks(id) {
    setCurrentID(id);
  }
const checkClassName = () =>{
    let imgClassName;
    if(id === 0){imgClassName = "first"}
    if(id === 1){imgClassName = "second"}
    if(id === 2){imgClassName = "third"}
    return imgClassName;
}
  return (
    <section className="feature-wrapper">
        
      <h2 className="feature-title">Features</h2>
      <p className="feature-paragraph">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div className="feature-container">
        <ul className="tab-heading-container">
          {featuresData.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleClicks(tab.id)}
              className={`tab-item ${currentId === tab.id ? "active": ""} `}
            >
              {tab.name}
            </li>
          ))}
        </ul>

        <div className="tab-container">
          <div className="tab-img-container">
            <img src={imgSrc} alt="feature illustration image" className={`tab-img ${checkClassName()}`}/>
            <div className={`tab-img-bg desktop ${checkClassName()}`}></div>
          </div>
          <div className="tab-text-container">
            <h2 className="tab-title">{title}</h2>
            <p className="tab-parag">{parag}</p>
            <button className="btn tab-CTA">{CTA}</button>
          </div>
        </div>
      </div>
      <div className={`tab-img-bg mobile ${checkClassName()}`}></div>

    </section>
  );
}

export default Features;
