


import { motion } from "framer-motion";
import { education, certifications } from "../constants/index";

const Educerts = ({ isDark }) => {
  return (
    <section className="py-24 px-6 md:px-10" id="educerts">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2
          className={`text-3xl md:text-4xl font-semibold ${
            isDark ? "text-white" : "text-stone-900"
          }`}
        >
          Education & Certifications
        </h2>
        <p
          className={`mt-2 text-sm ${
            isDark ? "text-stone-400" : "text-stone-600"
          }`}
        >
          Academic foundation & verified professional credentials
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* LEFT — EDUCATION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`rounded-2xl border p-6 shadow-lg backdrop-blur-xl transition-colors ${
            isDark
              ? "border-stone-800 bg-stone-950/40"
              : "border-stone-200 bg-stone-50/80 shadow-stone-200/50"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-6 ${
              isDark ? "text-white" : "text-stone-900"
            }`}
          >
            Education
          </h3>

          <div className="space-y-5">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border transition ${
                  isDark
                    ? "border-stone-800 bg-stone-900/40 hover:bg-stone-900/70"
                    : "border-stone-200 bg-white hover:bg-stone-100/80 shadow-sm"
                }`}
              >
                <p
                  className={`font-medium text-sm ${
                    isDark ? "text-white" : "text-stone-900"
                  }`}
                >
                  {edu.school}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-stone-400" : "text-stone-600"
                  }`}
                >
                  {edu.degree}
                </p>
                <span
                  className={`text-xs block mt-2 ${
                    isDark ? "text-stone-500" : "text-stone-500"
                  }`}
                >
                  {edu.period}
                </span>
              </div>
            ))}
          </div>

          <p
            className={`mt-5 text-xs ${
              isDark ? "text-stone-500" : "text-stone-600"
            }`}
          >
            Academic background focused on systems, computing, and real-world
            engineering foundations.
          </p>
        </motion.div>

        {/* RIGHT — CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`rounded-2xl border p-6 shadow-lg backdrop-blur-xl transition-colors ${
            isDark
              ? "border-stone-800 bg-stone-950/40"
              : "border-stone-200 bg-stone-50/80 shadow-stone-200/50"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-stone-900"
            }`}
          >
            Certifications
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`flex items-start justify-between gap-4 pb-3 border-b last:border-none ${
                  isDark ? "border-stone-800" : "border-stone-200"
                }`}
              >
                <div>
                  <p
                    className={`font-medium text-sm ${
                      isDark ? "text-white" : "text-stone-900"
                    }`}
                  >
                    {cert.title}
                  </p>
                  <p
                    className={`text-xs ${
                      isDark ? "text-stone-400" : "text-stone-600"
                    }`}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <span
                  className={`text-xs ${
                    isDark ? "text-stone-500" : "text-stone-500"
                  }`}
                >
                  {cert.year}
                </span>
              </div>
            ))}
          </div>

          <p
            className={`mt-5 text-xs ${
              isDark ? "text-stone-500" : "text-stone-600"
            }`}
          >
            Continuous learning through cloud, backend, frontend, and enterprise
            systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Educerts;