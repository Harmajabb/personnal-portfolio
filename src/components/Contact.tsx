import "./Contact.css";
import { useTranslation } from "react-i18next";
import cardIcon from "../assets/ImageFooter/businesscard.svg";
import githubIcon from "../assets/ImageFooter/github.png";
import gmailIcon from "../assets/ImageFooter/gmail.png";
import linkedinIcon from "../assets/ImageFooter/linkedin.png";
import cv from "../assets/Lea_Francois_UXUI_Designer_A11Y_Design_System.pdf";

export default function Contact() {
  const { t } = useTranslation();
  const contacts = [
    {
      id: 1,
      labelKey: "contact_email",
      actionKey: "contact_openEmail",
      handle: "lea.jeane.francois",
      icon: gmailIcon,
      link: "mailto:lea.jeane.francois@gmail.com",
    },
    {
      id: 2,
      labelKey: "contact_linkedin",
      actionKey: "contact_openLinkedIn",
      handle: "@Harmajabb",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/lea-harmajabb/",
    },
    {
      id: 3,
      labelKey: "contact_github",
      actionKey: "contact_openGithub",
      handle: "@Harmajabb",
      icon: githubIcon,
      link: "https://github.com/Harmajabb",
    },
    {
      id: 4,
      labelKey: "contact_card",
      actionKey: "contact_openCard",
      handle: "@Harmajabb",
      icon: cardIcon,
      link: "https://www.leafrancois.com/carte/",
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
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className="contact-icon"
            />
            <p className="contact-label">{t(item.labelKey)}</p>
            <p className="contact-handle">{item.handle}</p>
            <span className="sr-only">{t(item.actionKey)}</span>
          </a>
        ))}
      </div>

      <a href={cv} className="contact-cv-button" download>
        {t("cv_button")}
      </a>
    </section>
  );
}
