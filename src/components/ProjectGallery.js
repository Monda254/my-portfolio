import React from 'react';
import './ProjectGallery.css';

function ProjectGallery() {
  return (
    <div className="project-gallery">
      <h1>Project Gallery</h1>
      <div className="screenshot">
        <a href="/project1-screenshot.png" target="_blank">
          <img src="/home/monda/monda-portfolio/public/images/Screenshot from 2023-11-06 02-26-49.png" alt="Project 1 Screenshot" />
        </a>
      </div>
      <div className="screenshot">
        <a href="/project1-screenshot2.png" target="_blank">
          <img src="/home/monda/monda-portfolio/public/images/Screenshot from 2023-11-06 02-27-09.png" alt="Project 2 Screenshot" />
        </a>
      </div>
      {/* Add more screenshots for other projects */}
    </div>
  );
}

export default ProjectGallery;
