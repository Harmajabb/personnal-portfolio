import LanguageSwitcher from "./LanguageSwitcher";
import Toggle from "./Toggle";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-shell">
      <div className="navbar-pill">
        <a href="#top" className="navbar-brand">
          Lea Francois
        </a>

        <nav className="navbar-menu" aria-label="Navigation principale">
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-actions">
          <LanguageSwitcher />
          <Toggle />
        </div>
      </div>
    </header>
  );
}
