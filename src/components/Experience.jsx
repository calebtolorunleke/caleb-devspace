import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="pb-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center text-4xl font-semibold tracking-tight"
      >
        Experience
      </motion.h2>

      <div className="mx-auto max-w-5xl">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border-l border-stone-800 pl-8 pb-16"
          >
            {/* timeline dot */}
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-black bg-stone-400 group-hover:bg-white transition-all duration-300" />

            {/* year */}
            <p className="mb-3 text-sm tracking-wide text-stone-500">
              {experience.year}
            </p>

            {/* role */}
            <h3 className="text-2xl font-semibold text-white">
              {experience.role}
            </h3>

            {/* company */}
            <p className="mt-1 text-base text-stone-400">
              {experience.company}
            </p>

            {/* description */}
            {/* description */}
            <ul className="mt-5 max-w-3xl space-y-3">
              {experience.description.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-stone-300 leading-7"
                >
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-stone-400 flex-shrink-0" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* tech stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="text-sm text-stone-500">
                  {tech}
                  {i !== experience.technologies.length - 1 && " •"}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
