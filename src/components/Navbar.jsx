import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineMenuAlt3,
  HiX,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight text-white">
          Caleb<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-stone-300 hover:text-white transition"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm text-stone-300 hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-sm text-stone-300 hover:text-white transition"
          >
            Experience
          </a>

          {/* NEW: Educerts */}
          <a
            href="#educerts"
            className="flex items-center gap-2 text-sm text-stone-300 hover:text-white transition"
          >
            Educerts
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Resume */}
          <a
            href="/Caleb_Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2 text-sm text-stone-300 transition hover:border-purple-500 hover:text-white"
          >
            <HiOutlineDocumentText />
            Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/calebtolorunleke"
            target="_blank"
            className="text-xl text-stone-400 hover:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/calebtol/"
            target="_blank"
            className="text-xl text-stone-400 hover:text-white hover:scale-110 transition"
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
              <a
                onClick={() => setIsOpen(false)}
                href="#about"
                className="text-stone-300 hover:text-white"
              >
                About
              </a>

              <a
                onClick={() => setIsOpen(false)}
                href="#projects"
                className="text-stone-300 hover:text-white"
              >
                Projects
              </a>

              <a
                onClick={() => setIsOpen(false)}
                href="#experience"
                className="text-stone-300 hover:text-white"
              >
                Experience
              </a>

              {/* NEW MOBILE */}
              <a
                onClick={() => setIsOpen(false)}
                href="#educerts"
                className="flex items-center gap-2 text-stone-300 hover:text-white"
              >
                Educerts
              </a>

              <a
                href="/Caleb_Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 text-stone-300 hover:text-white"
              >
                <HiOutlineDocumentText />
                Resume
              </a>

              {/* Socials */}
              <div className="flex items-center gap-5 pt-2 text-2xl">
                <a
                  href="https://github.com/calebtolorunleke"
                  className="text-stone-400 hover:text-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/calebtol/"
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
