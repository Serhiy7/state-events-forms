import React from "react";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {[option]}
        </button>
      ))}
    </>
  );
};

// export default FeedbackOptions;
