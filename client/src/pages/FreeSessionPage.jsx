import { motion } from 'framer-motion';

const FreeSessionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">Book Your Free NEET Strategy Session</h1>
            <p className="text-lg opacity-90">
              30-minute 1-on-1 consultation with our NEET experts
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">What You'll Get:</h2>
              <ul className="space-y-4">
                {[
                  "Personalized study plan assessment",
                  "Identify your key improvement areas",
                  "90-day roadmap for NEET preparation",
                  "Q&A with an AIR < 1000 mentor",
                  "Get 3 proven strategies to boost your score"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-bold text-yellow-800 mb-2">Limited Availability</h3>
                <p className="text-yellow-700">Only 5 free sessions available daily. Book your slot now!</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Time Slot</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option>10:00 AM - 10:30 AM</option>
                    <option>2:00 PM - 2:30 PM</option>
                    <option>6:00 PM - 6:30 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Your Current Preparation Level</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option>Just Started (Class 11)</option>
                    <option>Class 12 Student</option>
                    <option>Repeater/Dropper</option>
                    <option>Revision Phase</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Specific Questions (Optional)</label>
                  <textarea 
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="What challenges are you facing?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
                >
                  Book Free Session
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSessionPage;