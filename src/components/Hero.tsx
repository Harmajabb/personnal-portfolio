import { useTranslation } from "react-i18next";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Hero.css";
import heroImage from "../assets/ImageHero/img-hero.jpg";

export default function Hero() {
  const textReveal = useRevealOnScroll<HTMLDivElement>();
  const imageReveal = useRevealOnScroll<HTMLDivElement>();
  const { t } = useTranslation();
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div
          ref={textReveal.ref}
          className={`hero-text reveal ${
            textReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          <p className="hero-eyebrow">{t("hero_tagline")}</p>

          <h1 className="hero-title">{t("hero_heading")}</h1>

          <p className="hero-tagline">{t("hero_subtitle")}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              {t("hero_cta_projects")}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t("hero_cta_contact")}
            </a>
          </div>

          <p className="hero-meta">{t("hero_availability")}</p>
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
            alt={t("a11y_hero_alt")}
          />
        </div>
      </div>
    </section>
  );
}
