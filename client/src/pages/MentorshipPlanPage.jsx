import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaChartBar, FaClipboardCheck, FaHandsHelping } from 'react-icons/fa';

const plans = [
  {
    name: "Foundation Builder",
    price: "₹8,999/month",
    features: [
      "Weekly 1:1 mentorship sessions",
      "Custom study plan",
      "Monthly progress assessments",
      "Basic doubt resolution"
    ],
    bestFor: "Class 11 students starting preparation",
    icon: <FaClipboardCheck className="text-3xl text-blue-500" />,
    delay: 0.1
  },
  {
    name: "NEET Accelerator",
    price: "₹12,999/month",
    features: [
      "Bi-weekly 1:1 mentorship",
      "Advanced study strategies",
      "Weekly mock test analysis",
      "Priority doubt resolution"
    ],
    bestFor: "Class 12 students with 1-year preparation",
    icon: <FaChartBar className="text-3xl text-green-500" />,
    delay: 0.2
  },
  {
    name: "Top Ranker Program",
    price: "₹18,999/month",
    features: [
      "Daily mentorship access",
      "Personalized test series",
      "Exam temperament training",
      "24/7 doubt resolution"
    ],
    bestFor: "Repeaters aiming for top 100 ranks",
    icon: <FaUserMd className="text-3xl text-purple-500" />,
    delay: 0.3
  },
  {
    name: "Custom Elite Plan",
    price: "Contact Us",
    features: [
      "Completely tailored program",
      "Multiple mentors for different subjects",
      "Daily progress tracking",
      "Premium support"
    ],
    bestFor: "Students needing specialized attention",
    icon: <FaHandsHelping className="text-3xl text-yellow-500" />,
    delay: 0.4
  }
];

const MentorshipPlanPage = () => {
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
            NEET Mentorship Plans
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Structured guidance from India's top NEET mentors
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.delay }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-center text-blue-600 mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic mb-4">Best for: {plan.bestFor}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Enroll Now
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure which plan is right for you?</h2>
          <p className="text-gray-600 mb-6">Schedule a free consultation with our academic advisor.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Book Free Consultation
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MentorshipPlanPage;