import "./Contact.css";
import { useTranslation } from "react-i18next";
import cv from "../assets/Lea_Francois_Concepteur_Developpeur_Dapplication_Alternance.pdf"
import femIcon from "../assets/ImageFooter/frontend.png";
import githubIcon from "../assets/ImageFooter/github.png";
import gmailIcon from "../assets/ImageFooter/gmail.png";
import linkedinIcon from "../assets/ImageFooter/linkedin.png";

export default function Contact() {
  const { t } = useTranslation();
  const contacts = [
    {
      id: 1,
      label: "Email",
      handle: "lea.jeane.francois",
      icon: gmailIcon,
      link: "mailto:lea.jeane.francois@gmail.com",
    },
    {
      id: 2,
      label: "LinkedIn",
      handle: "@Harmajabb",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/lea-harmajabb/",
    },
    {
      id: 3,
      label: "Github",
      handle: "@Harmajabb",
      icon: githubIcon,
      link: "https://github.com/Harmajabb",
    },
    {
      id: 4,
      label: "FrontEnd Mentor",
      handle: "@Harmajabb",
      icon: femIcon,
      link: "https://www.frontendmentor.io/profile/Harmajabb",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">{t("contact_findme")}</h2>

      <div className="contact-grid">
        {contacts.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.icon} alt={item.label} className="contact-icon" />
            <p className="contact-label">{item.label}</p>
            <p className="contact-handle">{item.handle}</p>
          </a>
        ))}
      </div>

      <a
        href={cv}
        className="contact-cv-button"
        download
      >
        {t("cv_button")}
      </a>
    </section>
  );
}
