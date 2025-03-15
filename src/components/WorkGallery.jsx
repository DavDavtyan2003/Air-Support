import React, { useState } from "react";

const images = [
    "/work1.png", "/work2.png", "/work3.png", "/work4.png",
    "/work5.png", "/work6.png", "/work7.png", "/work8.png"
];

const WorkGallery = () => {
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerRow = 4;

    // Function to move to the next set of images
    const nextImages = () => {
        if (startIndex + imagesPerRow < images.length) {
            setStartIndex(startIndex + imagesPerRow);
        }
    };

    // Function to move to the previous set of images
    const prevImages = () => {
        if (startIndex - imagesPerRow >= 0) {
            setStartIndex(startIndex - imagesPerRow);
        }
    };

    return (
        <div className="container py-5">
            {/* First Line: Title & Buttons */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="fw-bold text-dark">Work Gallery</h3>
                <div>
                    <button className="btn btn-outline-primary me-2" onClick={prevImages} disabled={startIndex === 0}>
                        &lt; Prev
                    </button>
                    <button className="btn btn-outline-primary" onClick={nextImages} disabled={startIndex + imagesPerRow >= images.length}>
                        Next &gt;
                    </button>
                </div>
            </div>

            {/* Second Line: Grid of Photos */}

            <div className="row gx-3 gy-4">
                {images.slice(startIndex, startIndex + imagesPerRow).map((img, index) => (
                    <div key={index} className="col-md-3">
                        <img
                            src={img}
                            alt={`Work ${index}`}
                            className="img-fluid shadow-sm work-gallery-img"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WorkGallery;
