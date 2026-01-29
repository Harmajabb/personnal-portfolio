/**
 * ProjectsSection.tsx - Section galerie des projets
 *
 * Affiche une grille de cartes de projets.
 * Au clic sur une carte, ouvre une modale avec plus de détails :
 * - Vidéo de démonstration
 * - Description complète
 * - Contraintes et apprentissages
 *
 * Fonctionnalités :
 * - Grille responsive de cartes
 * - Modale accessible (fermeture avec ESC, aria-modal)
 * - Vidéo de présentation dans la modale
 */

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard, { type ProjectActionIcon } from "./ProjectCard";
import "./ProjectsSection.css";

// ============================================
// IMPORTS DES RESSOURCES
// ============================================
// import iconFigma from "../assets/ImageProjects/figmaicon.png";
import iconGitHub from "../assets/ImageProjects/githubicon.png";
import project1 from "../assets/ImageProjects/projet1.png";
import project2 from "../assets/ImageProjects/projet2.png";
// import project3 from "../assets/ImageProjects/projet3.png";
// import project4 from "../assets/ImageProjects/projet4.png";
// import project5 from "../assets/ImageProjects/projet5.png";
import project6 from "../assets/ImageProjects/projet6.png";
import iconWorld from "../assets/ImageProjects/world.png";
// import GarbageCityVideo from "../assets/videos/garbage_city.mp4";
// import infoDropDownVideo from "../assets/videos/info_dropdown.mp4";
import MoveUp from "../assets/videos/move_up.mp4";
import PortfolioV2Video from "../assets/videos/portfolio_v2.mp4";
// import sharkapuceVideo from "../assets/videos/sharkapuce_media.mp4";
import tatooineVideo from "../assets/videos/tatooine_interim.mp4";

// ============================================
// TYPE TYPESCRIPT
// ============================================

/**
 * Structure d'un projet
 * Contient toutes les informations nécessaires pour la carte et la modale
 */
type Project = {
  id: number; // Identifiant unique
  title: string; // Clé de traduction du titre
  description: string; // Clé de traduction de la description courte
  image: string; // Image de la carte (importée)
  techs: string[]; // Liste des technologies utilisées
  icons: ProjectActionIcon[]; // Icônes d'action (GitHub, démo...)
  videoUrl: string; // URL de la vidéo de démonstration
  constraints: string; // Clé de traduction des contraintes
  learned: string; // Clé de traduction des apprentissages
  fullDescription: string; // Clé de traduction de la description complète
};

// ============================================
// DONNÉES DES PROJETS
// ============================================

/**
 * Tableau des projets à afficher
 * Chaque projet contient ses données et ses clés de traduction
 */
const projects: Project[] = [
  {
    id: 1,
    title: "project_portfolio_v2_title",
    description: "project_portfolio_v2_card_subtitle",
    image: project1,
    techs: ["React", "TypeScript", "Node.js", "CSS"],
    icons: [
      {
        icon: iconGitHub,
        labelKey: "project_modal_github",
        url: "https://github.com/Harmajabb/personnal-portfolio",
      },
      {
        icon: iconWorld,
        labelKey: "project_modal_demo",
        url: "https://leafrancois.com/",
      },
    ],
    videoUrl: PortfolioV2Video,
    constraints: "project_portfolio_v2_constraints",
    learned: "project_portfolio_v2_learned",
    fullDescription: "project_portfolio_v2_project",
  },

  {
    id: 2,
    title: "project_portfolio_v1_title",
    description: "project_portfolio_v1_card_subtitle",
    image: project6,
    techs: [
      "React",
      "FullCalendar",
      "Express.js(API JSON)",
      "Jira",
      "A11Y",
      "UX/UI",
    ],
    icons: [
      {
        icon: iconGitHub,
        labelKey: "project_modal_github",
        url: "https://github.com/ChickenCodeSchool/Js-Crew809-TeamRocket-P2-G2-moveup",
      },
    ],
    videoUrl: MoveUp,
    constraints: "project_portfolio_v1_constraints",
    learned: "project_portfolio_v1_learned",
    fullDescription: "project_portfolio_v1_project",
  },
  {
    id: 3,
    title: "project_tatooine_title",
    description: "project_tatooine_card_subtitle",
    image: project2,
    techs: ["React", "JavaScript", "CSS"],
    icons: [
      {
        icon: iconGitHub,
        labelKey: "project_modal_github",
        url: "https://github.com/Harmajabb/portfolio-tatooine_interim",
      },
      {
        icon: iconWorld,
        labelKey: "project_modal_demo",
        url: "https://portfolio-tatooine-interim.vercel.app/",
      },
    ],
    videoUrl: tatooineVideo,
    constraints: "project_tatooine_constraints",
    learned: "project_tatooine_learned",
    fullDescription: "project_tatooine_project",
  },

  // Projets commentés (désactivés pour l'instant)
  // {
  //   id: 4,
  //   title: "project_media_title",
  //   description: "project_media_card_subtitle",
  //   image: project3,
  //   techs: ["HTML", "CSS", "JavaScript"],
  //   icons: [
  //     {
  //       icon: iconGitHub,
  //       label: "project_icon_github",
  //       url: "https://github.com/Harmajabb/portfolio-mediaSharkapuce",
  //     },
  //     {
  //       icon: iconWorld,
  //       label: "project_icon_website",
  //       url: "https://harmajabb.github.io/portfolio-mediaSharkapuce/pages/dvd-page.html",
  //     },
  //   ],
  //   videoUrl: sharkapuceVideo,
  //   constraints: "project_media_constraints",
  //   learned: "project_media_learned",
  //   fullDescription: "project_media_project",
  // },

  // {
  //   id: 5,
  //   title: "project_intro_title",
  //   description: "project_intro_card_subtitle",
  //   image: project4,
  //   techs: ["HTML", "CSS", "JavaScript"],
  //   icons: [
  //     {
  //       icon: iconGitHub,
  //       label: "project_icon_github",
  //       url: "https://github.com/Harmajabb/intro-section-dropdown",
  //     },
  //     {
  //       icon: iconWorld,
  //       label: "project_icon_website",
  //       url: "https://harmajabb.github.io/intro-section-dropdown/",
  //     },
  //   ],
  //   videoUrl: infoDropDownVideo,
  //   constraints: "project_intro_constraints",
  //   learned: "project_intro_learned",
  //   fullDescription: "project_intro_project",
  // },

  // {
  //   id: 6,
  //   title: "project_garbage_title",
  //   description: "project_garbage_card_subtitle",
  //   image: project5,
  //   techs: ["HTML", "CSS", "JavaScript", "modernBB"],
  //   icons: [
  //     {
  //       icon: iconWorld,
  //       label: "project_icon_website",
  //       url: "https://garbage-city.forumactif.com/",
  //     },
  //   ],
  //   videoUrl: GarbageCityVideo,
  //   constraints: "project_garbage_constraints",
  //   learned: "project_garbage_learned",
  //   fullDescription: "project_garbage_project",
  // },
];

