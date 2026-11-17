
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./header.css";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Qui sommes-nous ?", path: "/about" },
  { name: "Formation Entreprise", path: "/services" },
  { name: "Formation Professionnelle", path: "/training" },
  { name: "Nos Partenaires", path: "/partenaires" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <NavLink
          to="/"
          className="header-logo"
          onClick={() => setMenuOpen(false)}
        >
          MICC<span>.</span>
        </NavLink>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Bouton mobile */}
          <NavLink
            to="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Inscrivez-vous
          </NavLink>
        </nav>

        {/* Bouton desktop */}
        <NavLink to="/contact" className="header-cta">
          Inscrivez-vous
        </NavLink>

        {/* Menu mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </header>
  );
}

export default Header;
