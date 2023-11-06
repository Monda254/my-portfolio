import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import myImage from '/home/monda/monda-portfolio/src/images/FB_IMG_16509238773727159.jpg';

// Import the Navbar component
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Project from './components/Project';
import ProjectGallery from './components/ProjectGallery';


function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #3498db, #c0392b)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '0 0 20px 20px',
  };

  const mainStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    background: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
  };

  const imageStyle = {
    width: '30%',
    borderRadius: '20px',
  };

  return (
    <Router>
    <div style={containerStyle}>
      
      {/* Include the Navbar component and pass links as props */}
      <NavBar
        links={[
          { text: 'Home', target: 'Home' },
          { text: 'About-Me', target: 'About-Me' },
          { text: 'Contact-Me', target: 'Contact-Me' },
          { text: 'Resume', target: 'Resume' },
          { text: 'Project', target: 'Project' },
          { text: 'ProjectGallery', target: 'ProjectGallery' },
        ]} 
      />

      <header style={headerStyle}>
        <h1>My Journey: Tech-Driven Governance</h1>
      </header>

      <main style={mainStyle}>
        <div>
          <img src={myImage} alt="My Image" style={imageStyle} />
        </div>
        <Routes>
          <Route path="/About-Me" element={<AboutMe/>} />
          <Route path="/Contact-Me" element={<ContactMe/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Project" element={<Project/>} />
          <Route path="/ProjectGallery" element={<ProjectGallery/>} />
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
