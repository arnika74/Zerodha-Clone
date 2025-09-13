import React from 'react';

function Hero() {
    return ( 
        <div className="bg-light py-5">
      <div className="container">
        <div className="d-flex justify-content-between mb-4">
          {/* Title */}
          <h2 className="fw-bold">Support Portal</h2>

          {/* My tickets button */}
          <button className="btn btn-primary">My tickets</button>
        </div>

        {/* Search bar */}
        <div className="input-group">
          <span className="input-group-text bg-white ">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
     );
}

export default Hero;