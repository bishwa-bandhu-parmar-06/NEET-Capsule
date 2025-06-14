import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  const privacyPoints = [
    {
      title: "Information We Collect",
      content: "We collect personal information including name, contact details, academic history, and payment information when you register for our services.",
      delay: 0.1
    },
    {
      title: "How We Use Information",
      content: "Your information helps us provide personalized mentorship, improve our services, and communicate important updates. We never sell your data to third parties.",
      delay: 0.2
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures including encryption and secure servers to protect your personal information.",
      delay: 0.3
    },
    {
      title: "Cookies and Tracking",
      content: "Our website uses cookies to enhance user experience and analyze site traffic. You can disable cookies in your browser settings.",
      delay: 0.4
    },
    {
      title: "Third-Party Services",
      content: "We may use trusted third-party services for payment processing and analytics, who are obligated to maintain confidentiality.",
      delay: 0.5
    },
    {
      title: "Your Rights",
      content: "You can request access to, correction of, or deletion of your personal data by contacting us at privacy@neetcapsule.com.",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Protecting your data is our priority
          </p>
        </motion.div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {privacyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: point.delay }}
              className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 bg-blue-50 rounded-lg p-6 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Our Privacy Team</h3>
          <p className="text-gray-600 mb-4">For any privacy-related concerns or requests, please contact:</p>
          <p className="text-blue-600 font-medium">privacy@neetcapsule.com</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;