// import { EXPERIENCES } from "../constants";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <motion.div
//       whileInView={{ opacity: 1, y: 0 }}
//       initial={{ opacity: 0, y: -100 }}
//       transition={{ duration: 0.5 }}
//       className="pb-4"
//     >
//       <h2 className="my-20 text-center text-4xl">Experience</h2>
//       <div>
//         {EXPERIENCES.map((experience, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: -100 }}
//               transition={{ duration: 0.5 }}
//               className="w-full lg:w-1/4"
//             >
//               <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h3 className="mb-2 text-xl font-semibold">
//                 {experience.role} -{" "}
//                 <span className="text-sm text-stone-500">
//                   {experience.company}
//                 </span>
//               </h3>
//               <p className="mb-4 text-stone-400">{experience.description}</p>{" "}
//               {experience.technologies.map((tech, index) => (
//                 <span
//                   className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 "
//                   key={index}
//                 >
//                   {" "}
//                   {tech}{" "}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Experience;



// import { EXPERIENCES } from "../constants";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: -60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="pb-16 px-4"
//     >
//       <h2 className="my-20 text-center text-4xl font-semibold">
//         Experience
//       </h2>

//       <div className="mx-auto max-w-5xl space-y-8">
//         {EXPERIENCES.map((experience, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ scale: 1.02 }}
//             className="
//               relative overflow-hidden rounded-2xl
//               border border-white/10
//               bg-white/5
//               backdrop-blur-xl
//               shadow-lg
//               p-6 md:p-8
//               flex flex-col md:flex-row md:items-start gap-6
//             "
//           >
//             {/* Glow effect */}
//             <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

//             {/* Left side (year) */}
//             <div className="md:w-1/4">
//               <p className="text-sm text-stone-400">
//                 {experience.year}
//               </p>
//             </div>

//             {/* Right side (content) */}
//             <div className="md:w-3/4">
//               <h3 className="text-xl font-semibold text-white">
//                 {experience.role}{" "}
//                 <span className="text-sm text-stone-400">
//                   — {experience.company}
//                 </span>
//               </h3>

//               <p className="mt-3 text-stone-300 leading-relaxed">
//                 {experience.description}
//               </p>

//               <div className="mt-5 flex flex-wrap gap-2">
//                 {experience.technologies.map((tech) => (
//                   <span
//                     key={`${experience.company}-${tech}`}
//                     className="
//                       rounded-full
//                       bg-white/10
//                       border border-white/10
//                       px-3 py-1
//                       text-xs text-stone-200
//                       backdrop-blur
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Experience;



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
            <p className="mt-5 max-w-3xl leading-8 text-stone-300">
              {experience.description}
            </p>

            {/* tech stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm text-stone-500"
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