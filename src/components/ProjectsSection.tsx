import { useEffect, useState } from "react";
import ProjectCard, { type ProjectActionIcon } from "./ProjectCard";
import "./ProjectsSection.css";

import iconMusic from "../assets/ImageProjects/figmaicon.png";
import iconUser from "../assets/ImageProjects/githubicon.png";
import project1 from "../assets/ImageProjects/projet1.png";
import project2 from "../assets/ImageProjects/projet2.png";
import project3 from "../assets/ImageProjects/projet3.png";
import project4 from "../assets/ImageProjects/projet4.png";
import project5 from "../assets/ImageProjects/projet5.png";
import project6 from "../assets/ImageProjects/projet6.png";
import iconWorld from "../assets/ImageProjects/world.png";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techs: string[];
  icons: ProjectActionIcon[];
  videoUrl: string;
  constraints: string;
  learned: string;
  fullDescription: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio V2",
    description: "Portfolio moderne développé en React et TypeScript.",
    image: project1,
    techs: ["React", "TypeScript", "Node.js", "CSS"],
    icons: [
      {
        icon: iconUser,
        label: "Voir le dépôt GitHub",
        url: "https://github.com/Harmajabb/personnal-portfolio",
      },
      {
        icon: iconMusic,
        label: "Voir le figma",
        url: "https://www.figma.com/design/ClJYjBwCTtEM83cIx9jLyJ/Portfolio-v2?node-id=0-1&t=InQKtHectRlxsJwE-1",
      },
      {
        icon: iconWorld,
        label: "Voir le site",
        url: "https://leafrancois.com/",
      },
    ],
    videoUrl: "/videos/portfolioV2.mp4",
    constraints:
      "Respect du responsive, architecture front claire, animations cohérentes.",
    learned:
      "Construction d'une application React structurée, gestion du routing, organisation des composants, design system.",
    fullDescription:
      "Portfolio moderne entièrement codé pour présenter mes projets, mes compétences et mon identité professionnelle. Conçu avec React, TypeScript et un design responsive soigné.",
  },
  {
    id: 2,
    title: "Tatooine Interim",
    description: "Application créée en 24h lors d'un hackathon.",
    image: project2,
    techs: ["React", "JavaScript", "CSS"],
    icons: [
      {
        icon: iconUser,
        label: "Voir le dépôt GitHub",
        url: "https://github.com/Harmajabb/Tatooine_Interim",
      },
      {
        icon: iconMusic,
        label: "Voir le figma",
        url: "https://www.figma.com/design/S8qbF3WjNu2Ao8M0I0PS9P/Tatooine-Iterim-une-mandale-ou-rien?node-id=0-1&t=Qn6UbMmyjy4MMGnM-1",
      },
    ],
    videoUrl: "/videos/tatooine.mp4",
    constraints:
      "Projet limité à 24h, travail en équipe, fonctionnalités essentielles uniquement, découverte du react 2 semaines avant le début du challenge.",
    learned:
      "Collaboration Git, partage des tâches, création rapide d'interfaces réactives, gestion des priorités, appeler un API existant.",
    fullDescription:
      "Application construite en équipe lors d'un hackathon. Objectif: créer une plateforme fun autour de l'univers Star Wars permettant de visualiser des offres, profils et informations.",
  },
  {
    id: 3,
    title: "Media Sharkapuce",
    description: "Projet collaboratif développé en groupe avec GitHub.",
    image: project3,
    techs: ["HTML", "CSS", "JavaScript"],
    icons: [
      {
        icon: iconUser,
        label: "Voir le dépôt GitHub",
        url: "https://github.com/Joachim-masson/mediaSharkapuces",
      },
      {
        icon: iconMusic,
        label: "Voir figma",
        url: "https://github.com/Joachim-masson/mediaSharkapuces",
      },
    ],
    videoUrl: "/videos/sharkapuce.mp4",
    constraints:
      "Travail de groupe, harmonisation du code, coordination entre plusieurs membres.",
    learned:
      "Gestion de branche, merge requests, organisation du travail à plusieurs, structuration d'un projet simple mais cohérent.",
    fullDescription:
      "Projet d'équipe visant à créer une interface simple autour d'un thème de médiathèque. Exercice centré sur la collaboration et les bonnes pratiques Git.",
  },
  {
    id: 4,
    title: "Intro Section Dropdown",
    description: "Challenge d'intégration HTML/CSS/JS de FrontEnd Mentor.",
    image: project4,
    techs: ["HTML", "CSS", "JavaScript"],
    icons: [
      {
        icon: iconUser,
        label: "Voir le dépôt GitHub",
        url: "https://github.com/Harmajabb/intro-section-dropdown",
      },
      {
        icon: iconWorld,
        label: "Voir le site internet",
        url: "https://harmajabb.github.io/intro-section-dropdown/",
      },
    ],
    videoUrl: "/videos/intro-dropdown.mp4",
    constraints:
      "Respect du design Figma via les images fournies, interactions simples, responsive obligatoire.",
    learned:
      "Gestion de dropdowns web et mobile, manipulation du DOM, responsive design.",
    fullDescription:
      "Exercice d'intégration moderne avec menu déroulant, animations légères et respect fidèle d'une maquette. Permet d'améliorer la maîtrise CSS et le JS vanilla.",
  },
  {
    id: 5,
    title: "Garbage City",
    description:
      "Refonte complète du thème d'un forum RPG avec templates, CSS externe et JavaScript.",
    image: project5,
    techs: ["HTML", "CSS", "JavaScript", "modernBB"],
    icons: [
      {
        icon: iconWorld,
        label: "Voir le site",
        url: "https://garbage-city.forumactif.com/",
      },
    ],
    videoUrl: "/videos/garbage-city.mp4",
    constraints:
      "Limite de poids CSS, structure figée des templates Forumactif, compatibilité mobile.",
    learned:
      "Personnalisation avancée de templates, utilisation de CSS externe, intégration JS dans un moteur existant, optimisation du responsive.",
    fullDescription:
      "Refonte complète du design d'un forum RPG basé sur Forumactif. Travail intensif sur les templates HTML, ajout de JavaScript personnalisé, externalisation du CSS pour contourner les limites du CMS.",
  },
  {
    id: 6,
    title: "Portfolio V1",
    description:
      "Mon premier portfolio réalisé avec WordPress et Divi, orienté UX/UI.",
    image: project6,
    techs: ["WordPress", "Divi", "Yoast SEO", "FileZilla"],
    icons: [
      {
        icon: iconUser,
        label: "Voir le site",
        url: "https://leafrancois.com/",
      },
    ],
    videoUrl: "/videos/portfolioV1.mp4",
    constraints:
      "Travail no-code, limitations du builder Divi, optimisation responsive.",
    learned:
      "Création d'un site vitrine professionnel, structuration du contenu, gestion d'un CMS, design cohérent et gestion du nom de domaine OVH avec FileZilla.",
    fullDescription:
      "Première version de mon portfolio professionnel, construite avec Divi. Projet orienté UX, intégration de sections personnalisées et gestion complète d'un site WordPress.",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // fermeture avec ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    }

    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">MES PROJETS</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            techs={project.techs}
            icons={project.icons}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal" role="dialog" aria-modal="true">
            <button
              type="button"
              className="modal-close"
              aria-label="Fermer la fenêtre"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            <h3 className="modal-title">{selectedProject.title}</h3>

            <video
              className="modal-video"
              src={selectedProject.videoUrl}
              controls
              muted
            />

            <div className="modal-columns">
              <div>
                <h4>Projet</h4>
                <p>{selectedProject.fullDescription}</p>
              </div>
              <div>
                <h4>Contraintes</h4>
                <p>{selectedProject.constraints}</p>
              </div>
              <div>
                <h4>Ce que j&apos;ai appris</h4>
                <p>{selectedProject.learned}</p>
              </div>
            </div>

            <p className="modal-techs">{selectedProject.techs.join(" - ")}</p>
          </div>
        </div>
      )}
    </section>
  );
}
