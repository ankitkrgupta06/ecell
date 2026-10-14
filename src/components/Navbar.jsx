import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="E-Cell Logo" className="ecell-logo" />

          <div className="logo-text">
            <span className="logo-title">E-CELL</span>
            <span className="logo-subtitle">Entrepreneurship Cell</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <NavLink to="/contact" className="nav-cta">
          <span>Let's Connect</span>
          <ArrowUpRight size={17} />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}

        <NavLink to="/contact" onClick={closeMenu} className="mobile-cta">
          Let's Connect
          <ArrowUpRight size={17} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
