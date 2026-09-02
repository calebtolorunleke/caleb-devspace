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
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinkClass = (section) =>
    `relative text-sm transition duration-300 ${
      isDark ? "text-white" : "text-black"
    } ${activeSection === section ? "font-bold" : "hover:font-bold"}`;

  const updateMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <nav
      className={`${
        isDark ? "border-white/10 bg-black/70" : "border-black/10 bg-white/70"
      } fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="/"
          className={`${
            isDark ? "text-white" : "text-black"
          } text-2xl font-bold tracking-tight`}
        >
          Caleb<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Links */}
        {location.pathname !== "/more-projects" && (
          <div className="hidden items-center gap-8 md:flex">
            {["about", "projects", "experience", "educerts"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={navLinkClass(section)}
              >
                {section === "educerts"
                  ? "Credentials"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-purple-500" />
                )}
              </a>
            ))}
          </div>
        )}

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={updateMode}
            className="text-xl transition hover:scale-110"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <MdLightMode className="text-stone-400 hover:text-white" />
            ) : (
              <MdDarkMode className="text-black/70 hover:text-black" />
            )}
          </button>

          <a
            href="/Caleb_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark
                ? "text-stone-300 hover:text-white"
                : "text-black/70 hover:text-black"
            } flex items-center gap-2 rounded-full border border-stone-500 px-4 py-2 text-sm transition hover:border-purple-500`}
          >
            <HiOutlineDocumentText />
            Resume
          </a>

          <a
            href="https://github.com/calebtolorunleke"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark
                ? "text-stone-300 hover:text-white"
                : "text-black/70 hover:text-black"
            } text-xl transition hover:scale-110`}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/calebtol/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark
                ? "text-stone-300 hover:text-white"
                : "text-black/70 hover:text-black"
            } text-xl transition hover:scale-110`}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={updateMode}
            className="text-xl"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <MdLightMode className="text-stone-400" />
            ) : (
              <MdDarkMode className="text-black/70" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-3xl ${isDark ? "text-white" : "text-black"}`}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className={`border-t px-6 py-6 md:hidden ${
              isDark
                ? "border-stone-800 bg-black text-stone-300"
                : "border-stone-200 bg-white text-stone-700"
            }`}
          >
            <div className="flex flex-col gap-6">
              {location.pathname !== "/more-projects" && (
                <div className="flex flex-col gap-6">
                  {[
                    { id: "about", label: "About" },
                    { id: "projects", label: "Projects" },
                    { id: "experience", label: "Experience" },
                    { id: "educerts", label: "Credentials" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`${
                        activeSection === item.id
                          ? "font-bold text-purple-500"
                          : isDark
                          ? "text-stone-300"
                          : "text-stone-700"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}

              <a
                href="/Caleb_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-500"
              >
                <HiOutlineDocumentText />
                Resume
              </a>

              <div className="flex items-center gap-5 pt-2 text-2xl">
                <a
                  href="https://github.com/calebtolorunleke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "text-stone-400 hover:text-white" : "text-stone-600 hover:text-black"}
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/calebtol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "text-stone-400 hover:text-white" : "text-stone-600 hover:text-black"}
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