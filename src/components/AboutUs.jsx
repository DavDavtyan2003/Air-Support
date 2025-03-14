import React from "react";

const AboutUs = () => {
  return (
    <div className="container text-center my-5">
      <h4 className="fw-bold text-warning">Short About Us</h4>
      <div className="video-container">
        <video width="100%" controls>
          <source src="/about-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutUs;
