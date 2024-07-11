import React, { useState } from "react";
import "./feedback.css";
import verified from "../../assets/images/verified.svg";

function Feedback({onClose}) {
  return (
    <div className="feedback-wrapper">
        
      <img src={verified} alt="check mark icon" />
      <h2 className="feedback-title">Thank You!</h2>
      <p className="feedback-paragraph">Your email is registered!</p>

      <button className="btn feedback" onClick={onClose}>
        Continue
      </button>
    </div>
  );
}

export default Feedback;
