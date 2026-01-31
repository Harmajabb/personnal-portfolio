/** biome-ignore-all assist/source/organizeImports: <too many img import> */
import a11y from "../assets/ImageCompetences/Accessibility.png";
import adaptative from "../assets/ImageCompetences/adaptative.png";
// import ae from "../assets/ImageCompetences/aftereffects.svg";
import api from "../assets/ImageCompetences/api.svg";
// import apple from "../assets/ImageCompetences/apple.svg";
import architecture from "../assets/ImageCompetences/architecture.svg";
import canva from "../assets/ImageCompetences/canva.svg";
import cognitive from "../assets/ImageCompetences/cognitive.svg";
import communication from "../assets/ImageCompetences/communication.svg";
import curiosity from "../assets/ImageCompetences/curiosity.svg";
import css from "../assets/ImageCompetences/css.svg";
import designsystem from "../assets/ImageCompetences/designsystem.svg";
import diversity from "../assets/ImageCompetences/diversity.svg";
import divi from "../assets/ImageCompetences/divi.svg";
import elementor from "../assets/ImageCompetences/elementor.svg";
import figma from "../assets/ImageCompetences/figma.svg";
import genially from "../assets/ImageCompetences/genially.png";
import git from "../assets/ImageCompetences/git.svg";
// import gitbash from "../assets/ImageCompetences/gitbash.svg";
import github from "../assets/ImageCompetences/github.svg";
import html from "../assets/ImageCompetences/html.svg";
// import idesign from "../assets/ImageCompetences/idesign.svg";
// import illustrator from "../assets/ImageCompetences/illustrator.svg";
import jira from "../assets/ImageCompetences/jira.svg";
import js from "../assets/ImageCompetences/js.svg";
// import linux from "../assets/ImageCompetences/linux.png";
import microsoft from "../assets/ImageCompetences/microsoft.svg";
import miro from "../assets/ImageCompetences/miro.svg";
// import node from "../assets/ImageCompetences/node.svg";
import panda from "../assets/ImageCompetences/panda.png";
import pedagogie from "../assets/ImageCompetences/pedagogie.svg";
import prototype from "../assets/ImageCompetences/prototype.svg";
// import ps from "../assets/ImageCompetences/photoshop.svg";
import react from "../assets/ImageCompetences/react.svg";
import responsive from "../assets/ImageCompetences/responsive.svg";
import scrum from "../assets/ImageCompetences/scrum.png";
import seo from "../assets/ImageCompetences/seo.svg";
import sublimeText from "../assets/ImageCompetences/sublime-text.svg";
import trello from "../assets/ImageCompetences/trello.svg";
import ts from "../assets/ImageCompetences/ts.svg";
import userflow from "../assets/ImageCompetences/userflow.svg";
import usertest from "../assets/ImageCompetences/usertest.svg";
import uxui from "../assets/ImageCompetences/uxui.svg";
import vulgarisation from "../assets/ImageCompetences/vulgarisation.svg";
import vscode from "../assets/ImageCompetences/vscode.svg";
// import windows from "../assets/ImageCompetences/windows.svg";
import wireframe from "../assets/ImageCompetences/wireframe.svg";
import wordpress from "../assets/ImageCompetences/wordpress.svg";
// import xd from "../assets/ImageCompetences/xd.svg";
import yoast from "../assets/ImageCompetences/yoast.svg";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useTranslation } from "react-i18next";
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
    id: "uxui",
    title: "skills_group_uxui",
    size: "wide",
    skills: [
      { name: "skills_uxui_design", icon: uxui },
      { name: "skills_uxui_wireframing", icon: wireframe },
      { name: "skills_uxui_prototyping", icon: prototype },
      { name: "skills_uxui_figma", icon: figma },
      // { name: "skills_uxui_xd", icon: xd },
      // { name: "skills_uxui_miro", icon: miro },
      { name: "skills_uxui_archi", icon: architecture },
      { name: "skills_uxui_user_flow", icon: userflow },
      { name: "skills_uxui_cognitive", icon: cognitive },
      { name: "skills_uxui_user_test", icon: usertest },
      { name: "skills_uxui_design_system", icon: designsystem },
      { name: "skills_uxui_accessible", icon: a11y },
    ],
  },
  {
    id: "frontend",
    title: "skills_group_frontend",
    size: "tall",
    skills: [
      { name: "skills_frontend_html", icon: html },
      { name: "skills_frontend_css", icon: css },
      { name: "skills_frontend_js", icon: js },
      { name: "skills_frontend_ts", icon: ts },
      { name: "skills_frontend_react", icon: react },
      { name: "skills_frontend_responsive", icon: responsive },
      { name: "skills_frontend_a11y", icon: a11y },
      { name: "skills_frontend_seo", icon: seo },
      { name: "skills_frontend_api", icon: api },
      { name: "skills_frontend_git", icon: git },
      { name: "skills_frontend_vscode", icon: vscode },
      { name: "skills_frontend_sublime", icon: sublimeText },
    ],
  },
  {
    id: "project",
    title: "skills_group_pm",
    size: "wide",
    skills: [
      { name: "skills_pm_genially", icon: genially },
      { name: "skills_pm_canva", icon: canva },
      { name: "skills_pm_miro", icon: miro },
      { name: "skills_pm_jira", icon: jira },
      { name: "skills_pm_trello", icon: trello },
      { name: "skills_pm_github", icon: github },
      { name: "skills_pm_microsoft", icon: microsoft },
      { name: "skills_pm_agile", icon: scrum },
      { name: "skills_pm_communication", icon: communication },
    ],
  },
  // {
  //   id: "backend-system",
  //   title: "skills_group_backend",
  //   size: "square",
  //   skills: [
  //     { name: "skills_backend_node", icon: node },
  //     { name: "skills_backend_windows", icon: windows },
  //     { name: "skills_backend_macos", icon: apple },
  //     { name: "skills_backend_linux", icon: linux },
  //     { name: "skills_backend_gitbash", icon: gitbash },
  //   ],
  // },
  // {
  //   id: "graphisme",
  //   title: "skills_group_visual",
  //   size: "square",
  //   skills: [
  //     { name: "skills_visual_illustrator", icon: illustrator },
  //     { name: "skills_visual_photoshop", icon: ps },
  //     { name: "skills_visual_indesign", icon: idesign },
  //     { name: "skills_visual_aftereffects", icon: ae },
  //   ],
  // },
  {
    id: "nocode",
    title: "skills_group_nocode",
    size: "square",
    skills: [
      { name: "skills_nocode_pandasuite", icon: panda },
      { name: "skills_nocode_divi", icon: divi },
      { name: "skills_nocode_elementor", icon: elementor },
      { name: "skills_nocode_wordpress", icon: wordpress },
      { name: "skills_nocode_yoast", icon: yoast },
    ],
  },
  {
    id: "softskills",
    title: "skills_group_softskills",
    size: "wide",
    skills: [
      { name: "skills_soft_pedagogie", icon: pedagogie },
      { name: "skills_soft_curiosity", icon: curiosity },
      { name: "skills_soft_vulgarisation", icon: vulgarisation },
      { name: "skills_soft_teamwork", icon: diversity },
      { name: "skills_soft_accessibility", icon: a11y },
      { name: "skills_soft_adaptability", icon: adaptative },
    ],
  },
];

export default function Competences() {
  const skillsReveal = useRevealOnScroll<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      ref={skillsReveal.ref}
      className={`skills-section reveal ${
        skillsReveal.isVisible ? "reveal--visible" : ""
      }`}
    >
      <h2 className="skills-title">{t("skills_title")}</h2>

      <div className="skills-bento">
        {categories.map((category) => (
          <section
            key={category.id}
            className={`bento-item ${
              category.size ? `bento-item--${category.size}` : ""
            }`}
          >
            <h3 className="bento-title">{t(category.title)}</h3>

            <div className="bento-skills-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="bento-skill-card">
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt=""
                      aria-hidden="true"
                      className="bento-skill-icon"
                    />
                  )}
                  <p className="bento-skill-name">{t(skill.name)}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
