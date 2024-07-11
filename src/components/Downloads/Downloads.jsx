import React, { useState } from "react";
import "./downloads.css";
import downloadsData from "./DownloadsData";

function Downloads() {
  return (
    <section className="downloads-wrapper">
      <h2 className="downloads-title">Download the extension</h2>
      <p className="downloads-paragraph">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <div className="downloads-card-container">
        {downloadsData.map((card) => {
          let itemClassName;
          if (card.id === 0) {
            itemClassName = "first";
          }
          if (card.id === 1) {
            itemClassName = "second";
          }
          if (card.id === 2) {
            itemClassName = "third";
          }
          return (
            <div key={card.id} className={`card ${itemClassName} `}>
              <img
                src={card.imgSrc}
                alt={`${card.altText}`}
                className={`downloads-logo ${itemClassName}`}
              />
              <h4 className={`card-title ${itemClassName}`}>{card.title}</h4>
              <p className={`card-version ${itemClassName}`}>{card.version}</p>
              <img
                src={card.dots}
                alt={`dots`}
                className={`dots ${itemClassName}`}
              />
              <button className={`btn downloads ${itemClassName}`}>
                {card.CTA}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Downloads;
