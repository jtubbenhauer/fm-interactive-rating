import React from "react";
import "./Modal.css";
import starIcon from "../assets/icon-star.svg";
import { useState } from "react";
import ThankYou from "./ThankYou";

export default function Modal() {
  const buttonArray = [1, 2, 3, 4, 5];

  const [activeIndex, setActiveIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div
        className="container"
        style={submitted ? { display: "none" } : { display: "flex" }}
      >
        <div className="starCircle">
          <img src={starIcon} alt="star" />
        </div>
        <h1 className="header">How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="scoreButtons">
          {buttonArray.map((i, key) => {
            const className =
              activeIndex === i ? "numButtonClicked" : "numButton";
            return (
              <div
                className={className}
                key={key}
                onClick={() => setActiveIndex(i)}
              >
                {i}
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="submit"
          onClick={() => setSubmitted(true)}
        >
          SUBMIT
        </button>
      </div>
      {submitted && <ThankYou score={activeIndex} />}
    </>
  );
}
