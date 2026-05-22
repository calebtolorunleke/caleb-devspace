import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-16">
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
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
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
                    className="w-full max-w-md rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.03]"
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
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-stone-400 leading-relaxed mb-5">
                  {project.description}
                </p>

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
      </div>
    </div>
  );
};

export default Projects;