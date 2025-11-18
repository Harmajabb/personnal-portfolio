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
    text: "Actuellement en immersion totale à la Wild Code School (5 mois de bootcamp), je forge mon expertise frontend et conception UI avec une priorité: créer des interfaces qui réduisent la friction cognitive et ouvrent le digital à tous. L'accessibilité n'est pas un bonus, c'est le point de départ.",
  },
  {
    id: 2,
    title: "MES APTITUDES",
    text: "Ma force: le frontend. Mon plus, y intégrer systématiquement: management de projet, design UX/UI et accessibilité (A11Y). Résultat ? Des interfaces qui performent, séduisent et incluent. Pas de compromis.",
  },
  {
    id: 3,
    title: "MON OBJECTIF",
    text: "Alternance recherchée: Concepteur Développeur d'Applications. Mon ambition ? Coder des expériences egornomiques, approfondir le lien habitudes cognitives-UX, et construire une carrière digitale sans frontières.",
  },
];

const funFact: AboutCard = {
  id: 4,
  title: "FUN FACT",
  text: "Paradoxes assumés: sourde mais cinéphile assidue, sédentaire devant mon code mais baroudeuse dès que le Royaume-Uni ou l'Irlande m'appellent. Entre montage PC, création de BD militantes sur la surdité et RPGiste, je transforme chaque passion en compétence.",
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
