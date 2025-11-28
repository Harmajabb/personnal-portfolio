import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
import GarbageCityVideo from "../assets/videos/garbage_city.mp4";
import infoDropDownVideo from "../assets/videos/info_dropdown.mp4";
import MoveUp from "../assets/videos/move_up.mp4";
import PortfolioV2Video from "../assets/videos/portfolio_v2.mp4";
import sharkapuceVideo from "../assets/videos/sharkapuce_media.mp4";
import tatooineVideo from "../assets/videos/tatooine_interim.mp4";

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
        icon: iconUser,
        label: "project_icon_github",
        url: "https://github.com/Harmajabb/personnal-portfolio",
      },
      {
        icon: iconWorld,
        label: "project_icon_website",
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
    title: "project_tatooine_title",
    description: "project_tatooine_card_subtitle",
    image: project2,
    techs: ["React", "JavaScript", "CSS"],
    icons: [
      {
        icon: iconUser,
        label: "project_icon_github",
        url: "https://github.com/Harmajabb/portfolio-tatooine_interim",
      },
      {
        icon: iconMusic,
        label: "project_icon_figma",
        url: "https://www.figma.com/design/S8qbF3WjNu2Ao8M0I0PS9P/Tatooine-Iterim-une-mandale-ou-rien?node-id=0-1&t=Qn6UbMmyjy4MMGnM-1",
      },
    ],
    videoUrl: tatooineVideo,
    constraints: "project_tatooine_constraints",
    learned: "project_tatooine_learned",
    fullDescription: "project_tatooine_project",
  },

  {
    id: 3,
    title: "project_media_title",
    description: "project_media_card_subtitle",
    image: project3,
    techs: ["HTML", "CSS", "JavaScript"],
    icons: [
      {
        icon: iconUser,
        label: "project_icon_github",
        url: "https://github.com/Harmajabb/portfolio-mediaSharkapuce",
      },
      {
        icon: iconMusic,
        label: "project_icon_figma",
        url: "https://www.figma.com/design/vVdw8sLIFfYATBgTg5JBRx/Sharkpuce-team-library?t=j6Uo1UKu4O0e6op9-1",
      },
    ],
    videoUrl: sharkapuceVideo,
    constraints: "project_media_constraints",
    learned: "project_media_learned",
    fullDescription: "project_media_project",
  },

  {
    id: 4,
    title: "project_intro_title",
    description: "project_intro_card_subtitle",
    image: project4,
    techs: ["HTML", "CSS", "JavaScript"],
    icons: [
      {
        icon: iconUser,
        label: "project_icon_github",
        url: "https://github.com/Harmajabb/intro-section-dropdown",
      },
      {
        icon: iconWorld,
        label: "project_icon_website",
        url: "https://harmajabb.github.io/intro-section-dropdown/",
      },
    ],
    videoUrl: infoDropDownVideo,
    constraints: "project_intro_constraints",
    learned: "project_intro_learned",
    fullDescription: "project_intro_project",
  },

  {
    id: 5,
    title: "project_garbage_title",
    description: "project_garbage_card_subtitle",
    image: project5,
    techs: ["HTML", "CSS", "JavaScript", "modernBB"],
    icons: [
      {
        icon: iconWorld,
        label: "project_icon_website",
        url: "https://garbage-city.forumactif.com/",
      },
    ],
    videoUrl: GarbageCityVideo,
    constraints: "project_garbage_constraints",
    learned: "project_garbage_learned",
    fullDescription: "project_garbage_project",
  },

  {
    id: 6,
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
        icon: iconUser,
        label: "project_icon_website",
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
          <div className="modal" role="dialog" aria-modal="true">
            <button
              type="button"
              className="modal-close"
              aria-label="Fermer la fenêtre"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            <h3 className="modal-title">{t(selectedProject.title)}</h3>

            <video
              className="modal-video"
              src={selectedProject.videoUrl}
              controls
              muted
            />

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

            <p className="modal-techs">{selectedProject.techs.join(" - ")}</p>
          </div>
        </div>
      )}
    </section>
  );
}
