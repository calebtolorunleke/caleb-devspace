import React from "react";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Educerts from "../components/Educerts";
import Contact from "../components/Contact";

const Home = ({ isDark, setIsDark }) => {
  return (
    <>
      <section id="about" className="scroll-mt-24">
        <Hero isDark={isDark} setIsDark={setIsDark} />
      </section>

      <Technologies isDark={isDark} setIsDark={setIsDark} />

      <section id="projects" className="scroll-mt-24">
        <Projects isDark={isDark} setIsDark={setIsDark} />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience isDark={isDark} />
      </section>

      <section id="educert" className="scroll-mt-24">
        <Educerts />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </>
  );
};

export default Home;
