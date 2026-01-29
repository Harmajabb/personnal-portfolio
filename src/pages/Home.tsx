/**
 * Home.tsx - Page d'accueil du portfolio
 *
 * Cette page assemble toutes les sections du portfolio
 * dans l'ordre d'affichage souhaité.
 *
 * Structure du portfolio (de haut en bas) :
 * 1. Hero       → Présentation principale avec photo et titre
 * 2. Competences → Grille des compétences techniques et soft skills
 * 3. Projects   → Galerie des projets réalisés
 * 4. About      → Section "À propos" avec parcours
 * 5. Contact    → Formulaire ou informations de contact
 */

import About from "../components/About";
import Competences from "../components/Competences";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <>
      {/*
        Fragment (<></>) : permet de retourner plusieurs éléments
        sans ajouter de <div> supplémentaire dans le DOM
      */}
      <Hero />
      <Competences />
      <ProjectsSection />
      <About />
      <Contact />
    </>
  );
}

export default Home;
