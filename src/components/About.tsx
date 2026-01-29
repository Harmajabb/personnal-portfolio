/**
 * About.tsx - Section "À propos" du portfolio
 *
 * Présente des informations personnelles sous forme de cartes :
 * - Qui suis-je
 * - Points forts
 * - Objectifs
 * - Fun fact
 *
 * Layout en deux colonnes :
 * - Gauche : 3 cartes d'information
 * - Droite : Photo portrait + carte fun fact
 */

import { useTranslation } from "react-i18next";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./About.css";

// Image du portrait
import portrait from "../assets/ImageAbout/portrait.png";

/**
 * Type TypeScript pour définir la structure d'une carte
 * Cela permet d'avoir de l'autocomplétion et de détecter les erreurs
 */
type AboutCard = {
  id: number; // Identifiant unique pour la clé React
  titleKey: string; // Clé de traduction pour le titre
  textKey: string; // Clé de traduction pour le contenu
};

/**
 * Données des cartes de gauche
 * Les clés (titleKey, textKey) correspondent aux entrées dans les fichiers de traduction
 */
const leftCards: AboutCard[] = [
  {
    id: 1,
    titleKey: "about_block_who_title",
    textKey: "about_block_who_text",
  },
  {
    id: 2,
    titleKey: "about_block_strengths_title",
    textKey: "about_block_strengths_text",
  },
  {
    id: 3,
    titleKey: "about_block_goal_title",
    textKey: "about_block_goal_text",
  },
];

/**
 * Carte "fun fact" séparée car elle est positionnée différemment
 * (sous la photo, côté droit)
 */
const funFact: AboutCard = {
  id: 4,
  titleKey: "about_block_funfact_title",
  textKey: "about_block_funfact_text",
};

export default function About() {
  // Hooks d'animation pour les deux colonnes
  const leftReveal = useRevealOnScroll<HTMLDivElement>();
  const rightReveal = useRevealOnScroll<HTMLDivElement>();

  // Hook de traduction
  const { t } = useTranslation();

  return (
    // id="about" pour la navigation par ancre
    <section className="about-section" id="about">
      {/* Titre de section centré */}
      <h2 className="about-title">{t("about_title")}</h2>

      {/* Layout grid en 2 colonnes */}
      <div className="about-layout">
        {/* Colonne gauche : cartes d'information */}
        <div
          ref={leftReveal.ref}
          className={`about-left reveal ${
            leftReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          {/*
            .map() transforme le tableau de données en éléments JSX
            Chaque carte est rendue avec ses traductions
          */}
          {leftCards.map((card) => (
            <article key={card.id} className="about-card">
              <h3 className="about-card-title">{t(card.titleKey)}</h3>
              <p className="about-card-text">{t(card.textKey)}</p>
            </article>
          ))}
        </div>

        {/* Colonne droite : photo + fun fact */}
        <div
          ref={rightReveal.ref}
          className={`about-right reveal reveal--delay-1 ${
            rightReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          {/* Conteneur de la photo avec effet de bordure dégradée */}
          <div className="about-photo-wrapper">
            <div className="about-photo-border">
              <img
                src={portrait}
                alt={t("about_portrait_alt")} // Alt traduit pour l'accessibilité
                className="about-photo"
              />
            </div>
          </div>

          {/* Carte fun fact sous la photo */}
          <article className="about-card about-card-fun">
            <h3 className="about-card-title">{t(funFact.titleKey)}</h3>
            <p className="about-card-text">{t(funFact.textKey)}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
