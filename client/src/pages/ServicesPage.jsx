import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBookOpen, FaClipboardList, FaUserFriends, FaHeadset } from 'react-icons/fa';

const services = [
  {
    title: "Personalized Mentorship",
    description: "1:1 guidance from top NEET mentors tailored to your learning style and pace.",
    icon: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
    delay: 0.1
  },
  {
    title: "Custom Study Plans",
    description: "Scientifically designed schedules that optimize your preparation time effectively.",
    icon: <FaBookOpen className="text-4xl text-green-500" />,
    delay: 0.2
  },
  {
    title: "Test Series & Analysis",
    description: "Comprehensive test series with detailed performance analytics and improvement plans.",
    icon: <FaClipboardList className="text-4xl text-purple-500" />,
    delay: 0.3
  },
  {
    title: "Doubt Resolution",
    description: "24/7 access to subject experts for instant clarification of concepts.",
    icon: <FaHeadset className="text-4xl text-yellow-500" />,
    delay: 0.4
  },
  {
    title: "Peer Learning Groups",
    description: "Collaborate with fellow aspirants in moderated study groups for mutual growth.",
    icon: <FaUserFriends className="text-4xl text-red-500" />,
    delay: 0.5
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Comprehensive Services
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Everything you need to crack NEET with confidence
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 bg-blue-600 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your NEET Preparation?</h2>
          <p className="mb-6">Join hundreds of successful NEET aspirants who achieved their dream ranks with our guidance.</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Get Started Today
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;