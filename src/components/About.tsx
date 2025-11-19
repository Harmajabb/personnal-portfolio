import { useTranslation } from "react-i18next";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./About.css";
import portrait from "../assets/ImageAbout/portrait.png";

type AboutCard = {
  id: number;
  titleKey: string;
  textKey: string;
};

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

const funFact: AboutCard = {
  id: 4,
  titleKey: "about_block_funfact_title",
  textKey: "about_block_funfact_text",
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
              <h3 className="about-card-title">{t(card.titleKey)}</h3>
              <p className="about-card-text">{t(card.textKey)}</p>
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
                alt={t("about_portrait_alt")}
                className="about-photo"
              />
            </div>
          </div>

          <article className="about-card about-card-fun">
            <h3 className="about-card-title">{t(funFact.titleKey)}</h3>
            <p className="about-card-text">{t(funFact.textKey)}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
