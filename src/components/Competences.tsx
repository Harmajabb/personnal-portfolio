/** biome-ignore-all assist/source/organizeImports: <too many img import> */
import a11y from "../assets/ImageCompetences/Accessibility.png";
import adaptative from "../assets/ImageCompetences/adaptative.png";
import ae from "../assets/ImageCompetences/aftereffects.svg";
import api from "../assets/ImageCompetences/api.svg";
import apple from "../assets/ImageCompetences/apple.svg";
import canva from "../assets/ImageCompetences/canva.svg";
import communication from "../assets/ImageCompetences/communication.svg";
import curiosity from "../assets/ImageCompetences/curiosity.svg";
import css from "../assets/ImageCompetences/css.svg";
import diversity from "../assets/ImageCompetences/diversity.svg";
import divi from "../assets/ImageCompetences/divi.svg";
import elementor from "../assets/ImageCompetences/elementor.svg";
import figma from "../assets/ImageCompetences/figma.svg";
import genially from "../assets/ImageCompetences/genially.png";
import git from "../assets/ImageCompetences/git.svg";
import gitbash from "../assets/ImageCompetences/gitbash.svg";
import github from "../assets/ImageCompetences/github.svg";
import html from "../assets/ImageCompetences/html.svg";
import idesign from "../assets/ImageCompetences/idesign.svg";
import illustrator from "../assets/ImageCompetences/illustrator.svg";
import jira from "../assets/ImageCompetences/jira.svg";
import js from "../assets/ImageCompetences/js.svg";
import linux from "../assets/ImageCompetences/linux.png";
import microsoft from "../assets/ImageCompetences/microsoft.svg";
import miro from "../assets/ImageCompetences/miro.svg";
import node from "../assets/ImageCompetences/node.svg";
import panda from "../assets/ImageCompetences/panda.png";
import pedagogie from "../assets/ImageCompetences/pedagogie.svg";
import prototype from "../assets/ImageCompetences/prototype.svg";
import ps from "../assets/ImageCompetences/photoshop.svg";
import react from "../assets/ImageCompetences/react.svg";
import responsive from "../assets/ImageCompetences/responsive.svg";
import scrum from "../assets/ImageCompetences/scrum.png";
import seo from "../assets/ImageCompetences/seo.svg";
import sublimeText from "../assets/ImageCompetences/sublime-text.svg";
import trello from "../assets/ImageCompetences/trello.svg";
import ts from "../assets/ImageCompetences/ts.svg";
import uxui from "../assets/ImageCompetences/uxui.svg";
import vulgarisation from "../assets/ImageCompetences/vulgarisation.svg";
import vscode from "../assets/ImageCompetences/vscode.svg";
import windows from "../assets/ImageCompetences/windows.svg";
import wireframe from "../assets/ImageCompetences/wireframe.svg";
import wordpress from "../assets/ImageCompetences/wordpress.svg";
import xd from "../assets/ImageCompetences/xd.svg";
import yoast from "../assets/ImageCompetences/yoast.svg";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Competences.css";

type Skill = {
  name: string;
  icon?: string;
};

type SkillCategory = {
  id: string;
  title: string;
  size?: "wide" | "tall" | "square";
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    id: "project",
    title: "GESTION DE PROJET & OUTILS COLLABORATIFS",
    size: "wide",
    skills: [
      { name: "Genially", icon: genially },
      { name: "Canva", icon: canva },
      { name: "Miro", icon: miro },
      { name: "Jira", icon: jira },
      { name: "Trello", icon: trello },
      { name: "GitHub", icon: github },
      { name: "Microsoft Office", icon: microsoft },
      { name: "Agile / Scrum / Kanban", icon: scrum },
      { name: "Communication & pédagogie", icon: communication },
    ],
  },
  {
    id: "frontend",
    title: "DÉVELOPPEMENT FRONTEND",
    size: "tall",
    skills: [
      { name: "HTML5", icon: html },
      { name: "CSS3 / SASS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "TypeScript", icon: ts },
      { name: "React", icon: react },
      { name: "Responsive Design", icon: responsive },
      { name: "Accessibilité (A11Y)", icon: a11y },
      { name: "SEO Technique", icon: seo },
      { name: "APIs REST / Fetch", icon: api },
      { name: "Git", icon: git },
      { name: "VS Code", icon: vscode },
      { name: "Sublime Text", icon: sublimeText },
    ],
  },
  {
    id: "backend-system",
    title: "DÉVELOPPEMENT BACKEND & SYSTÈMES",
    size: "square",
    skills: [
      { name: "Node.js", icon: node },
      { name: "Windows", icon: windows },
      { name: "Apple", icon: apple },
      { name: "Linux", icon: linux },
      { name: "Git Bash", icon: gitbash },
    ],
  },
  {
    id: "uxui",
    title: "DESIGN UX / UI",
    size: "wide",
    skills: [
      { name: "UX/UI Design", icon: uxui },
      { name: "Wireframing", icon: wireframe },
      { name: "Prototypage", icon: prototype },
      { name: "Figma", icon: figma },
      { name: "Adobe XD", icon: xd },
      { name: "Miro", icon: miro },
    ],
  },
  {
    id: "graphisme",
    title: "GRAPHISME & CRÉATION VISUELLE",
    size: "square",
    skills: [
      { name: "Illustrator", icon: illustrator },
      { name: "Photoshop", icon: ps },
      { name: "InDesign", icon: idesign },
      { name: "After Effects", icon: ae },
    ],
  },
  {
    id: "nocode",
    title: "NO CODE & CMS",
    size: "square",
    skills: [
      { name: "PandaSuite", icon: panda },
      { name: "Divi", icon: divi },
      { name: "Elementor", icon: elementor },
      { name: "WordPress", icon: wordpress },
      { name: "Yoast SEO", icon: yoast },
    ],
  },
  {
    id: "softskills",
    title: "SOFT SKILLS",
    size: "wide",
    skills: [
      { name: "Pédagogie", icon: pedagogie },
      { name: "Curiosité", icon: curiosity },
      { name: "Vulgarisation technique", icon: vulgarisation },
      { name: "Travail en équipe", icon: diversity },
      { name: "Sens de l'accessibilité", icon: a11y },
      { name: "Adaptabilité", icon: adaptative },
    ],
  },
];

export default function Competences() {
  const skillsReveal = useRevealOnScroll<HTMLDivElement>();

  return (
    <section
      id="skills"
      ref={skillsReveal.ref}
      className={`skills-section reveal ${
        skillsReveal.isVisible ? "reveal--visible" : ""
      }`}
    >
      <h2 className="skills-title">MES COMPÉTENCES</h2>

      <div className="skills-bento">
        {categories.map((category) => (
          <section
            key={category.id}
            className={`bento-item ${
              category.size ? `bento-item--${category.size}` : ""
            }`}
          >
            <h3 className="bento-title">{category.title}</h3>

            <div className="bento-skills-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="bento-skill-card">
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="bento-skill-icon"
                    />
                  )}
                  <span className="bento-skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
