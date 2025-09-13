// Images on the right side
import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4" style={{marginTop: "180px"}}>
          <h1 className="fs-3">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
