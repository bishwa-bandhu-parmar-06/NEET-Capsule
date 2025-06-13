import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import StudentsImg from "../../assets/Students.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { x: 100, opacity: 0, rotate: -5 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 1,
    transition: {
      duration: 1,
      ease: "anticipate",
    },
  },
};

const backgroundVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const HeroSection = ({ inView }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gray-50 py-16 md:py-0">
      {/* Background with reduced opacity on mobile for better text visibility */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={backgroundVariants}
        className="absolute -right-48 -top-1/4 w-[800px] h-[150%] bg-gradient-to-br from-green-600 to-teal-500 transform rotate-12 z-0 rounded-3xl shadow-xl opacity-70 md:opacity-100"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between relative md:ml-12 lg:ml-28 z-10 gap-8 md:gap-0">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full md:w-1/2 space-y-6 md:space-y-8 text-gray-800 px-4 sm:px-6 md:pl-12 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg font-medium text-green-600 md:text-green-600 tracking-wider bg-white/80 md:bg-transparent px-2 py-1 md:px-0 md:py-0 rounded-lg inline-block"
            >
              A One step solution for your NEET preparation
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900"
            >
              NEET <span className="text-teal-700 md:text-teal-600">CAPSULE</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-semibold text-gray-900 md:text-gray-700 bg-white/80 md:bg-transparent px-2 py-1 md:px-0 md:py-0 rounded-lg"
            >
              Premium Mentorship by{" "}
              <span className="text-green-700 md:text-green-600">Top MBBS Students</span>
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-800 md:text-gray-600 max-w-lg mx-auto md:mx-0 bg-white/80 md:bg-transparent px-4 py-2 md:px-0 md:py-0 rounded-lg"
            >
              Personalized guidance, strategic planning, and comprehensive
              care for NEET UG aspirants
            </motion.p>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("/freeSession")}
            className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 cursor-pointer bg-gradient-to-r from-green-700 to-teal-600 md:from-green-600 md:to-teal-500 text-white font-bold rounded-full hover:from-green-800 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
          >
            Book a Free Session
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
          className="w-full md:w-1/2 flex justify-center md:justify-end px-4 sm:px-6 md:pr-8 lg:pr-16 mb-8 md:mb-0"
        >
          <div className="relative mx-auto md:mr-8 lg:mr-20 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              animate={inView ? { opacity: 1, rotate: 3 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -inset-4 sm:-inset-5 md:-inset-6 border-4 border-teal-400 rounded-xl transform z-0"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={inView ? { opacity: 1, rotate: -2 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -inset-3 sm:-inset-4 border-4 border-green-400 rounded-xl transform z-0"
            ></motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              src={StudentsImg}
              alt="NEET Students learning"
              className="relative w-full rounded-xl shadow-2xl z-10 border-4 border-white transform"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;