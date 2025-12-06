import React from "react";
import './Navbar.css';
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-inner">
        <div className="logo-wrapper">
          <img
            src="https://placehold.co/150x50/0d47a1/ffffff?text=XEROX+LOGO"
            alt="Xerox Store Logo"
            className="logo-img"
          />
        </div>
        <div className="navigation-links">
          <div className="links-list">
            <Link to="/">HOME</Link>
            <Link to="/service">SERVICE</Link>
            <a href="#">ABOUT</a>
            <button onClick={scrollToContact} className="link-btn">CONTACT</button>
          </div>
          <button className="login-button" onClick={login}>LOG IN</button>
        </div>
      </div>
    </nav>
  );
}
