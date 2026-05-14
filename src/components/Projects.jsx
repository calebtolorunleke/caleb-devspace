// import { PROJECTS } from "../constants/index";
// import { motion } from "framer-motion";

// const Projects = () => {
//   return (
//     <div className="pb-4">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Projects
//       </motion.h2>
//       <div>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full lg:w-1/4"
//             >
//               <img
//                 src={project.image}
//                 width={250}
//                 height={250}
//                 alt={project.title}
//                 className="mb-6 rounded"
//               />
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4 p-6"
//             >
//               <h3 className="mb-2 font-semibold text-2xl ">{project.title}</h3>
//               <p className="mb-4 text-stone-400"> {project.description}</p>
//               {project.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="rounded mr-2 bg-stone-900 p-2 text-sm font-medium text-stone-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="mb-12 flex flex-wrap lg:justify-center items-center transition duration-300 hover:scale-[1.01]"
          >
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 w-[250px] rounded-lg shadow-md hover:scale-105 transition duration-300"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl lg:w-3/4 p-6"
            >
              <h3 className="mb-2 font-semibold text-2xl text-white">
                {project.title}
              </h3>

              <p className="mb-4 text-stone-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300 hover:bg-stone-800 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-stone-200 transition cursor-pointer"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border border-stone-500 text-stone-300 text-sm font-medium hover:bg-stone-800 transition cursor-pointer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
