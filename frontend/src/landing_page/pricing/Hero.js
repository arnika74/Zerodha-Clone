import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h2 className="mt-5">Charges</h2>
        <p className="mt-2 mb-5 fs-5 text-muted">
          List of all charges and taxes
        </p>
      </div>
      <div className="row mt-5 text-center text-muted">
        <div className="col-4 mt-5 p-2">
          <img
            src="media/images/pricing0.svg"
            alt="Pricing Image"
            style={{ width: "70%" }}
          />
          <h3 className="mt-4">Free equity delivery</h3>
          <p className="mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 mt-5 p-2">
          <img
            src="media/images/other-trades.svg"
            alt="Pricing Image"
            style={{ width: "70%" }}
          />
          <h3 className="mt-4">Intraday and F&O trades</h3>
          <p className="mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 mt-5 p-2">
          <img
            src="media/images/pricingEquity.svg"
            alt="Pricing Image"
            style={{ width: "70%" }}
          />
          <h3 className="mt-4">Free direct MF</h3>
          <p className="mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
