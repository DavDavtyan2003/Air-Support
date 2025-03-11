import React, { useState } from "react";
import CalculatorModal from "./CalculatorModal"; // Import the calculator modal

const Navbar = () => {
    const [showCalculator, setShowCalculator] = useState(false); // State to manage modal visibility

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src="/logo2.svg" alt="Logo" width="238" height="45" />
                    </a>

                    {/* Navbar Toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About Us</a>
                            </li>

                            {/* Cooling Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Cooling
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">AC Repair</a></li>
                                    <li><a className="dropdown-item" href="#">AC Installation</a></li>
                                    <li><a className="dropdown-item" href="#">AC Maintenance</a></li>
                                    <li><a className="dropdown-item" href="#">AC Replacement</a></li>
                                    <li><a className="dropdown-item" href="#">Cleaning & Optimization</a></li>
                                </ul>
                            </li>

                            {/* Heating Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Heating
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Heating Repair</a></li>
                                    <li><a className="dropdown-item" href="#">Heating Installation</a></li>
                                    <li><a className="dropdown-item" href="#">Heating Maintenance</a></li>
                                    <li><a className="dropdown-item" href="#">Heating Replacement</a></li>
                                    <li><a className="dropdown-item" href="#">Cleaning & Optimization</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>

                        {/* Search and Calculator - Moved to Right */}
                        <div className="ms-auto d-flex gap-3">
                            <button className="btn btn-outline-secondary">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                            {/* Calculator Icon - Opens Modal */}
                            <button className="btn btn-outline-secondary" onClick={() => setShowCalculator(true)}>
                                <i className="fa-solid fa-calculator"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Render the Calculator Modal */}
            <CalculatorModal show={showCalculator} handleClose={() => setShowCalculator(false)} />
        </>
    );
};

export default Navbar;
