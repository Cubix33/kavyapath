import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';  // Import the CSS file for Footer styling
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';  // For social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><Link to="/" className="footer-link">Home</Link></li>
          <li><Link to="/categories" className="footer-link">Categories</Link></li>
          <li><Link to="/submit-poem" className="footer-link">Submit Poem</Link></li>
          <li><Link to="/about" className="footer-link">About Us</Link></li>
        </ul>
      </div>
      <div className="footer-about">
        <p><strong>Kavyapath</strong> - A platform for sharing and exploring beautiful poetry from around the world.</p>
      </div>
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} className="social-icon" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} className="social-icon" /></a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} className="social-icon" /></a>
      </div>
      <div className="footer-credits">
        <p>&copy; 2025 Kavyapath | All Rights Reserved</p>
        <p>Built by Kavyapath Team</p>
      </div>
    </footer>
  );
}

export default Footer;

