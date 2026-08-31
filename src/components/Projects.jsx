import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-24">
      {/* HEADER */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold text-white"
      >
        Projects
      </motion.h2>

      <div className="space-y-24">
        {PROJECTS.slice(0, 3).map((project, index) => {
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
                    className="relative z-10 w-full h-64 sm:h-72 md:h-80 lg:h-[400px] rounded-2xl border border-stone-800 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
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
                  <span className="text-sm font-medium text-indigo-300">
                    {project.role}
                  </span>

                  <span className="text-stone-600">•</span>

                  <span className="text-sm text-stone-400">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <ul className="mb-6 space-y-2">
                  {project.highlights?.slice(0, 3).map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-stone-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" />
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
                      className="px-3 py-1 text-sm rounded-full bg-stone-900 text-stone-300 hover:bg-stone-800 transition"
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
                      className="px-5 py-2 rounded-xl border border-stone-500 text-stone-300 text-sm font-medium hover:bg-stone-800 transition"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-end pt-4"
        >
          <button
            type="button"
            onClick={() => {
              navigate("/more-projects");
              window.scrollTo(0, 0);
            }}
            className="group flex items-center gap-3 rounded-full border border-stone-700 px-7 py-3 text-sm font-medium tracking-wide text-stone-300 transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:bg-stone-900 hover:text-white cursor-pointer"
          >
            <span>Explore More</span>{" "}
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
