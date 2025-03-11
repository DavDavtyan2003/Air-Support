import React from "react";

const Reviews = () => {
  return (
    <div className="container py-5">
      <h3 className="fw-bold text-dark mb-4">Customer Reviews</h3>

      <div className="row">
        {/* Review Card 1 */}
        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0">
            <h5 className="text-primary fw-bold">Anna George</h5>
            <p className="text-muted">24, July 2024</p>
            {/* Stars */}
            <p className="text-warning">★★★★★</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
        
        {/* Review Card 2 */}
        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0">
            <h5 className="text-primary fw-bold">Anna George</h5>
            <p className="text-muted">24, July 2024</p>
            {/* Stars */}
            <p className="text-warning">★★★★★</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>

        {/* Review Card 3 */}
        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0">
            <h5 className="text-primary fw-bold">Anna George</h5>
            <p className="text-muted">24, July 2024</p>
            {/* Stars */}
            <p className="text-warning">★★★★★</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>

        {/* Review Card 4 */}
        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0">
            <h5 className="text-primary fw-bold">Anna George</h5>
            <p className="text-muted">24, July 2024</p>
            {/* Stars */}
            <p className="text-warning">★★★★★</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </div>

      {/* Review Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary">Review Us Here</button>
      </div>

      {/* NAVIGATION (Placeholder) */}
      {/* NAVIGATION */}
    </div>
  );
};

export default Reviews;
