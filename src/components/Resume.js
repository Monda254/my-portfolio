import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <header>
        <h1>Georgy Maina Gichobi</h1>
        <p>Frontend Developer</p>
      </header>
      {/* Other sections of your resume */}
      
      <section className="download-cv">
        <a href="/path-to-your-cv.pdf" download>Download CV</a>
        <Link to="/cv-viewer">View CV</Link> {/* Link to the CV viewer page */}
      </section>
    </div>
  );
}

export default Resume;
