/**
 * Contact.tsx - Section de contact
 *
 * Affiche les différentes façons de contacter le propriétaire du portfolio :
 * - Email
 * - LinkedIn
 * - GitHub
 * - Carte de visite
 *
 * Inclut également un bouton pour télécharger le CV
 */

import "./Contact.css";
import { useTranslation } from "react-i18next";

// Import des icônes de contact
import cardIcon from "../assets/ImageFooter/businesscard.svg";
import githubIcon from "../assets/ImageFooter/github.png";
import gmailIcon from "../assets/ImageFooter/gmail.png";
import linkedinIcon from "../assets/ImageFooter/linkedin.png";

// Import du fichier CV (PDF)
import cv from "../assets/Lea_Francois_UXUI_Designer_A11Y_Design_System.pdf";

export default function Contact() {
  const { t } = useTranslation();

  /**
   * Tableau des moyens de contact
   * Chaque entrée contient :
   * - id : identifiant unique pour la clé React
   * - labelKey : clé de traduction pour le label affiché
   * - actionKey : clé de traduction pour le texte accessible (sr-only)
   * - handle : nom d'utilisateur ou identifiant affiché
   * - icon : icône du service
   * - link : URL ou mailto:
   */
  const contacts = [
    {
      id: 1,
      labelKey: "contact_email",
      actionKey: "contact_openEmail",
      handle: "lea.jeane.francois",
      icon: gmailIcon,
      link: "mailto:lea.jeane.francois@gmail.com", // Ouvre le client mail
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
      {/* Titre de section */}
      <h2 className="contact-title">{t("contact_findme")}</h2>

      {/* Grille des cartes de contact */}
      <div className="contact-grid">
        {contacts.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="contact-card"
            target="_blank" // Ouvre dans un nouvel onglet
            rel="noreferrer" // Sécurité
          >
            {/*
              Icône décorative
              - alt="" : pas de texte (décoratif)
              - aria-hidden="true" : masqué aux lecteurs d'écran
            */}
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className="contact-icon"
            />
            {/* Label du service (ex: "Email", "LinkedIn") */}
            <p className="contact-label">{t(item.labelKey)}</p>
            {/* Handle/identifiant */}
            <p className="contact-handle">{item.handle}</p>
            {/*
              Texte accessible pour les lecteurs d'écran
              Ex: "Ouvrir le profil LinkedIn"
            */}
            <span className="sr-only">{t(item.actionKey)}</span>
          </a>
        ))}
      </div>

      {/*
        Bouton de téléchargement du CV
        - download : force le téléchargement au lieu d'ouvrir le fichier
      */}
      <a href={cv} className="contact-cv-button" download>
        {t("cv_button")}
      </a>
    </section>
  );
}
