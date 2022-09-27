import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="loading-box">
      <svg id="svg-spinner" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="4" r="4" fill="#000" />
        <circle cx="12.19" cy="7.86" r="3.7" fill="#18191a" />
        <circle cx="5.02" cy="17.68" r="3.4" fill="#242526" />
        <circle cx="5.02" cy="30.32" r="3.1" fill="#3a3b3c" />
        <circle cx="12.19" cy="40.14" r="2.8" fill="#2c2b2b" />
        <circle cx="24" cy="44" r="2.5" fill="#2c2b2b" />
        <circle cx="35.81" cy="40.14" r="2.2" fill="#3b3b3b" />
        <circle cx="42.98" cy="30.32" r="1.9" fill="#414141" />
        <circle cx="42.98" cy="17.68" r="1.6" fill="#414141" />
        <circle cx="35.81" cy="7.86" r="1.3" fill="#3b3b3b" />
      </svg>
      <p id="svg-para">Loading ...</p>
    </div>
  );
};

export default LoadingSpinner;
