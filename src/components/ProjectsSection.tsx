import { useEffect, useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard, { type ProjectActionIcon } from "./ProjectCard";
import "./ProjectsSection.css";

// import iconFigma from "../assets/ImageProjects/figmaicon.png";
import iconGitHub from "../assets/ImageProjects/githubicon.png";
import project1 from "../assets/ImageProjects/projet1.png";
import project6 from "../assets/ImageProjects/projet6.png";
import project7 from "../assets/ImageProjects/projet7.png";
import iconWorld from "../assets/ImageProjects/world.png";
import dsA11yVideo from "../assets/videos/ds_a11y.mp4";
import MoveUp from "../assets/videos/move_up.mp4";
import PortfolioV2Video from "../assets/videos/portfolio_v2.mp4";

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
    title: "project_dsA11y_title",
    description: "project_dsA11y_card_subtitle",
    image: project7,
    techs: ["React", "JavaScript", "CSS"],
    icons: [
      {
        icon: iconGitHub,
        labelKey: "project_modal_github",
        url: "https://github.com/Harmajabb/a11y-ds-generator",
      },
      {
        icon: iconWorld,
        labelKey: "project_modal_demo",
        url: "https://github.com/Harmajabb/a11y-ds-generator",
      },
    ],
    videoUrl: dsA11yVideo,
    constraints: "project_dsA11y_constraints",
    learned: "project_dsA11y_learned",
    fullDescription: "project_dsA11y_project",
  },

  {
    id: 3,
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
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useTranslation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus sur le bouton close quand la modale s'ouvre
  useEffect(() => {
    if (selectedProject && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [selectedProject]);

  // Focus trap pour garder le focus dans la modale
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    },
    []
  );

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, handleKeyDown]);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">{t("section_projects_title")}</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={t(project.title)}
            description={t(project.description)}
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
          <div
            ref={modalRef}
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close"
              aria-label={t("a11y_closeModal")}
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            <h3 id="modal-title" className="modal-title">
              {t(selectedProject.title)}
            </h3>

            <video
              className="modal-video"
              src={selectedProject.videoUrl}
              controls
              muted
            />

            <div className="modal-columns">
              <div>
                <h4>{t("project_modal_project")}</h4>
                <p id="modal-description">{t(selectedProject.fullDescription)}</p>
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

            <p className="modal-techs">{selectedProject.techs.join(" - ")}</p>
          </div>
        </div>
      )}
    </section>
  );
}
