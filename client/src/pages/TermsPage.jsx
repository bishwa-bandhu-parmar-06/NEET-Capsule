import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using NeetCapsule's services, you agree to be bound by these Terms and Conditions. If you disagree with any part, you may not access our services.",
      delay: 0.1
    },
    {
      title: "2. Mentorship Services",
      content: "Our mentorship includes guidance sessions, study plans, and academic advice. We don't guarantee specific exam results as they depend on individual effort and circumstances.",
      delay: 0.2
    },
    {
      title: "3. Payment and Refunds",
      content: "All mentorship fees are payable in advance. Refunds are available within 7 days of purchase if no services have been utilized, minus a 10% processing fee.",
      delay: 0.3
    },
    {
      title: "4. Student Conduct",
      content: "Students must maintain respectful communication with mentors. We reserve the right to terminate services for inappropriate behavior without refund.",
      delay: 0.4
    },
    {
      title: "5. Intellectual Property",
      content: "All study materials provided are for personal use only. Redistribution or commercial use without permission is strictly prohibited.",
      delay: 0.5
    },
    {
      title: "6. Limitation of Liability",
      content: "NeetCapsule isn't liable for any indirect, incidental, or consequential damages arising from use of our services.",
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
            Terms & Conditions
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Last updated: June 2023
          </p>
        </motion.div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: section.delay }}
              className="p-6 border-b border-gray-200 last:border-b-0"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>By using our services, you acknowledge that you have read and understood these Terms and Conditions.</p>
          <p className="mt-2">For any questions, please contact us at legal@neetcapsule.com</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;