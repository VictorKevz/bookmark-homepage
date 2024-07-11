import React, { useState } from "react";
import "./faqs.css";
import faqsData from "./FaqsData";

function Faqs() {
  const [openID, setOpenID] = useState(null);

  const toggleFaq = (id) => {
    setOpenID((prevID) => (prevID === id ? null : id));
  };

  return (
    <section className="faqs-wrapper">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <p className="faqs-paragraph">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="faqs-question-container">
        {faqsData.map((faq) => {
          let isOpen = faq.id === openID;
          let itemClassName;
          if (faq.id === 1) {
            itemClassName = "first";
          }
          if (faq.id === 2) {
            itemClassName = "second";
          }
          if (faq.id === 3) {
            itemClassName = "third";
          }
          if (faq.id === 4) {
            itemClassName = "fourth";
          }
          return (
            <div key={faq.id} className={`faq ${itemClassName} `}>
              <div
                className={`faq-question-icon-container ${itemClassName} `}
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className={`faq-question ${itemClassName}`}>{faq.title}</h3>
                <img
                  src={isOpen ? faq.icon.up : faq.icon.down}
                  alt={`arrow icon`}
                  className={`arrow-icon ${isOpen ? "toggled" : ""} ${itemClassName}`}
                />
              </div>

              {isOpen && (
                <p className={`faq-description ${itemClassName}`}>
                  {faq.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <a className="btn faqs">More info</a>
    </section>
  );
}

export default Faqs;
