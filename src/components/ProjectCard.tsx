/**
 * ProjectCard.tsx - Carte de présentation d'un projet
 *
 * Composant réutilisable qui affiche :
 * - Une image de preview du projet
 * - Le titre et la description
 * - Les icônes d'action (GitHub, démo live)
 * - La liste des technologies utilisées
 *
 * La carte est cliquable (overlay invisible) pour ouvrir la modale
 * Les icônes sont des liens externes qui s'ouvrent dans un nouvel onglet
 */

import "./ProjectCard.css";
import { useTranslation } from "react-i18next";

// ============================================
// TYPES TYPESCRIPT
// ============================================

/**
 * Type pour une icône d'action (lien externe)
 * Exporté pour être utilisé dans ProjectsSection
 */
export type ProjectActionIcon = {
  icon: string; // Chemin de l'icône (importé)
  labelKey: string; // Clé de traduction pour l'accessibilité
  url: string; // URL du lien externe
};

/**
 * Props du composant ProjectCard
 * Définit ce que le parent doit fournir
 */
export type ProjectCardProps = {
  title: string; // Titre du projet (déjà traduit)
  description: string; // Description courte (déjà traduite)
  image: string; // URL de l'image de preview
  techs: string[]; // Liste des technologies
  icons: ProjectActionIcon[]; // Icônes d'action
  onClick?: () => void; // Fonction appelée au clic (optionnelle)
};

// ============================================
// COMPOSANT
// ============================================

export default function ProjectCard({
  title,
  description,
  image,
  techs,
  icons,
  onClick,
}: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    // article : sémantiquement correct pour un élément autonome
    <article
      className="project-card"
      aria-label={t("a11y_projectCard", { title })} // Ex: "Carte projet Portfolio V2"
    >
      {/*
        Overlay cliquable invisible
        Rendu conditionnel : seulement si onClick est fourni
        Permet de cliquer n'importe où sur la carte
      */}
      {onClick && (
        <button
          type="button"
          className="project-card-overlay"
          onClick={onClick}
          aria-label={t("a11y_openProject", { title })} // Ex: "Ouvrir le projet Portfolio V2"
        />
      )}

      {/* IMAGE de preview */}
      <div className="project-image">
        <img src={image} alt={t("a11y_projectPreview", { title })} />
      </div>

      {/* TITRE du projet */}
      <h3 className="project-title">{title}</h3>

      {/* DESCRIPTION courte */}
      <p className="project-description">{description}</p>

      {/* ICÔNES D'ACTIONS (GitHub, démo...) */}
      <div className="project-icons">
        {icons.map(({ icon, labelKey, url }) => (
          <a
            key={labelKey}
            href={url}
            target="_blank" // Ouvre dans un nouvel onglet
            rel="noopener noreferrer" // Sécurité : empêche l'accès à window.opener
            className="project-icon-link"
          >
            {/*
              Icône décorative :
              - alt="" : pas de texte alternatif (décoratif)
              - aria-hidden="true" : masqué aux lecteurs d'écran
              Le texte accessible est fourni par sr-only ci-dessous
            */}
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              className="project-icon"
            />
            {/*
              Texte pour les lecteurs d'écran uniquement
              sr-only = screen reader only (visuellement caché)
            */}
            <span className="sr-only">{t(labelKey)}</span>
          </a>
        ))}
      </div>

      {/*
        TECHNOLOGIES utilisées
        .join(" — ") combine le tableau en string avec séparateur
        Ex: ["React", "CSS"] → "React — CSS"
      */}
      <p className="project-techs">{techs.join(" — ")}</p>
    </article>
  );
}
