// import { BiLogoPostgresql } from "react-icons/bi";
// import { DiRedis } from "react-icons/di";
// import { FaGitAlt, FaNodeJs } from "react-icons/fa";
// import { RiReactjsLine } from "react-icons/ri";
// import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
// import { motion } from "framer-motion";

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "linear",
//     },
//   },
// });

// const Technologies = ({ isDark, setIsDark }) => {
//   return (
//     <div className="pb-24">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className={`${!isDark && "text-black"} my-20 text-center text-4xl`}
//       >
//         Technical Skills
//       </motion.h2>

//       <motion.div
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(2.5)}
//           className="p-4"
//         >
//           <RiReactjsLine className={`text-7xl ${isDark ? "text-cyan-300" : "text-cyan-600"}`} />
//         </motion.div>

//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(3)}
//           className="p-4"
//         >
//           <TbBrandNextjs className={`text-7xl ${!isDark && "text-black"}`} />
//         </motion.div>

//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(3.5)}
//           className="p-4"
//         >
//           <SiTypescript className="text-7xl text-blue-500" />
//         </motion.div>

//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(4)}
//           className="p-4"
//         >
//           <SiTailwindcss className="text-7xl text-cyan-400" />
//         </motion.div>

//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(5)}
//           className="p-4"
//         >
//           <SiMongodb className="text-7xl text-green-500" />
//         </motion.div>

//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(2)}
//           className="p-4"
//         >
//           <DiRedis className="text-7xl text-red-700" />
//         </motion.div>

//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(6)}
//           className="p-4"
//         >
//           <FaNodeJs className="text-7xl text-green-500" />
//         </motion.div>

//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(4.5)}
//           className="p-4"
//         >
//           <FaGitAlt className="text-7xl text-orange-500" />
//         </motion.div>

//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={iconVariants(4)}
//           className="p-4"
//         >
//           <BiLogoPostgresql className="text-7xl text-blue-500" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;



import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const Technologies = ({ isDark }) => {
  return (
    <div className="pb-24">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={`${!isDark && "text-black"} my-20 text-center text-4xl font-semibold`}
      >
        Technical Skills
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
          <RiReactjsLine className={`text-7xl ${isDark ? "text-cyan-300" : "text-cyan-600"}`} />
        </motion.div>

        {/* Next.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <TbBrandNextjs className={`text-7xl ${!isDark && "text-black"}`} />
        </motion.div>

        {/* TypeScript */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
          <SiTypescript className={`text-7xl ${isDark ? "text-blue-400" : "text-blue-600"}`} />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <SiTailwindcss className={`text-7xl ${isDark ? "text-cyan-400" : "text-sky-500"}`} />
        </motion.div>

        {/* MongoDB */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
          <SiMongodb className={`text-7xl ${isDark ? "text-green-500" : "text-emerald-600"}`} />
        </motion.div>

        {/* Redis */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
          <DiRedis className="text-7xl text-red-600" />
        </motion.div>

        {/* Node.js */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <FaNodeJs className={`text-7xl ${isDark ? "text-green-500" : "text-green-600"}`} />
        </motion.div>

        {/* Git */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)} className="p-4">
          <FaGitAlt className="text-7xl text-orange-600" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <BiLogoPostgresql className={`text-7xl ${isDark ? "text-blue-400" : "text-sky-700"}`} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;