import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = ({ isDark }) => {
  return (
    <section id="experience" className="pb-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mb-20 text-center text-4xl font-semibold tracking-tight ${
          !isDark && "text-stone-900"
        }`}
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
            className={`group relative border-l pl-8 pb-16 ${
              isDark ? "border-stone-800" : "border-stone-300"
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 transition-all duration-300 ${
                isDark
                  ? "border-black bg-stone-400 group-hover:bg-white"
                  : "border-white bg-stone-500 group-hover:bg-stone-900"
              }`}
            />

            {/* Year */}
            <p
              className={`mb-3 text-sm tracking-wide font-medium ${
                isDark ? "text-stone-500" : "text-stone-600"
              }`}
            >
              {experience.year}
            </p>

            {/* Role */}
            <h3
              className={`text-2xl font-semibold ${
                isDark ? "text-white" : "text-stone-900"
              }`}
            >
              {experience.role}
            </h3>

            {/* Company */}
            <p
              className={`mt-1 text-base font-medium ${
                isDark ? "text-stone-400" : "text-indigo-600"
              }`}
            >
              {experience.company}
            </p>

            {/* Description */}
            <ul className="mt-5 max-w-3xl space-y-3">
              {experience.description.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 leading-7 ${
                    isDark ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  <span
                    className={`mt-3 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                      isDark ? "bg-stone-400" : "bg-stone-500"
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    isDark ? "text-stone-500" : "text-stone-600"
                  }`}
                >
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
