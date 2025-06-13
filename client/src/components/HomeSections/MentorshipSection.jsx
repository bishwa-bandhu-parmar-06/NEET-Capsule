import React from "react";
import { motion, useTransform } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import CapsuleModel from "./CapsuleModel";
import Counter from "./Counter";

const MentorshipSection = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, -80], { clamp: false });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const listItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.07,
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="relative h-screen bg-gradient-to-r from-green-400 to-teal-600 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <CapsuleModel />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.8}
            enablePan={false}
            rotateSpeed={0.5}
          />
          <Stars 
            radius={150} 
            depth={60} 
            count={6000} 
            factor={5} 
            saturation={0} 
            fade 
            speed={2} 
          />
        </Canvas>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-center gap-12"
        style={{ y, opacity, scale }}
      >
        {/* Left Column */}
        <div className="lg:w-1/2 ml-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeInOut" }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Dear NEET Aspirants,
          </motion.h2>

          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.7, ease: "easeInOut" }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Are you ready to crack NEET UG with confidence? Our <span className="font-bold">NEET CAPSULE Mentorship Program</span> provides the perfect strategy and expert guidance you need!
          </motion.p>

          {/* Counter Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[{ count: 15000, label: "Students Enrolled" }, { count: 250, label: "Expert Mentors" }].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <h3 className="text-3xl font-bold mb-2 text-teal-500">
                  <Counter target={item.count} duration={2.5} />+
                </h3>
                <p className="text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="bg-white cursor-pointer text-teal-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Enroll Now & Get Ahead!
          </motion.button>
        </div>

        {/* Right Column */}
        <motion.div 
          className="lg:w-1/2 bg-white mr-20 bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-teal-500">Why Choose NEET CAPSULE?</h3>
          
          <ul className="space-y-4">
            {[
              "Personalized 1-on-1 Mentorship from NEET experts",
              "AI-Based Daily Tests with Detailed Analysis",
              "Scientific Study Plan for Maximum Retention",
              "Instant Doubt-Solving Sessions",
              "Premium Study Material & Topper's Notes",
              "Time Management & Exam Strategy Workshops",
              "Quick Revision Strategies for Last-Minute Prep",
              "Backlog Clearance Special Programs"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={listItemVariants}
                viewport={{ once: true, margin: "-50px" }}
              >
                <svg className="w-5 h-5 mt-1 mr-3 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div 
            className="mt-8 pt-6 border-t border-white border-opacity-20"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-sm mb-2">Need more information?</p>
            <a href="tel:+918720943648" className="text-xl font-bold hover:underline">
              <i className="fas fa-phone-alt mr-2"></i> +91 87209 43648
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MentorshipSection;
