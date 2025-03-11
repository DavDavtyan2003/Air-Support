import React, { useState } from "react";
import ScheduleModal from "./ScheduleModal"; // Import the modal component

const MainCarousel = () => {
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide position-relative">
        
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Carousel Content */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/carousel1.jpeg" className="d-block w-100" alt="HVAC Worker" />
            {/* Fixed Text Overlay */}
            <div className="carousel-caption d-flex flex-column align-items-start justify-content-center top-50 start-5 translate-middle-y ps-5">
              <h1 className="fw-bold">Your Comfort, Our Priority</h1>
              <p>Expert HVAC Services for Every Season.</p>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Schedule Online
              </button>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/carousel2.jpeg" className="d-block w-100" alt="HVAC Maintenance" />
            <div className="carousel-caption d-flex flex-column align-items-start justify-content-center top-50 start-5 translate-middle-y ps-5">
              <h1 className="fw-bold">Reliable & Efficient HVAC Solutions</h1>
              <p>We provide top-quality installation and repair services.</p>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Schedule Online
              </button>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/carousel3.jpeg" className="d-block w-100" alt="HVAC Installation" />
            <div className="carousel-caption d-flex flex-column align-items-start justify-content-center top-50 start-5 translate-middle-y ps-5">
              <h1 className="fw-bold">Professional HVAC Maintenance</h1>
              <p>Extend the life of your heating and cooling systems.</p>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Schedule Online
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Schedule Modal */}
      <ScheduleModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default MainCarousel;
