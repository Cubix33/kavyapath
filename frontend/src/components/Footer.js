import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';  // Import the CSS file for Footer styling
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';  // Social icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><Link to="/" className="footer-link">🏠 होम</Link></li>
          <li><Link to="/categories" className="footer-link">📚 श्रेणियाँ</Link></li>
          <li><Link to="/submit-poem" className="footer-link">📝 कविता सबमिट करें</Link></li>
          <li><Link to="/about" className="footer-link">ℹ️ हमारे बारे में</Link></li>
        </ul>
      </div>
      
      <div className="footer-about">
        <p><strong>📖 काव्यपथ</strong> - एक ऐसा मंच जहाँ आप अपनी कविताएँ साझा कर सकते हैं और दुनिया की सुंदर कविताओं का आनंद ले सकते हैं।</p>
      </div>

      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} className="social-icon" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} className="social-icon" /></a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} className="social-icon" /></a>
      </div>

      <div className="footer-credits">
        <p>&copy; 2025 काव्यपथ | सभी अधिकार सुरक्षित</p>
        <p>⚡ द्वारा निर्मित: काव्यपथ टीम</p>
      </div>
    </footer>
  );
}

export default Footer;

