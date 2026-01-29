/**
 * NavBar.tsx - Barre de navigation principale du portfolio
 *
 * Ce composant affiche une navigation fixe en haut de page avec :
 * - Le nom/logo cliquable pour revenir en haut
 * - Les liens vers les différentes sections
 * - Un indicateur visuel (soulignement) de la section actuellement visible
 * - Les actions (changement de langue, thème)
 */

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Toggle from "./Toggle";
import "./Navbar.css";

/**
 * Liste des IDs de sections à observer
 * Ces IDs doivent correspondre aux attributs "id" des <section> dans le HTML
 */
const sections = ["home", "skills", "projects", "about", "contact"];

export default function Navbar() {
  // Hook i18next pour la traduction des labels
  const { t } = useTranslation();

  // État local pour stocker l'ID de la section actuellement visible
  // Par défaut "home" car on arrive en haut de page
  const [active, setActive] = useState("home");

  /**
   * useEffect : s'exécute après le premier rendu du composant
   * Ici, on met en place l'Intersection Observer pour détecter
   * quelle section est visible à l'écran
   */
  useEffect(() => {
    /**
     * IntersectionObserver : API native du navigateur qui permet de
     * détecter quand un élément entre ou sort du viewport (zone visible)
     *
     * Le callback reçoit un tableau "entries" contenant les éléments observés
     * qui ont changé d'état (visible/invisible)
     */
    const observer = new IntersectionObserver(
      (entries) => {
        // Pour chaque élément qui a changé d'état
        entries.forEach((entry) => {
          // Si l'élément est visible (isIntersecting = true)
          // on met à jour l'état "active" avec son ID
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        /**
         * threshold: 0.3 signifie que le callback se déclenche
         * quand 30% de l'élément est visible
         *
         * Valeurs possibles : 0 (dès qu'un pixel est visible) à 1 (100% visible)
         * On utilise 0.3 pour que les sections courtes (comme contact)
         * puissent aussi être détectées
         */
        threshold: 0.3,
      }
    );

    // On demande à l'observer de surveiller chaque section
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    /**
     * Cleanup function : s'exécute quand le composant est démonté
     * (retiré du DOM) ou avant que l'effet se relance
     *
     * Important pour éviter les fuites mémoire : on arrête d'observer
     */
    return () => observer.disconnect();
  }, []); // [] = effet exécuté une seule fois au montage

  return (
    <header className="navbar-shell">
      <div className="navbar-pill">
        {/*
          Lien vers la section hero (haut de page)
          - className dynamique : ajoute "active" si on est sur home
          - aria-current="page" : attribut d'accessibilité indiquant
            aux lecteurs d'écran que c'est la page/section actuelle
        */}
        <a
          href="#home"
          className={`navbar-brand${active === "home" ? " active" : ""}`}
          aria-current={active === "home" ? "page" : undefined}
        >
          Lea Francois
        </a>

        {/*
          Navigation principale
          aria-label : description pour les lecteurs d'écran
        */}
        <nav className="navbar-menu" aria-label="Navigation principale">
          {/*
            sections.slice(1) : on prend tous les éléments sauf le premier ("home")
            car "home" est déjà représenté par le lien "Lea Francois"

            .map() : transforme chaque ID en un élément <a>
          */}
          {sections.slice(1).map((id) => (
            <a
              key={id} // Clé unique requise par React pour les listes
              href={`#${id}`} // Lien ancre vers la section (ex: #skills)
              className={active === id ? "active" : ""}
              aria-current={active === id ? "page" : undefined}
            >
              {/*
                t(`nav_${id}`) appelle la fonction de traduction
                avec la clé "nav_skills", "nav_projects", etc.
                Retourne le texte traduit selon la langue active
              */}
              {t(`nav_${id}`)}
            </a>
          ))}
        </nav>

        {/* Actions à droite : sélecteur de langue et toggle thème */}
        <div className="navbar-actions">
          <LanguageSwitcher />
          <Toggle />
        </div>
      </div>
    </header>
  );
}
