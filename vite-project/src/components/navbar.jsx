import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="container">
        {/* Logo */}
        <div className="logo">MyApp</div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Call-to-Action Button */}
        <div className="cta-button">
          <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
