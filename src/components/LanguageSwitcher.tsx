import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lang: "fr" | "en") {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  return (
    <div className="lang-switch">
      <button
        type="button"
        className={i18n.language === "fr" ? "is-active" : ""}
        onClick={() => changeLanguage("fr")}
        aria-label="Changer la langue"
      >
        FR
      </button>
      <button
        type="button"
        className={i18n.language === "en" ? "is-active" : ""}
        onClick={() => changeLanguage("en")}
        aria-label="Changer la langue"
      >
        EN
      </button>
    </div>
  );
}
