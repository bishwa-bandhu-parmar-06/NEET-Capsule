import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our mentorship programs? Our team is here to help you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+91 87209 43648</p>
                  <p className="text-sm text-gray-500">(9 AM - 7 PM, Monday-Saturday)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">support@neetcapsule.com</p>
                  <p className="text-gray-600">admissions@neetcapsule.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Our Office</h3>
                  <p className="text-gray-600">NEET Capsule EduTech Pvt. Ltd.</p>
                  <p className="text-gray-600">12th Floor, Tower B, Cyber City</p>
                  <p className="text-gray-600">Gurugram, Haryana 122002</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaClock className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 7 PM</p>
                  <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-white p-4 rounded-xl shadow-lg"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.223269622537!2d77.0903023150796!3d28.50288898247038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193f5f5a7f69%3A0x7db3a5f1c8f92b8a!2sCyber%20City%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%" 
            height="400" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;