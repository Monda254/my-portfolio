import React from 'react';
import './NavBar.css'; // Updated CSS class names

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="Home">Home</a>
        </li>
        <li className="nav-item">
          <a href="Contact-Me">Contact Me</a>
        </li>
        <li className="nav-item">
          <a href="About-Me">About Me</a>
        </li>
        <li className="nav-item">
          <a href="Resume">Resume</a>
        </li>
        <li className="nav-item">
          <a href="Project">Project</a>
        </li>
        <li className="nav-item">
          <a href="ProjectGallery">Project Gallery</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
