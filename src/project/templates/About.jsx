import React from "react";
import "../styling/Info.css";
import { Link } from "react-router-dom";
import H from "../assets/H.jpg";   // ✅ Import your HOD image

const About = () => {
  return (
    <div className="info-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="navbar-title">VORTEX 2K25</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/team">Our Team</Link></li>
        </ul>
      </nav>

      {/* University Presentation */}
      <div className="about-header">
        <h2> Mohan Babu University</h2>
        <p className="presents">presents</p>
        <h1 className="vortex-title">VORTEX 2K25</h1>
        <h3 className="tagline">Transforming Ideas into Reality</h3>
      </div>

      {/* Intro */}
      <div className="about-content">
        <p>
          We are thrilled to unveil the grand comeback of the IETE ECE Association’s
          signature symposium — VORTEX 2K25! This year, we’re raising the bar higher
          than ever with a bigger, bolder, and brighter celebration of technology,
          creativity, and collaboration...
        </p>
        <p>
          Get ready to witness the fusion of imagination and excellence. VORTEX 2K25
          isn’t just another symposium — it’s the result of relentless hard work,
          a showcase of groundbreaking ideas, and a true milestone in our journey.
        </p>
      </div>

      {/* Faculty Section */}
      <h2 className="faculty-title"> Our Faculty Organizing Committee</h2>
      <div className="faculty-section">
        <div className="faculty-card">
          <img src={H} alt="HOD" className="faculty-img-rect" />   {/* ✅ Updated */}
          <h3 className="faculty-name">Dr.N.Sudhakar Reddy</h3>
          <p className="faculty-role">Head of Department, ECE</p>
        </div>
      </div>
    </div>
  );
};

export default About;
