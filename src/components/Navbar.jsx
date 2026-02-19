import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* Logo (Clickable → Home Page) */}
        <div
          className="logo"
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Aariwork Atelier Logo" />
        </div>

        {/* Hamburger (Mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Nav Links (Home removed as per client request) */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
  {/* 🔥 HOME ADD (Now both Logo + Home go to Home page) */}
  <NavLink to="/" onClick={closeMenu}>Home</NavLink>

  <NavLink to="/about" onClick={closeMenu}>About</NavLink>
  <NavLink to="/designs" onClick={closeMenu}>Designs</NavLink>
  
  <NavLink to="/craft" onClick={closeMenu}>Craft</NavLink>
  <NavLink to="/custom" onClick={closeMenu}>Custom</NavLink>
  <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
</div>
      </div>
    </nav>
  );
}