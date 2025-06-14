import React from 'react';
import { motion } from 'framer-motion';
import { FaBookMedical, FaBrain, FaClock, FaChartLine } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "5 Proven Study Techniques for NEET UG Success",
    excerpt: "Discover the most effective study methods used by top rankers to maximize your preparation efficiency.",
    icon: <FaBookMedical className="text-3xl text-blue-500" />,
    delay: 0.1
  },
  {
    id: 2,
    title: "Mindset Matters: Developing a Champion's Attitude",
    excerpt: "How cultivating the right mindset can improve your performance by up to 40% in NEET exams.",
    icon: <FaBrain className="text-3xl text-green-500" />,
    delay: 0.2
  },
  {
    id: 3,
    title: "Time Management Secrets for NEET Aspirants",
    excerpt: "Learn how to balance school, coaching, and self-study without burning out.",
    icon: <FaClock className="text-3xl text-yellow-500" />,
    delay: 0.3
  },
  {
    id: 4,
    title: "Analyzing NEET 2023: Trends and Predictions for 2024",
    excerpt: "Expert analysis of previous year's paper and what it means for your preparation strategy.",
    icon: <FaChartLine className="text-3xl text-purple-500" />,
    delay: 0.4
  }
];

const BlogsPage = () => {
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
            NEET UG Resource Hub
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Expert insights, strategies, and tips to help you crack NEET with top ranks
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.delay }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {post.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want personalized guidance?</h2>
          <p className="text-gray-600 mb-6">Our mentors can create custom study plans based on your strengths and weaknesses.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Book a Free Session
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogsPage;