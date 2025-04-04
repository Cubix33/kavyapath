import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";  // For dark mode icon
import '../styles/Navbar.css';  // Correct the path to the CSS file

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
        <h1>Kavyapath</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/categories" className="nav-link">Categories</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <>
              <Link to="/submit-poem" className="nav-link">Submit Poem</Link>
              <Link to="/profile" className="nav-link">User Profile</Link>
            </>
          ) : (
            <Link to="/login" className="nav-link">Login/Signup</Link>
          )}
        </li>
        <li>
          <input
            type="text"
            className="search-box"
            placeholder="Search poems or poets..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </li>
        <li>
          <button className="dark-mode-toggle" onClick={handleDarkModeToggle}>
            {darkMode ? <FaSun size={20} color="#ffab00" /> : <FaMoon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

