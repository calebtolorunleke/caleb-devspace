import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX, HiOutlineDocumentText } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinkClass = (section) =>
    `${isDark ? "text-white " : "text-black "} relative text-sm transition duration-300 hover:font-bold ${
      activeSection === section && " font-bold text-stone-10 "
    }`;

  const updateMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <nav
      className={`${isDark ? "border-white/10 bg-black/70" : "border-black/10 bg-white"} fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="/"
          className={`${isDark ? "text-white" : "text-black"} text-2xl font-bold tracking-tight`}
        >
          Caleb<span className="text-purple-500">.</span>
        </a>

        {location.pathname !== "/more-projects" && (
          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className={navLinkClass("about")}>
              About
              {activeSection === "about" && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-purple-500" />
              )}
            </a>

            <a href="#projects" className={navLinkClass("projects")}>
              Projects
              {activeSection === "projects" && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-purple-500" />
              )}
            </a>

            <a href="#experience" className={navLinkClass("experience")}>
              Experience
              {activeSection === "experience" && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-purple-500" />
              )}
            </a>

            <a href="#educerts" className={navLinkClass("educerts")}>
              Credentials
              {activeSection === "educerts" && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-purple-500" />
              )}
            </a>
          </div>
        )}

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => updateMode()}
            className="text-xl  transition hover:scale-110 "
          >
            {isDark ? (
              <MdLightMode className="text-stone-400 hover:text-white" />
            ) : (
              <MdDarkMode className="text-black/80 hover:text-black" />
            )}
          </button>

          <a
            href="/Caleb_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? "text-stone-300 hover:text-white" : "text-black/80 hover:text-black"} flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2 text-sm  transition hover:border-purple-500 `}
          >
            <HiOutlineDocumentText />
            Resume
          </a>

          <a
            href="https://github.com/calebtolorunleke"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? "text-stone-300" : "text-black"}  text-xl transition hover:scale-110 hover:text-white`}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/calebtol/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-stone-400 transition hover:scale-110 hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white md:hidden"
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="border-t border-stone-800 bg-black px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {location.pathname !== "/more-projects" && (
                <div className="flex flex-col gap-6">
                  <a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className={`${
                      activeSection === "about"
                        ? "text-purple-500"
                        : "text-stone-300"
                    }`}
                  >
                    About
                  </a>

                  <a
                    href="#projects"
                    onClick={() => setIsOpen(false)}
                    className={`${
                      activeSection === "projects"
                        ? "text-purple-500"
                        : "text-stone-300"
                    }`}
                  >
                    Projects
                  </a>

                  <a
                    href="#experience"
                    onClick={() => setIsOpen(false)}
                    className={`${
                      activeSection === "experience"
                        ? "text-purple-500"
                        : "text-stone-300"
                    }`}
                  >
                    Experience
                  </a>

                  <a
                    href="#educerts"
                    onClick={() => setIsOpen(false)}
                    className={`${
                      activeSection === "educerts"
                        ? "text-purple-500"
                        : "text-stone-300"
                    }`}
                  >
                    Credentials
                  </a>
                </div>
              )}

              <a
                href="/Caleb_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-white"
              >
                <HiOutlineDocumentText />
                Resume
              </a>

              <div className="flex items-center gap-5 pt-2 text-2xl">
                <a
                  href="https://github.com/calebtolorunleke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/calebtol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
