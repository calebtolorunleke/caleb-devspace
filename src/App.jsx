import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Educerts from "./components/Educerts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <>
      <section id="about" className="scroll-mt-24">
        <Hero />
      </section>

      <Technologies />

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience />
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

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          </div>
        </div>

        {/* NAVBAR */}
        <div className="container mx-auto px-8 pt-28">
          <Navbar />

          {/* ROUTES */}
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* ALL PROJECTS */}
            <Route path="/more-projects" element={<Projects />} />
          </Routes>
        </div>

        <Analytics />
      </div>
    </BrowserRouter>
  );
};

export default App;
