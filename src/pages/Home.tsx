import About from "../components/About";
import Competences from "../components/Competences";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <>
      <Hero />
      <Competences />
      <ProjectsSection />
      <About />
      <Contact />
    </>
  );
}

export default Home;
