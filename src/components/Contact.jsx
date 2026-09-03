// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";

// const Contact = ({isDark}) => {
//   return (
//     <section className="border-t border-stone-200 py-24 px-6 md:px-10">
//       {/* HEADLINE */}
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -40 }}
//         transition={{ duration: 0.5 }}
//         className="text-center text-3xl md:text-4xl font-semibold"
//       >Let's Build Reliable Software  
//       </motion.h2>

//       <p className="text-center text-gray-500 mt-4 max-w-xl mx-auto">
//         I’m currently open to Frontend Engineer, React Developer, Full-Stack
//         Engineer, and Software Engineer opportunities across Canada.
//       </p>

//       {/* CTA BUTTONS */}
//       <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
//         <a
//           href={`mailto:${CONTACT.email}`}
//           className="px-6 py-3 bg-black text-white rounded-xl text-center hover:scale-[1.02] transition"
//         >
//           Email Me
//         </a>

//         <a
//           href="https://github.com/calebtolorunleke"
//           target="_blank"
//           className="px-6 py-3 border rounded-xl text-center hover:bg-gray-50 transition"
//         >
//           GitHub
//         </a>

//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           className="px-6 py-3 border rounded-xl text-center hover:bg-gray-50 transition"
//         >
//           LinkedIn
//         </a>
//       </div>

//       {/* SECONDARY INFO */}
//       <div className="text-center text-sm text-gray-500 mt-12 space-y-2">
//         <p>{CONTACT.address}</p>
//         {/* <p>{CONTACT.phoneNo}</p> */}
//         <p className="text-black font-medium">{CONTACT.email}</p>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = ({ isDark }) => {
  return (
    <section
      className={`border-t py-24 px-6 md:px-10 transition-colors ${
        isDark ? "border-stone-800" : "border-stone-200"
      }`}
    >
      {/* HEADLINE */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className={`text-center text-3xl md:text-4xl font-semibold ${
          isDark ? "text-white" : "text-stone-900"
        }`}
      >
        Let's Build Reliable Software
      </motion.h2>

      <p
        className={`text-center mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed ${
          isDark ? "text-stone-400" : "text-stone-600"
        }`}
      >
        I’m currently open to Frontend Engineer, React Developer, Full-Stack
        Engineer, and Software Engineer opportunities across Canada.
      </p>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        {/* Email CTA */}
        <a
          href={`mailto:${CONTACT.email}`}
          className={`px-6 py-3 rounded-xl text-center text-sm font-medium hover:scale-[1.02] transition ${
            isDark
              ? "bg-white text-black hover:bg-stone-200"
              : "bg-stone-900 text-white hover:bg-stone-800"
          }`}
        >
          Email Me
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/calebtolorunleke"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 border rounded-xl text-center text-sm font-medium transition ${
            isDark
              ? "border-stone-700 text-stone-300 hover:bg-stone-800"
              : "border-stone-300 text-stone-700 hover:bg-stone-100"
          }`}
        >
          GitHub
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 border rounded-xl text-center text-sm font-medium transition ${
            isDark
              ? "border-stone-700 text-stone-300 hover:bg-stone-800"
              : "border-stone-300 text-stone-700 hover:bg-stone-100"
          }`}
        >
          LinkedIn
        </a>
      </div>

      {/* SECONDARY INFO */}
      <div className="text-center text-sm mt-12 space-y-2">
        <p className={isDark ? "text-stone-500" : "text-stone-600"}>
          {CONTACT.address}
        </p>

        <p
          className={`font-medium ${
            isDark ? "text-stone-300" : "text-stone-900"
          }`}
        >
          {CONTACT.email}
        </p>
      </div>
    </section>
  );
};

export default Contact;