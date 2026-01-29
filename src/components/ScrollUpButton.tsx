/**
 * ScrollUpButton.tsx - Bouton "Remonter en haut de page"
 *
 * Bouton flottant qui apparaît quand l'utilisateur a scrollé
 * Au clic, remonte en haut de la page avec une animation fluide
 *
 * Fonctionnalités :
 * - Apparaît après 600px de scroll
 * - Animation d'apparition/disparition
 * - Scroll smooth vers le haut
 * - Accessible avec aria-label
 */

import { useEffect, useState } from "react";
import scrollUpIcon from "../assets/scroll-up.svg";
import "./ScrollUpButton.css";
import { t } from "i18next";

function ScrollUpButton() {
  // État pour contrôler la visibilité du bouton
  const [isVisible, setIsVisible] = useState(false);

  /**
   * useEffect pour écouter le scroll
   * Affiche le bouton quand on a scrollé plus de 600px
   */
  useEffect(() => {
    // Handler appelé à chaque scroll
    const onScroll = () => setIsVisible(window.scrollY > 600);

    // passive: true améliore les performances du scroll
    // Indique au navigateur qu'on ne va pas appeler preventDefault()
    window.addEventListener("scroll", onScroll, { passive: true });

    // Vérifie l'état initial au chargement
    onScroll();

    // Cleanup : retire l'écouteur au démontage
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Remonte en haut de la page avec animation fluide
   * behavior: "smooth" utilise le CSS scroll-behavior
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      // Classes dynamiques pour l'animation
      className={`scroll-up ${isVisible ? "visible" : "hidden"}`}
      aria-label={t("a11_scrollUP")} // Ex: "Remonter en haut de la page"
    >
      {/*
        Icône décorative (flèche vers le haut)
        aria-hidden car le aria-label du bouton suffit
      */}
      <img
        src={scrollUpIcon}
        alt=""
        className="scroll-up-icon"
        aria-hidden="true"
      />
    </button>
  );
}

export default ScrollUpButton;
