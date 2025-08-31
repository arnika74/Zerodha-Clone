import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 p-4">
      <div className="row">
        <div className="col-5">
          <h1 className="mb-4 fs-3">Unbeatable pricing</h1>
          <p className="text-muted mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7 text-muted">
            <div className="pricing-box">
                <img
                src="media/images/pricing0.svg"
                alt="Pricing Image"
                style={{ width: "40%" }}
              />
              <p>Free account <br /> opening</p>
            </div>
            <div className="pricing-box">
                <img
                src="media/images/pricingEquity.svg"
                alt="Pricing Image"
                style={{ width: "40%" }}
              />
              <p>Free equity delivery <br /> and direct mutual funds</p>
            </div>
            <div className="pricing-box">
                <img
                src="media/images/other-trades.svg"
                alt="Pricing Image"
                style={{ width: "40%" }}
              />
              <p>Intraday and <br /> F&O</p>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Pricing;
