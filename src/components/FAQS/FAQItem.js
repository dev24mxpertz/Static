import React, { useState } from "react";
import "./FAQS.css";
const FAQItem = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAnswer = () => {
    console.log("----toggler" , isVisible)
    setIsVisible(!isVisible);
  };

  return (
    <div className="FAQs_Question_box_container">
      <div className="Question_box" onClick={toggleAnswer}>
        <h4 className="Question_box_h4">{question}</h4>
        <span className="Question_box_PLUS">
          <i
            className={`bi ${
              isVisible ? "bi-chevron-bar-up" : "bi-chevron-bar-down"
            }`}
          ></i>
        </span>
      </div>
      {isVisible && (   
        <div className="Answer_box">
          <p className="Answer_box_p">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
