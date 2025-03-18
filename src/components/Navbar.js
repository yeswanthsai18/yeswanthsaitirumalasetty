import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // Get the current route

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Home Icon */}
        <h2 className="logo">
          <Link to="/">
            <FaHome className="home-icon" />
          </Link>
        </h2>

        <ul className="nav-links">
          <li><Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>About</Link></li>
          <li><Link to="/skills" className={location.pathname === "/skills" ? "active-link" : ""}>Skills</Link></li>
          <li><Link to="/experience" className={location.pathname === "/experience" ? "active-link" : ""}>Experience</Link></li>
          <li><Link to="/education" className={location.pathname === "/education" ? "active-link" : ""}>Education</Link></li>
          <li><Link to="/projects" className={location.pathname === "/projects" ? "active-link" : ""}>Projects</Link></li>
          <li><Link to="/research" className={location.pathname === "/research" ? "active-link" : ""}>Research</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
