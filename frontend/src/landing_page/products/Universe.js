import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <p className="text-center fs-5 mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <div className="row text-center" style={{ marginTop: "100px" }}>
        <h1 className="fs-3 mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          ></img>
          <p className="fw-semibold text-muted text-center mt-3" style={{fontSize:"12px"}}>
            Our asset management venture <br />that is creating simple and transparent
            index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "60%" }}
          ></img>
          <p className="text-muted text-center mt-4 fw-semibold" style={{fontSize:"12px"}}>
            Options trading platform that lets you <br /> create strategies, analyze
            positions, and examine <br /> data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/tijori.svg" style={{ width: "40%" }}></img>
          <p className="text-muted text-center mt-3 fw-semibold" style={{fontSize:"12px"}}>
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 mt-5 ">
          <img src="media/images/streakLogo.png" style={{ width: "50%" }}></img>
          <p className="text-muted text-center mt-3 fw-semibold" style={{fontSize:"12px"}}>
            Systematic trading platform <br /> that allows you to create and backtest
            <br /> strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-5 ">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "60%" }}
          ></img>
          <p className="text-muted text-center mt-4 fw-semibold" style={{fontSize:"12px"}}>
            Thematic investing platform <br /> that helps you invest in diversified
            <br /> baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 ">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }}></img>
          <p className="text-muted text-center mt-4 fw-semibold" style={{fontSize:"12px"}}>
            Personalized advice on life <br /> and health insurance. No spam <br /> and no
            mis-selling.
          </p>
        </div>
        
        <button
          className="btn btn-primary p-2 fs-5 mt-5 mb-4 fw-semibold"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      
      </div>
    </div>
  );
}

export default Universe;
