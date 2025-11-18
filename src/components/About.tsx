import { useTranslation } from "react-i18next";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./About.css";
import portrait from "../assets/ImageAbout/portrait.png";

type AboutCard = {
  id: number;
  title: string;
  text: string;
};

const leftCards: AboutCard[] = [
  {
    id: 1,
    title: "QUI SUIS-JE",
    text: "Actuellement en bootcamp intensif de 5 mois à la Wild Code School, j'ajoute une corde à mon arc afin de consolider mes compétences en frontend et conception d'interfaces.",
  },
  {
    id: 2,
    title: "MES APTITUDES",
    text: "Je suis particulièrement à l'aise en frontend du développement. J'intègre également mes compétences en management de projet et en UX/UI design acquises lors de mes précédentes expériences, avec une attention particulière pour l'accessibilité numérique (A11Y).",
  },
  {
    id: 3,
    title: "MON OBJECTIF",
    text: "Je suis actuellement en recherche d'alternance en Concepteur Développeur d'Applications pour consolider mes compétences, poursuivre mes recherches sur l'influence des habitudes cognitives sur l'expérience utilisateur et évoluer vers une carrière internationale axée sur la transformation digitale.",
  },
];

const funFact: AboutCard = {
  id: 4,
  title: "FUN FACT",
  text: "Cinéphile - Baroudeuse à mes jours perdus (surtout dans les pays Anglo-Saxons) - Touche à tout dans le montage des ordinateurs - Dessinatrice de BD de sensibilisation à la surdité - RPGiste sur les plateformes formatives - Personne sourde.",
};

export default function About() {
  const leftReveal = useRevealOnScroll<HTMLDivElement>();
  const rightReveal = useRevealOnScroll<HTMLDivElement>();
  const { t } = useTranslation();
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">{t("about_title")}</h2>

      <div className="about-layout">
        <div
          ref={leftReveal.ref}
          className={`about-left reveal ${
            leftReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          {leftCards.map((card) => (
            <article key={card.id} className="about-card">
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-text">{card.text}</p>
            </article>
          ))}
        </div>

        <div
          ref={rightReveal.ref}
          className={`about-right reveal reveal--delay-1 ${
            rightReveal.isVisible ? "reveal--visible" : ""
          }`}
        >
          <div className="about-photo-wrapper">
            <div className="about-photo-border">
              <img
                src={portrait}
                alt="Portrait de Léa Jeane François"
                className="about-photo"
              />
            </div>
          </div>

          <article className="about-card about-card-fun">
            <h3 className="about-card-title">{funFact.title}</h3>
            <p className="about-card-text">{funFact.text}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
