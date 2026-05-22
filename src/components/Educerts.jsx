import { motion } from "framer-motion";

const education = [
  {
    school: "Obafemi Awolowo University",
    degree: "MSc Computer Science (Postgraduate)",
    period: "2023 - 2025",
  },
  {
    school: "Ekiti State University",
    degree: "BSc Biotechnology",
    period: "Completed",
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
  },
  {
    title: "Meta Full-Stack Developer Specialization",
    issuer: "Coursera (Meta)",
    year: "2025",
  },
  {
    title: "Full-Stack Developer Certification",
    issuer: "Tech Studio Academy",
    year: "2025",
  },
  {
    title: "Frontend Development Certification",
    issuer: "TechyJaunt",
    year: "2023",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    year: "2022",
  },
];

const Educerts = () => {
  return (
    <section
      className="py-24 px-6 md:px-10 border-t border-stone-900/40"
      id="educerts"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Education & Certifications
        </h2>
        <p className="text-stone-400 mt-2 text-sm">
          Academic foundation & verified professional credentials
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* LEFT — EDUCATION (dark premium cards) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-stone-800 bg-stone-950/40 backdrop-blur-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-6 text-white">Education</h3>

          <div className="space-y-5">
            {education.map((edu, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-stone-800 bg-stone-900/40 hover:bg-stone-900/70 transition"
              >
                <p className="font-medium text-sm text-white">{edu.school}</p>
                <p className="text-xs text-stone-400 mt-1">{edu.degree}</p>
                <span className="text-xs text-stone-500 block mt-2">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-stone-500">
            Academic background focused on systems, computing, and real-world
            engineering foundations.
          </p>
        </motion.div>

        {/* RIGHT — CERTIFICATIONS (your clean Stripe-style list) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-stone-800 bg-stone-950/40 backdrop-blur-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">
            Certifications
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 border-b border-stone-800 pb-3 last:border-none"
              >
                <div>
                  <p className="font-medium text-sm text-white">{cert.title}</p>
                  <p className="text-xs text-stone-400">{cert.issuer}</p>
                </div>

                <span className="text-xs text-stone-500">{cert.year}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-stone-500">
            Continuous learning through cloud, backend, frontend, and enterprise
            systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Educerts;
