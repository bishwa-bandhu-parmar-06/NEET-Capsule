import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaMobileAlt, FaLock, FaArrowRight } from 'react-icons/fa';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    otp: ''
  });
  const [activeTab, setActiveTab] = useState('email'); // 'email' or 'mobile'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show OTP form after submission
    setShowOtpForm(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    alert(`Account ${isLogin ? 'logged in' : 'created'} successfully!`);
    setShowOtpForm(false);
    if (!isLogin) setIsLogin(true); // Switch to login after registration
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setShowOtpForm(false);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      otp: ''
    });
  };

  const resendOtp = () => {
    alert(`OTP resent to your ${activeTab === 'email' ? 'email' : 'mobile'}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 py-4 px-6">
            <h2 className="text-2xl font-bold text-white text-center">
              {isLogin ? 'Login to Your Account' : 'Create an Account'}
            </h2>
          </div>

          {/* Auth Form */}
          <div className="p-6">
            {!showOtpForm ? (
              <motion.form
                key={isLogin ? 'login' : 'register'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
              >
                {/* Registration Name Field */}
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="mb-4"
                  >
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Login/Register Tabs */}
                {isLogin && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex mb-4 border-b border-gray-200"
                  >
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 text-center font-medium ${activeTab === 'email' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('email')}
                    >
                      Email
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 text-center font-medium ${activeTab === 'mobile' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('mobile')}
                    >
                      Mobile
                    </button>
                  </motion.div>
                )}

                {/* Email Field */}
                {(activeTab === 'email' || !isLogin) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: isLogin ? 0.1 : 0.2 }}
                    className="mb-4"
                  >
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your email"
                        required={activeTab === 'email' || !isLogin}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Mobile Field */}
                {(activeTab === 'mobile' || !isLogin) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: isLogin ? 0.2 : 0.3 }}
                    className="mb-4"
                  >
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mobile">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaMobileAlt className="text-gray-400" />
                      </div>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your mobile number"
                        required={activeTab === 'mobile' || !isLogin}
                      />
                    </div>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  {isLogin ? 'Send OTP' : 'Create Account'}
                  <FaArrowRight className="ml-2" />
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key="otp"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleOtpSubmit}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
                    Enter OTP
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      id="otp"
                      name="otp"
                      type="text"
                      value={formData.otp}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter 6-digit OTP"
                      required
                    />
                  </div>
                  <div className="text-right mt-1">
                    <button
                      type="button"
                      onClick={resendOtp}
                      className="text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      Resend OTP
                    </button>
                  </div>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                >
                  Verify OTP
                </motion.button>
              </motion.form>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-center"
            >
              <button
                type="button"
                onClick={toggleAuthMode}
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                {isLogin 
                  ? "Don't have an account? Register" 
                  : "Already have an account? Login"}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;