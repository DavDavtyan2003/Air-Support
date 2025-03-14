import React from "react";

const Stats = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-4">
          <h5 className="fw-bold fs-3">Customers</h5>
          <p className="text-warning fw-bold">2300+</p>
        </div>
        <div className="col-md-4">
          <h5 className="fw-bold  fs-3">Finished Projects</h5>
          <p className="text-warning fw-bold">470+</p>
        </div>
        <div className="col-md-4">
          <h5 className="fw-bold  fs-3">Social Media</h5>
          <p className="text-warning fw-bold">8000+</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
