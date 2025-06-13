import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const socialLinks = [
    { icon: "fab fa-whatsapp", url: "#", color: "bg-green-500", label: "WhatsApp" },
    { icon: "fab fa-instagram", url: "#", color: "bg-pink-600", label: "Instagram" },
    { icon: "fab fa-youtube", url: "#", color: "bg-red-600", label: "YouTube" },
    { icon: "fab fa-linkedin-in", url: "#", color: "bg-blue-700", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "#", color: "bg-sky-500", label: "Twitter" },
    { icon: "fab fa-github", url: "#", color: "bg-gray-800", label: "GitHub" },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus(null), 3000);
    } else {
      setSubscriptionStatus('error');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Smoother animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5
      }
    },
    hover: {
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  const footerLinks = [
    {
      title: "NEET Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About Program", path: "/about" },
        { name: "Mentorship Plans", path: "/mentorship-plan" },
        { name: "Our Mentors", path: "/mentors" },
        { name: "Team", path: "/team" },
        { name: "Success Stories", path: "/success" },
        { name: "NEET Blogs", path: "/blogs" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", path: "/faq" },
        { name: "Contact Mentors", path: "/contact" },
        { name: "Book Free Session", path: "/freeSession" },
        { name: "Services", path: "/services" },
        { name: "Mentor Register", path: "/mentorRegister" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Study Materials", path: "/materials" },
        { name: "Practice Tests", path: "/tests" },
        { name: "Previous Papers", path: "/papers" },
        { name: "Important Dates", path: "/dates" },
        { name: "Syllabus", path: "/syllabus" },
      ]
    }
  ];

  return (
    <footer 
      ref={ref}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-12 overflow-hidden"
    >
      {/* Subtle floating particles animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-teal-400 rounded-full"
            style={{
              width: Math.random() * 5 + 1 + 'px',
              height: Math.random() * 5 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() * 40) - 20],
              x: [0, (Math.random() * 40) - 20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* First Row - Brand and Navigation Links */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                NEET CAPSULE
              </span>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-6 text-sm"
            >
              Revolutionizing NEET preparation through personalized mentorship.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full ${social.color} flex items-center justify-center text-white text-sm transition-all duration-300`}
                  whileHover={{ 
                    y: -3,
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>

            <Link to="/freeSession" onClick={scrollToTop}>
              <motion.button
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:shadow-md transition-all"
                whileHover={{ 
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Session
              </motion.button>
            </Link>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="mb-6"
            >
              <motion.h3 
                className="text-lg font-semibold mb-4 text-teal-400"
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      onClick={scrollToTop}
                      className="text-gray-400 hover:text-white transition-colors flex items-center text-sm group"
                    >
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"/>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Updates and Contact */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {/* NEET Updates */}
          <motion.div
            className="bg-gray-800 bg-opacity-50 p-6 rounded-lg"
            whileHover={{ y: -3 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-teal-400">
              NEET Updates
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get exclusive NEET tips and offers:
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email" 
                  required
                  className="flex-grow bg-gray-700 text-white px-3 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-3 py-2 rounded-r-lg text-sm hover:bg-teal-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {subscriptionStatus === 'success' && (
                <p className="mt-2 text-teal-400 text-xs">
                  Thank you for subscribing!
                </p>
              )}
              {subscriptionStatus === 'error' && (
                <p className="mt-2 text-red-400 text-xs">
                  Please enter a valid email
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="bg-gray-800 bg-opacity-50 p-6 rounded-lg"
            whileHover={{ y: -3 }}
          >
            <h4 className="font-medium mb-3 text-teal-400 text-lg">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+918720943648"
                className="flex items-center text-teal-400 hover:text-teal-300 text-sm"
              >
                <i className="fas fa-phone-alt mr-2 text-xs"></i>
                +91 87209 43648
              </a>
              <a 
                href="mailto:mentor@neetcapsule.in"
                className="flex items-center text-teal-400 hover:text-teal-300 text-sm"
              >
                <i className="fas fa-envelope mr-2 text-xs"></i>
                mentor@neetcapsule.in
              </a>
              <a 
                href="https://wa.me/918720943648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-teal-400 hover:text-teal-300 text-sm"
              >
                <i className="fab fa-whatsapp mr-2 text-xs"></i>
                WhatsApp Chat
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent my-8"
        />

        {/* Copyright Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-xs mb-3 md:mb-0">
            &copy; {currentYear} NEET CAPSULE. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Privacy Policy', 'Terms', 'Refund Policy'].map((item, index) => (
              <Link 
                key={index}
                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                onClick={scrollToTop}
                className="text-gray-500 hover:text-teal-400 text-xs"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.8, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <a 
          href="https://wa.me/918720943648"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:shadow-xl transition-all"
          aria-label="WhatsApp Help"
        >
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;