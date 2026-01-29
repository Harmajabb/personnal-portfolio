/**
 * Hero.tsx - Section d'introduction du portfolio
 *
 * C'est la première chose que les visiteurs voient.
 * Contient :
 * - Un titre accrocheur avec le nom/métier
 * - Une description courte
 * - Des boutons d'action (CTA - Call To Action)
 * - Une photo/image de présentation
 *
 * Utilise le hook useRevealOnScroll pour animer l'apparition
 */

import { useTranslation } from "react-i18next";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Hero.css";

// Import de l'image hero (Vite gère automatiquement le chemin)
import heroImage from "../assets/ImageHero/img-hero.jpg";

export default function Hero() {
  /**
   * useRevealOnScroll : hook personnalisé qui retourne :
   * - ref : à attacher à l'élément à observer
   * - isVisible : true quand l'élément entre dans le viewport
   *
   * Le générique <HTMLDivElement> indique le type d'élément attendu
   * On crée deux instances pour animer texte et image séparément
   */
  const textReveal = useRevealOnScroll<HTMLDivElement>();
  const imageReveal = useRevealOnScroll<HTMLDivElement>();

  // Hook de traduction pour les textes multilingues
  const { t } = useTranslation();

  return (
    // id="home" permet la navigation par ancre depuis la navbar
    <section className="hero" id="home">
      {/* Conteneur grid pour le layout texte/image */}
      <div className="hero-layout">
        {/*
          Bloc de texte avec animation reveal
          - ref : connecte l'élément à l'IntersectionObserver
          - className dynamique : ajoute "reveal--visible" quand visible
        */}
        <div
          ref={textReveal.ref}
          className={`hero-text reveal ${
            textReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          {/* Eyebrow : petit texte au-dessus du titre principal */}
          <p className="hero-eyebrow">{t("hero_tagline")}</p>

          {/* Titre principal (h1 = le plus important de la page) */}
          <h1 className="hero-title">{t("hero_heading")}</h1>

          {/* Sous-titre / description courte */}
          <p className="hero-tagline">{t("hero_subtitle")}</p>

          {/* Boutons d'appel à l'action */}
          <div className="hero-buttons">
            {/* Bouton principal (accent) vers les projets */}
            <a href="#projects" className="btn btn-primary">
              {t("hero_cta_projects")}
            </a>
            {/* Bouton secondaire (ghost) vers contact */}
            <a href="#contact" className="btn btn-ghost">
              {t("hero_cta_contact")}
            </a>
          </div>

          {/* Information supplémentaire (disponibilité, localisation...) */}
          <p className="hero-meta">{t("hero_availability")}</p>
        </div>

        {/*
          Image avec animation décalée (reveal--delay-1)
          Le délai crée un effet de cascade : texte puis image
        */}
        <div
          ref={imageReveal.ref}
          className={`hero-image-wrapper reveal reveal--delay-1 ${
            imageReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          {/*
            alt : description de l'image pour l'accessibilité
            Important pour les lecteurs d'écran et le SEO
          */}
          <img className="hero-image" src={heroImage} alt={t("a11_hero_alt")} />
        </div>
      </div>
    </section>
  );
}
