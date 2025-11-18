import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Hero.css";
import heroImage from "../assets/ImageHero/img-hero.jpg";

export default function Hero() {
  const textReveal = useRevealOnScroll<HTMLDivElement>();
  const imageReveal = useRevealOnScroll<HTMLDivElement>();
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div
          ref={textReveal.ref}
          className={`hero-text reveal ${
            textReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          <p className="hero-eyebrow">Front-end · UI / UX · Accessibilité</p>

          <h1 className="hero-title">
            <span>Je conçois</span>
            <span>des interfaces claires</span>
            <span>et accessibles.</span>
          </h1>

          <p className="hero-tagline">
            Développeuse front-end & UI/UX designer, je crée des expériences web
            accessibles (A11Y), performantes et pensées pour les utilisateurs.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-ghost">
              Me contacter
            </a>
          </div>

          <p className="hero-meta">
            Disponible pour une alternance en conception & développement
            d&apos;applications à partir de mars 2026.
          </p>
        </div>

        <div
          ref={imageReveal.ref}
          className={`hero-image-wrapper reveal reveal--delay-1 ${
            imageReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          <img
            className="hero-image"
            src={heroImage}
            alt="Illustration de Lea Francois travaillant sur une interface"
          />
        </div>
      </div>
    </section>
  );
}
