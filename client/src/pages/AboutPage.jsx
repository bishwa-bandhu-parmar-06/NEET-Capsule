import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaUserGraduate, FaChartLine, FaAward } from 'react-icons/fa';
import teamImage from '../assets/Students.png';
import founderImage from '../assets/Students.png';

const AboutPage = () => {
  const stats = [
    { value: '15,000+', label: 'Students Mentored', icon: <FaUserGraduate /> },
    { value: '92%', label: 'Success Rate', icon: <FaChartLine /> },
    { value: '250+', label: 'Expert Mentors', icon: <FaFlask /> },
    { value: '42', label: 'AIR < 100', icon: <FaAward /> }
  ];

  const timeline = [
    { year: '2018', event: 'Founded by Dr. Rohan Sharma (AIR 12)' },
    { year: '2019', event: 'First 1000 students enrolled' },
    { year: '2020', event: 'Launched AI-powered test series' },
    { year: '2021', event: 'Expanded mentor network to 100+' },
    { year: '2022', event: 'Pioneered 90-Day Crash Course' },
    { year: '2023', event: '15,000+ students community' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming NEET Preparation Since 2018</h1>
            <p className="text-xl opacity-90">
              From a single mentor's vision to India's most trusted NEET mentorship platform
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img 
                src={teamImage}
                alt="NEET Capsule Team"
                className="rounded-xl shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="lg:w-1/2">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Our <span className="text-teal-600">Mission</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                To democratize quality NEET preparation by connecting aspirants with top mentors who've actually cracked the exam. We believe every student deserves personalized guidance, regardless of their location or financial background.
              </motion.p>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <FaFlask className="text-teal-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Scientific Approach</h4>
                    <p className="text-gray-600">Evidence-based teaching methodologies proven to boost retention</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaUserGraduate className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Mentor First</h4>
                    <p className="text-gray-600">Only AIR  5000 qualified mentors with teaching experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our <span className="text-teal-600">Impact</span> in Numbers
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl text-teal-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <img 
                  src={founderImage} 
                  alt="Dr. Rohan Sharma" 
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-4 rounded-xl shadow-lg">
                  <p className="font-bold">AIR 12</p>
                  <p className="text-sm">NEET 2017</p>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-2/3">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                From <span className="text-teal-600">Topper</span> to Mentor
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Dr. Rohan Sharma (MBBS, AIIMS Delhi) founded NEET Capsule after mentoring 15 students from his hometown to medical colleges in 2018. Frustrated by the lack of personalized guidance in traditional coaching, he created a platform where every student gets:
              </motion.p>
              <motion.ul 
                className="space-y-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  "1-on-1 mentorship from actual NEET toppers",
                  "Custom study plans based on learning psychology",
                  "Continuous performance tracking",
                  "Emotional support during preparation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.blockquote 
                className="border-l-4 border-teal-600 pl-4 italic text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                "NEET isn't about how many hours you study, but how effectively you use those hours. Our mentors teach you what textbooks never will - the art of cracking NEET."
              </motion.blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our <span className="text-teal-600">Journey</span>
          </motion.h2>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 w-1 h-full bg-teal-500 transform -translate-x-1/2"></div>
            
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-teal-600">{item.year}</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-teal-600 border-4 border-white flex-shrink-0 z-10"></div>
                <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <p className="bg-white p-4 rounded-lg shadow-md">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to Transform Your NEET Preparation?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join 15,000+ students who've discovered a smarter way to crack NEET
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all text-lg mr-4">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-full transition-all text-lg">
              Meet Our Mentors
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;