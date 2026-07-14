import profilePic from "../assets/calebProfile.jpg";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const containerVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section className="pb-10 lg:pb-5">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-6">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-sm
              p-3
              shadow-2xl
              "
            >
              <img
                src={profilePic}
                alt="Caleb Adebayo"
                width={400}
                height={100}
                className="
                rounded-[24px]
                object-cover
                "
              />
            </motion.div>
          </div>
        </div>

        {/* TEXT */}
        <div className="w-full  lg:w-1/2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
            mt-12
            flex
            flex-col
            items-center
            lg:items-start
            "
          >
            <motion.h1
              variants={childVariants}
              className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-semibold
              tracking-[-0.05em]
              "
            >
              Caleb Adebayo
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="
              mt-4
              bg-gradient-to-r
              from-white
              via-stone-300
              to-stone-500
              bg-clip-text
              text-transparent
              text-xl
              lg:text-2xl
              font-medium
              "
            >
              Frontend-Focused Full Stack Engineer
            </motion.p>

            <motion.p
              variants={childVariants}
              className="
              mt-6
              max-w-3xl
              text-lg
              text-stone-400
              leading-relaxed
              "
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA */}

            <motion.div
              variants={childVariants}
              className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
              "
            >
              {/* Projects FIRST */}

              <a
                href="#projects"
                className="
                rounded-full
                bg-white
                text-black
                px-7
                py-3.5
                font-medium
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-stone-200
                "
              >
                View Projects
              </a>

              {/* Resume */}

              <a
                href="./Caleb_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                backdrop-blur-sm
                px-7
                py-3.5
                flex
                items-center
                gap-2
                font-medium
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/[0.06]
                hover:scale-[1.03]
                "
              >
                View Resume
                <HiArrowUpRight
                  className="
                  text-lg
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  "
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
