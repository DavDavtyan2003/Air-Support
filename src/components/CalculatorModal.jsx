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
            <label>Home Square Footage (SQFT)</label>
            <div className="input-group">
              <button>-</button>
              <input type="number" value="5" readOnly />
              <button>+</button>
            </div>

            <label>Home Ceiling Height (FT)</label>
            <div className="input-group">
              <button>-</button>
              <input type="number" value="6" readOnly />
              <button>+</button>
            </div>

            <label>Air Changes Per Hour (ACH)</label>
            <div className="input-group">
              <button>-</button>
              <input type="number" value="8" readOnly />
              <button>+</button>
            </div>
          </div>

          {/* Right Section: Results */}
          <div className="calculator-results">
            <h5>Results</h5>
            <p>Room area / 150 SQFT</p>
            <p>Required CFM / 200CFM</p>
            <p>Required Ton / 0.37</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;
