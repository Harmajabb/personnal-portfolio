import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Toggle from "./Toggle";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <header className="navbar-shell">
      <div className="navbar-pill">
        <a href="#top" className="navbar-brand">
          Lea Francois
        </a>

        <nav className="navbar-menu" aria-label="Navigation principale">
          <a href="#skills">{t("nav_skills")}</a>
          <a href="#projects">{t("nav_projects")}</a>
          <a href="#about">{t("nav_about")}</a>
          <a href="#contact">{t("nav_contact")}</a>
        </nav>

        <div className="navbar-actions">
          <LanguageSwitcher />
          <Toggle />
        </div>
      </div>
    </header>
  );
}
