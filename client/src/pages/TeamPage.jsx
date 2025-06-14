import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaGraduationCap, FaFlask, FaBook } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Dr. Ananya Sharma",
    role: "Chief Mentor - Biology",
    bio: "MBBS from AIIMS with 8 years of NEET mentoring experience. Has guided 50+ students to top 100 ranks.",
    icon: <FaUserMd className="text-3xl text-green-500" />,
    delay: 0.1
  },
  {
    name: "Prof. Rajiv Mehta",
    role: "Physics Expert",
    bio: "PhD in Physics from IIT Delhi. Specializes in making complex concepts simple for NEET aspirants.",
    icon: <FaFlask className="text-3xl text-blue-500" />,
    delay: 0.2
  },
  {
    name: "Dr. Priya Patel",
    role: "Chemistry Specialist",
    bio: "Former HOD of Chemistry at renowned coaching institute. Author of 'NEET Chemistry Simplified'.",
    icon: <FaFlask className="text-3xl text-purple-500" />,
    delay: 0.3
  },
  {
    name: "Vikram Singh",
    role: "Academic Strategist",
    bio: "NEET 2018 AIR 27. Helps students develop effective study plans and exam strategies.",
    icon: <FaBook className="text-3xl text-yellow-500" />,
    delay: 0.4
  },
  {
    name: "Neha Gupta",
    role: "Student Success Coach",
    bio: "Psychology expert specializing in exam stress management and performance optimization.",
    icon: <FaGraduationCap className="text-3xl text-red-500" />,
    delay: 0.5
  }
];

const TeamPage = () => {
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
            Meet Our Team
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            India's finest NEET mentors dedicated to your success
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: member.delay }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {member.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-1">{member.name}</h3>
                <p className="text-center text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Elite Mentor Team</h2>
          <p className="text-gray-600 mb-6">Are you a NEET expert passionate about mentoring? We're always looking for talented educators.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Apply to Mentor
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamPage;