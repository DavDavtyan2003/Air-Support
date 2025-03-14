import React from "react";

const CalculatorModal = ({ show, handleClose }) => {
  if (!show) return null; // Prevent rendering if the modal is not active

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-button" onClick={handleClose}>✖</button>

        <h3 className="fw-bold text-center">HVAC Load Calculator</h3>

        <div className="calculator-container">
          {/* Left Section: Input Fields */}
          <div className="calculator-inputs">
            <div className="input-wrapper">
              <label>Home Square Footage (SQFT)</label>
              <div className="input-group">
                <button className="calc-btn">-</button>
                <input type="number" value="5" readOnly />
                <button className="calc-btn">+</button>
              </div>
            </div>

            <div className="input-wrapper">
              <label>Home Ceiling Height (FT)</label>
              <div className="input-group">
                <button className="calc-btn">-</button>
                <input type="number" value="6" readOnly />
                <button className="calc-btn">+</button>
              </div>
            </div>

            <div className="input-wrapper">
              <label>Air Changes Per Hour (ACH)</label>
              <div className="input-group">
                <button className="calc-btn">-</button>
                <input type="number" value="8" readOnly />
                <button className="calc-btn">+</button>
              </div>
            </div>
          </div>

          {/* Right Section: Results */}
          <div className="calculator-results">
            <h5>Results</h5>
            <p>Room area / <strong>150 SQFT</strong></p>
            <p>Required CFM / <strong>200 CFM</strong></p>
            <p>Required Ton / <strong>0.37</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;
