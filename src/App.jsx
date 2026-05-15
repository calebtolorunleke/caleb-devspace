import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8 pt-28">
        <Navbar />
        <section id="about" className="scroll-mt-24">
          <Hero />
        </section>
        <Technologies />
        {/* <section id="projects" className="scroll-mt-24">
          <Projects />
        </section> */}
        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
