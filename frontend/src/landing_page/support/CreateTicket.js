import React from "react";

function CreateTicket() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left: Accordion */}
        <div className="col-lg-8">
          <div className="accordion" id="supportAccordion">
            {/* Account Opening */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i className="bi bi-plus-circle me-2"></i> Account Opening
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled ms-3">
                    <li>
                      <a href="#">Resident individual</a>
                    </li>
                    <li>
                      <a href="#">Minor</a>
                    </li>
                    <li>
                      <a href="#">Non Resident Indian (NRI)</a>
                    </li>
                    <li>
                      <a href="#">Company, Partnership, HUF and LLP</a>
                    </li>
                    <li>
                      <a href="#">Glossary</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Zerodha Account */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="bi bi-person-circle me-2"></i> Your Zerodha
                  Account
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled ms-3">
                    <li>
                      <a href="#">Profile settings</a>
                    </li>
                    <li>
                      <a href="#">Login issues</a>
                    </li>
                    <li>
                      <a href="#">Password reset</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* More accordion items like Kite, Funds, Console, Coin */}
            {/* Repeat structure with different icons and links */}
          </div>
        </div>

        {/* Right: Updates + Quick links */}
        <div className="col-lg-4">
          {/* Updates section */}
          <div className="p-3 mb-3 border-start border-4 border-warning bg-warning-subtle">
            <ul className=" mb-0">
              <li>
                <a href="#">
                  Settlement Holiday on account of Id-E-Milad on 5th and 8th
                  September 2025
                </a>
              </li>
              <br />
              <li>
                <a href="#">
                  Change in mutual fund settlement cycle due to settlement
                  holiday on 8th September 2025
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="card rounded-0">
            <div className="card-header fw-bold p-3">Quick links</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item p-3">
                <a href="#" style={{ textDecoration: "none" }}>1. Track account opening</a>
              </li>
              <li className="list-group-item p-3">
                <a href="#" style={{ textDecoration: "none" }}>2. Track segment activation</a>
              </li>
              <li className="list-group-item p-3">
                <a href="#" style={{ textDecoration: "none" }}>3. Intraday margins</a>
              </li>
              <li className="list-group-item p-3">
                <a href="#" style={{ textDecoration: "none" }}>4. Kite user manual</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
