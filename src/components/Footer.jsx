import React from "react";

const Footer = () => {
  return (
    <footer className="py-5  bg-light">
      <div className="container">
        <div className="row">
          {/* 1st Column - Logo & Social Media */}
          <div className="col-md-3 text-md-start text-center mb-4 mb-md-0">
            <img src="/logo2.svg" alt="Logo" width="200" height="50" />

            <div className="d-flex justify-content-md-start justify-content-center ms-2 gap-3 mt-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram fs-4"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-square-facebook fs-4"></i>
              </a>
            </div>
          </div>

          {/* 2nd Column - Contact Info */}
          <div className="col-md-3 text-md-start text-center mt-3">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <p className="mb-2">
              <i className="fa-solid fa-location-dot me-2"></i> Glendale, 1027 Ruberta Ave
            </p>
            <p className="mb-2">
              <i className="fa-solid fa-phone me-2"></i> +(1) 818 858 7103
            </p>
            <p className="mb-2">
              <i className="fa-solid fa-globe me-2"></i>
              <a href="https://airsupportac.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                airsupportac.com
              </a>
            </p>
            <p className="mb-2">
              <i className="fa-solid fa-certificate me-2"></i> License Number
            </p>
          </div>

          {/* 3rd Column - Quick Links */}
          <div className="col-md-3 text-md-start text-center mt-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/faqs" className="text-decoration-none">FAQ's</a>
              </li>
              <li>
                <a href="/reviews" className="text-decoration-none">Reviews</a>
              </li>
            </ul>
          </div>

          {/* 4th Column - Open Hours */}
          <div className="col-md-3 text-md-start text-center mt-3">
            <h5 className="fw-bold">Open Hours</h5>
            <p>24/7</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
