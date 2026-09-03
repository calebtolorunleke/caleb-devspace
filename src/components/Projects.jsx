import { useLocation, useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = ({ isDark }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="pb-24">
      {/* HEADER */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className={` ${isDark ? "text-white" : "text-black"} ${isHome ? "my-20" : "mt-0 mb-20"} text-center text-4xl font-semibold `}
      >
        Projects
      </motion.h2>

      <div className="space-y-24">
        {(isHome ? PROJECTS.slice(0, 3) : PROJECTS).map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.title}
              className={` flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className={`${isDark ? "border-stone-800" : "border-stone-200"} relative z-10 w-full h-64 sm:h-72 md:h-80 lg:h-[400px] rounded-2xl border  object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]`}
                  />

                  {/* subtle glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                {/* PROJECT META */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className={`text-sm font-semibold ${
                      isDark ? "text-indigo-300" : "text-indigo-600"
                    }`}
                  >
                    {" "}
                    {project.role}
                  </span>

                  <span
                    className={isDark ? "text-stone-600" : "text-stone-800"}
                  >
                    •
                  </span>

                  <span
                    className={`text-sm ${
                      isDark ? "text-stone-400" : "text-stone-800"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-3 ${
                    isDark ? "text-white" : "text-stone-900"
                  }`}
                >
                  {project.title}
                </h3>

                <ul
                  className={`${!isDark && "bg-white/70"} p-2 mb-6 space-y-2`}
                >
                  {project.highlights?.slice(0, 3).map((highlight) => (
                    <li
                      key={highlight}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        isDark ? "text-stone-400" : "text-stone-600 "
                      }`}
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          isDark ? "bg-stone-500" : "bg-stone-400"
                        }`}
                      />{" "}
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* <p className="text-stone-400 leading-relaxed mb-5">
                  {project.description}
                </p> */}

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full transition hover:ease-in ${
                        isDark
                          ? "bg-stone-900 text-stone-300 hover:bg-stone-800"
                          : "bg-stone-900 text-stone-100 hover:bg-stone-800 border border-stone-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-xl bg-white text-black text-sm font-medium hover:scale-105 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="px-5 py-2 rounded-xl border border-stone-500 text-stone-300 text-sm font-medium hover:bg-stone-800 transition"
                      className={`px-5 py-2 rounded-xl border text-sm font-medium transition ${
                        isDark
                          ? "border-stone-500 text-stone-300 hover:bg-stone-800"
                          : "border-stone-900 text-stone-900 hover:bg-stone-100"
                      }`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
        {/* EXPLORE MORE */}{" "}
        {isHome && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-end pt-4"
          >
            {/* <button
              type="button"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/more-projects");
              }}
              className="group flex items-center gap-3 rounded-full border border-stone-700 px-7 py-3 text-sm font-medium tracking-wide text-stone-300 transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:bg-stone-900 hover:text-white cursor-pointer"
            > */}
            <button
              type="button"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/more-projects");
              }}
              className={`group flex items-center gap-3 rounded-full border px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                isDark
                  ? "border-stone-700 text-stone-300 hover:border-stone-400 hover:bg-stone-900 hover:text-white"
                  : "border-stone-400 text-stone-700 hover:border-stone-500 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              {" "}
              <span>Explore More</span>{" "}
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
