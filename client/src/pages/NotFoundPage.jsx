import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6 text-center">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 bg-[url('https://assets-global.website-files.com/5f6bc60e665f54545a1e52a5/615d5722326ab4671a5b00f0_noise.gif')]"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-2xl w-full relative z-10"
      >
        {/* 404 Number */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="absolute -left-20 -top-20 w-40 h-40 bg-blue-100 rounded-full opacity-70"
          />
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ y: 30 }}
            className="absolute -right-20 -bottom-20 w-48 h-48 bg-teal-100 rounded-full opacity-70"
          />
          <motion.h1
            className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
            variants={floatingVariants}
            animate="pulse"
          >
            404
          </motion.h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 mb-8 max-w-lg mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        {/* Animated illustration */}
        <motion.div
          variants={itemVariants}
          className="mb-10"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="inline-block"
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M100 20C56.2 20 20 56.2 20 100C20 143.8 56.2 180 100 180C143.8 180 180 143.8 180 100C180 56.2 143.8 20 100 20Z"
                stroke="#3B82F6"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M100 50C72.4 50 50 72.4 50 100C50 127.6 72.4 150 100 150C127.6 150 150 127.6 150 100C150 72.4 127.6 50 100 50Z"
                stroke="#10B981"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M100 80C89.5 80 80 89.5 80 100C80 110.5 89.5 120 100 120C110.5 120 120 110.5 120 100C120 89.5 110.5 80 100 80Z"
                stroke="#6366F1"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />
              <motion.path
                d="M70 70L40 40M160 40L130 70M130 130L160 160M70 130L40 160"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="0 1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 cursor-pointer py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Return to Homepage
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional help */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-gray-500"
        >
          <p className="mb-2">Still need help?</p>
          <motion.a
            href="mailto:support@neetcapsule.com"
            className="text-blue-600 hover:underline"
            whileHover={{ x: 3 }}
          >
            Contact our support team
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;