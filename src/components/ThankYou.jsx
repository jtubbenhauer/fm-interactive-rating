import React from "react";
import "./ThankYou.css";
import thankYouImage from "../assets/illustration-thank-you.svg";

export default function ThankYou(props) {
  return (
    <div className="thankYouContainer">
      <img src={thankYouImage} alt="thank you" className="thankYouImage" />
      <div className="score">You selected {props.score} out of 5</div>
      <div className="thankYouText">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
