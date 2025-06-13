import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const FeaturesSection = ({ controls }) => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-6 py-12 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-8 text-white"
        >
          Transform Your NEET Preparation
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-purple-100"
        >
          Our proven strategies have helped 10,000+ students achieve their medical dreams
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '📚', title: 'Comprehensive Study Plans', desc: 'Customized for your learning style' },
            { icon: '👨‍⚕️', title: 'Mentor Guidance', desc: 'Direct access to top MBBS students' },
            { icon: '📊', title: 'Performance Analytics', desc: 'Track your progress effectively' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <Link to="/mentorship-plan">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 cursor-pointer bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Journey Today
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-purple-100 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Trusted by 500+ schools nationwide
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;