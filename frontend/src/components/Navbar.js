import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";  // Icons for dark mode
import '../styles/Navbar.css';  // Corrected CSS path

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const isLoggedIn = false;  // Change this according to login status

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="logo">
        <h1>📖 काव्यपथ</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">🏠 होम</Link>
        </li>
        <li>
          <Link to="/categories" className="nav-link">📚 श्रेणियाँ</Link>
        </li>
	  <li>
	  <Link to= "/submit-poem" className="nav-link"> 📜कविता सबमिट करें </Link>
	  </li>
        <li>
          {isLoggedIn ? (
            <>
              <Link to="/submit-poems" className="nav-link">📝 कविता सबमिट करें</Link>
              <Link to="/profile" className="nav-link">👤 प्रोफ़ाइल</Link>
            </>
          ) : (
            <Link to="/login" className="nav-link">🔑 लॉगिन / साइनअप</Link>
          )}
        </li>
        <li>
          <input
            type="text"
            className="search-box"
            placeholder="🔍 कविताएँ या कवि खोजें..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </li>
        <li>
          <button className="dark-mode-toggle" onClick={handleDarkModeToggle}>
            {darkMode ? <FaSun size={22} color="#f9a825" /> : <FaMoon size={22} color="#ddd" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

