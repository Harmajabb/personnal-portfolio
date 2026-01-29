/**
 * Toggle.tsx - Bouton de basculement thème clair/sombre
 *
 * Fonctionnalités :
 * - Détecte la préférence système (prefers-color-scheme)
 * - Sauvegarde le choix dans localStorage
 * - Animation fluide entre les icônes soleil/lune
 * - Accessible avec aria-pressed et aria-label
 *
 * L'état du thème est stocké dans data-theme sur <html>
 */

import {
  useEffect,
  useEffect as useEffectType,
  useMemo,
  useState,
} from "react";
import moonIcon from "../assets/ImageNav/moon.svg";
import sunIcon from "../assets/ImageNav/sun.svg";
import "./Toggle.css";

function Toggle() {
  // ============================================
  // TYPES ET CONSTANTES
  // ============================================

  // Type union pour les thèmes possibles
  type Theme = "light" | "dark";

  // Clé utilisée pour stocker le thème dans localStorage
  const STORAGE_KEY = "theme";

  // ============================================
  // FONCTIONS UTILITAIRES
  // ============================================

  /**
   * Récupère le thème stocké dans localStorage
   * Retourne null si aucun thème n'est stocké ou si la valeur est invalide
   */
  const getStoredTheme = (): Theme | null => {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  };

  /**
   * Détermine le thème initial à afficher
   * Priorité :
   * 1. Thème stocké dans localStorage
   * 2. Préférence système (prefers-color-scheme)
   */
  const getInitialTheme = (): Theme => {
    const stored = getStoredTheme();
    if (stored) return stored;
    // window.matchMedia vérifie la préférence système
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // ============================================
  // ÉTAT
  // ============================================

  // État du thème actuel
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // ============================================
  // EFFETS
  // ============================================

  /**
   * Effet 1 : Applique le thème au document et le sauvegarde
   * S'exécute à chaque changement de thème
   */
  useEffect(() => {
    // Ajoute data-theme="light" ou data-theme="dark" sur <html>
    document.documentElement.setAttribute("data-theme", theme);
    // Sauvegarde dans localStorage pour la prochaine visite
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  /**
   * Effet 2 : Écoute les changements de préférence système
   * Si l'utilisateur n'a pas de préférence stockée,
   * le thème suit automatiquement le système
   */
  useEffectType(() => {
    // Media query pour détecter le mode sombre du système
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    // Handler appelé quand la préférence système change
    const handleChange = (e: MediaQueryListEvent) => {
      // Ne change que si l'utilisateur n'a pas fait de choix explicite
      if (!getStoredTheme()) setTheme(e.matches ? "dark" : "light");
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // ============================================
  // CALCULS DÉRIVÉS
  // ============================================

  // Thème vers lequel on va basculer
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  /**
   * Label accessible pour le bouton
   * useMemo évite de recalculer à chaque rendu
   */
  const ariaLabel = useMemo(() => {
    return nextTheme === "light"
      ? "Basculer le thème en clair"
      : "Basculer le thème en sombre";
  }, [nextTheme]);

  // Fonction de basculement
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // ============================================
  // RENDU
  // ============================================

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={theme === "dark"} // Indique l'état du toggle
      aria-label={ariaLabel}
      onClick={toggleTheme}
    >
      {/*
        Viewport : zone visible de l'icône
        Cache une des deux icônes selon le thème
      */}
      <span className="icon-viewport" aria-hidden="true">
        {/*
          Stack : empile les deux icônes verticalement
          Se déplace de -50% pour montrer lune ou soleil
        */}
        <span className="icon-stack">
          <img src={sunIcon} alt="" className="icon" />
          <img src={moonIcon} alt="" className="icon" />
        </span>
      </span>

      {/*
        Annonce pour les lecteurs d'écran
        aria-live="polite" annonce le changement sans interrompre
      */}
      <span className="sr-only" aria-live="polite">
        {theme === "dark" ? "Thème sombre activé" : "Thème clair activé"}
      </span>
    </button>
  );
}

export default Toggle;
