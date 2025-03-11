import React from "react";

const Touch = () => {
  return (
    <div className="container-fluid joinUs-bg py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section - Text & Icon */}
          <div className="col-md-6 d-flex align-items-center">
            {/* ICON Placeholder */}
            <div className="me-3">
            <i class="fa-solid fa-envelope fa-3x"></i>

            </div>
            <div>
              <h4 className="fw-bold text-dark">Stay In Touch</h4>
              <p className="text-dark">
                Keep up with the latest HVAC tips and special offers—subscribe to our
                monthly email newsletter.
              </p>
            </div>
          </div>

          {/* Right Section - Email Input & Button */}
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
