import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  function changeLanguage(lang: "fr" | "en") {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  return (
    <>
      <div className="lang-switch">
        <button
          type="button"
          className={i18n.language === "fr" ? "is-active" : ""}
          onClick={() => changeLanguage("fr")}
          aria-label={t("a11y_switchToFr")}
        >
          fr
        </button>
        <button
          type="button"
          className={i18n.language === "en" ? "is-active" : ""}
          onClick={() => changeLanguage("en")}
          aria-label={t("a11y_switchToEn")}
        >
          en
        </button>
      </div>
      <span className="sr-only" aria-live="polite">
        {i18n.language === "fr" ? t("a11y_langFr") : t("a11y_langEn")}
      </span>
    </>
  );
}
