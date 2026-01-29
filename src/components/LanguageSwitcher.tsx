/**
 * LanguageSwitcher.tsx - Sélecteur de langue (FR/EN)
 *
 * Permet à l'utilisateur de changer la langue du site.
 * Deux boutons : FR et EN, le bouton actif est mis en surbrillance.
 *
 * Fonctionnalités :
 * - Change la langue via i18next
 * - Sauvegarde le choix dans localStorage
 * - Accessible avec aria-label sur chaque bouton
 */

import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  /**
   * useTranslation() retourne :
   * - t : fonction de traduction (non utilisée ici)
   * - i18n : instance i18next avec méthodes et état
   */
  const { i18n } = useTranslation();

  /**
   * Change la langue et la sauvegarde dans localStorage
   * @param lang - Code de langue ("fr" ou "en")
   */
  function changeLanguage(lang: "fr" | "en") {
    i18n.changeLanguage(lang); // Change la langue active dans i18next
    localStorage.setItem("lang", lang); // Sauvegarde pour la prochaine visite
  }

  return (
    // Conteneur des deux boutons
    <div className="lang-switch">
      {/*
        Bouton Français
        - is-active : classe ajoutée si c'est la langue courante
        - aria-label : description accessible
      */}
      <button
        type="button"
        className={i18n.language === "fr" ? "is-active" : ""}
        onClick={() => changeLanguage("fr")}
        aria-label="Changer la langue en français"
      >
        fr
      </button>

      {/* Bouton Anglais */}
      <button
        type="button"
        className={i18n.language === "en" ? "is-active" : ""}
        onClick={() => changeLanguage("en")}
        aria-label="Changer la langue en anglais"
      >
        en
      </button>
    </div>
  );
}