// ============================================
// COMPOSANT
// ============================================

export default function ProjectsSection() {
  /**
   * État pour stocker le projet actuellement sélectionné (pour la modale)
   * null = aucune modale ouverte
   */
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useTranslation();

  /**
   * useEffect pour gérer la fermeture de la modale avec la touche Escape
   * C'est une bonne pratique d'accessibilité
   */
  useEffect(() => {
    // Fonction qui écoute les touches du clavier
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedProject(null); // Ferme la modale
      }
    }

    // Ajoute l'écouteur seulement si une modale est ouverte
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup : retire l'écouteur quand le composant se démonte
    // ou quand selectedProject change
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]); // Se relance quand selectedProject change

  return (
    <section className="projects-section" id="projects">
      {/* Titre de section */}
      <h2 className="projects-title">{t("section_projects_title")}</h2>

      {/* Grille des cartes de projets */}
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={t(project.title)} // Texte traduit
            description={t(project.description)}
            image={project.image}
            techs={project.techs}
            icons={project.icons}
            onClick={() => setSelectedProject(project)} // Ouvre la modale
          />
        ))}
      </div>

      {/*
        MODALE - Rendu conditionnel
        S'affiche uniquement si un projet est sélectionné
      */}
      {selectedProject && (
        // Overlay sombre derrière la modale
        <div className="modal-overlay">
          {/*
            Modale avec attributs d'accessibilité :
            - role="dialog" : indique une fenêtre de dialogue
            - aria-modal="true" : indique que c'est modal (bloque le reste)
          */}
          <div className="modal" role="dialog" aria-modal="true">
            {/* Bouton de fermeture */}
            <button
              type="button"
              className="modal-close"
              aria-label="Fermer la fenêtre"
              onClick={() => setSelectedProject(null)}
            >
              &times; {/* Caractère × */}
            </button>

            {/* Titre du projet */}
            <h3 className="modal-title">{t(selectedProject.title)}</h3>

            {/*
              Vidéo de démonstration
              - controls : affiche les contrôles (play, pause, volume)
              - muted : désactivé par défaut (bonne pratique UX)
            */}
            <video
              className="modal-video"
              src={selectedProject.videoUrl}
              controls
              muted
            />

            {/* Trois colonnes d'information */}
            <div className="modal-columns">
              <div>
                <h4>{t("project_modal_project")}</h4>
                <p>{t(selectedProject.fullDescription)}</p>
              </div>
              <div>
                <h4>{t("project_modal_constraints")}</h4>
                <p>{t(selectedProject.constraints)}</p>
              </div>
              <div>
                <h4>{t("project_modal_learned")}</h4>
                <p>{t(selectedProject.learned)}</p>
              </div>
            </div>

            {/* Liste des technologies utilisées */}
            <p className="modal-techs">{selectedProject.techs.join(" - ")}</p>
          </div>
        </div>
      )}
    </section>
  );
}
