import React, { useState } from "react";
import "./cta.css";
import Feedback from "./Feedback";

function CTA() {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(true); //Assume form is valid
  const [showFeedback, setFeedback] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setEmail(e.target.value);
    setValid(true) // To clear the error immediately!
  };
  const closeFeedback = () => {
    setValid(true)
    setFeedback(false);
    setEmail("")
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    if (!email || !emailRegex.test(email)) {
      setValid(false);
    } else {
      setFeedback(true);
    }
    setEmail("");
  };

  return (
    <section className="cta-wrapper">
      <p className="cta-paragraph">35,000+ already joined</p>
      <h2 className="cta-title">Stay up-to-date with what we’re doing</h2>

      {showFeedback ? (
        <Feedback onClose={closeFeedback} />
      ) : (
        <form className="cta-form" onSubmit={handleSubmission}>
        <div className="field">
          <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
            />
            {!isValid && (
              <span className="error">Whoops! Make sure it's an email</span>
            )}
          </div>
          <div className="field">
          <button className="btn cta" type="submit">
            Contact Us
          </button>
          </div>
          
        </form>
      )}
    </section>
  );
}

export default CTA;
