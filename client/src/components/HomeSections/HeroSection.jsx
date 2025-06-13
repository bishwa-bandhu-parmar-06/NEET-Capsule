import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import StudentsImg from "../../assets/students.png";

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
    <section className="h-screen min-h-[700px] flex items-center relative overflow-hidden bg-gray-50">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={backgroundVariants}
        className="absolute -right-48 -top-1/4 w-[800px] h-[150%] bg-gradient-to-br from-green-600 to-teal-500 transform rotate-12 z-0 rounded-3xl shadow-xl"
      ></motion.div>

      <div className="container mx-auto px-6 flex items-center justify-between relative ml-28 z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-1/2 space-y-8 text-gray-800 pl-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg font-medium text-green-600 tracking-wider"
            >
              A One step solution for your NEET preparation
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-6xl font-bold leading-tight"
            >
              NEET <span className="text-teal-600">CAPSULE</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl font-semibold text-gray-700"
            >
              Premium Mentorship by{" "}
              <span className="text-green-600">Top MBBS Students</span>
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-lg"
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
            className="px-10 py-4 cursor-pointer bg-gradient-to-r from-green-600 to-teal-500 text-white font-bold rounded-full hover:from-green-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Book a Free Session
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
          className="w-1/2 flex justify-end pr-16"
        >
          <div className="relative mr-20">
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              animate={inView ? { opacity: 1, rotate: 3 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -inset-6 border-4 border-teal-400 rounded-xl transform z-0"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={inView ? { opacity: 1, rotate: -2 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -inset-4 border-4 border-green-400 rounded-xl transform z-0"
            ></motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              src={StudentsImg}
              alt="NEET Students learning"
              className="relative max-w-lg rounded-xl shadow-2xl z-10 border-4 border-white transform"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;