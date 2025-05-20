import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">
        <NavLink to="/" className="nav-link">
          SOCIAL MEDIA DASHBOARD
        </NavLink>
      </h1>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/chanchal-kumari-219aba335"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/chanchalbohra14"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
