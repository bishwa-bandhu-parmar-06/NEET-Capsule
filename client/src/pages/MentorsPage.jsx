import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUniversity, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const mentors = [
  {
    name: "Dr. Sanjay Verma",
    specialization: "Biology Expert",
    qualifications: "MD, 10+ years NEET mentoring",
    students: "200+ selections in top medical colleges",
    icon: <FaAward className="text-3xl text-green-500" />,
    delay: 0.1
  },
  {
    name: "Prof. Meena Krishnan",
    specialization: "Organic Chemistry",
    qualifications: "PhD Chemistry, IIT Bombay",
    students: "Specialist in reaction mechanisms",
    icon: <FaUniversity className="text-3xl text-blue-500" />,
    delay: 0.2
  },
  {
    name: "Dr. Arjun Kapoor",
    specialization: "Physics Concept Builder",
    qualifications: "MSc Physics, 8 years experience",
    students: "Known for simplifying complex topics",
    icon: <FaUserGraduate className="text-3xl text-purple-500" />,
    delay: 0.3
  },
  {
    name: "Dr. Priyanka Reddy",
    specialization: "Complete NEET Strategy",
    qualifications: "MBBS, NEET AIR 42 (2015)",
    students: "75+ top 100 rankers mentored",
    icon: <FaChalkboardTeacher className="text-3xl text-yellow-500" />,
    delay: 0.4
  }
];

const MentorPage = () => {
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
            Our Esteemed Mentors
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Learn from the best minds in NEET education
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: mentor.delay }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {mentor.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-1">{mentor.name}</h3>
                <p className="text-center font-medium text-blue-600 mb-3">{mentor.specialization}</p>
                <div className="text-center text-gray-600 space-y-2">
                  <p><span className="font-medium">Qualifications:</span> {mentor.qualifications}</p>
                  <p><span className="font-medium">Notable:</span> {mentor.students}</p>
                </div>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Mentor Match</h2>
          <p className="text-gray-600 mb-6">Take our 2-minute assessment to be matched with mentors suited to your learning style.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Take Mentor Match Quiz
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MentorPage;