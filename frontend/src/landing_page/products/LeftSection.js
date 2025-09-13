// Images on the left side
import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL}></img>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-4" style={{marginTop: "120px"}}>
          <h1 className="fs-3">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <div>
            <a href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn more <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-4">
            <a href={googleplay}>
              <img src="media/images/googlePlaybadge.svg"></img>
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media/images/appStoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
