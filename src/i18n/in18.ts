/**
 * i18n.ts - Configuration de la traduction (internationalisation)
 *
 * Ce fichier configure i18next, la bibliothèque de traduction.
 * Elle permet d'avoir un site multilingue (FR/EN).
 *
 * Fonctionnement :
 * 1. Charge les fichiers de traduction (JSON)
 * 2. Détecte la langue préférée (localStorage ou défaut FR)
 * 3. Fournit la fonction t() pour traduire les clés
 *
 * Usage dans les composants :
 * ```tsx
 * const { t } = useTranslation();
 * return <h1>{t('hero_title')}</h1>;
 * ```
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import des fichiers de traduction JSON
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";

/**
 * Configuration de i18next
 *
 * .use(initReactI18next) : intègre i18next avec React
 * .init({...}) : configure les options
 */
i18n.use(initReactI18next).init({
  /**
   * resources : définit les traductions disponibles
   * Chaque langue a un namespace "translation" contenant ses textes
   */
  resources: {
    fr: { translation: fr }, // Français
    en: { translation: en }, // Anglais
  },

  /**
   * lng : langue par défaut
   * Cherche d'abord dans localStorage (choix précédent de l'utilisateur)
   * Sinon, utilise "fr" par défaut
   */
  lng: localStorage.getItem("lang") || "fr",

  /**
   * fallbackLng : langue de secours
   * Si une clé n'existe pas dans la langue actuelle,
   * i18next cherche dans cette langue
   */
  fallbackLng: "fr",

  /**
   * interpolation.escapeValue : false
   * React échappe déjà les valeurs, pas besoin de le faire deux fois
   * (évite les problèmes avec les caractères spéciaux)
   */
  interpolation: { escapeValue: false },
});

export default i18n;
