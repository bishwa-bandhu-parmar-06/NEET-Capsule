// MentorsPage.js
import { motion } from 'framer-motion';

const mentors = [
  {
    id: 1,
    name: "Dr. Ananya Gupta",
    rank: "AIIMS Delhi (AIR 42)",
    specialization: "Biology Specialist",
    avatar: "👩‍⚕️",
    experience: "Mentored 120+ students",
    bio: "NEET 98%iler with perfect 360 in Biology. Expert in creating visual learning techniques for rapid recall.",
    stats: {
      students: "92% score improvement",
      success: "28 AIR < 1000"
    }
  },
  // Add 5-7 more mentors
];

const MentorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Meet Your <span className="text-purple-600">Dream Mentors</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the doctors who've been in your shoes and cracked NEET with top ranks
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="flex items-start mb-6">
                  <span className="text-5xl mr-4">{mentor.avatar}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{mentor.name}</h3>
                    <p className="text-purple-600 font-medium">{mentor.rank}</p>
                    <p className="text-sm text-gray-500">{mentor.specialization}</p>
                  </div>
                </div>

                <p className="mb-4">{mentor.bio}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-purple-800">Students Improved</p>
                    <p className="font-bold">{mentor.stats.students}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-purple-800">Top Rankers</p>
                    <p className="font-bold">{mentor.stats.success}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-all">
                    View Profile
                  </button>
                  <button className="flex-1 border border-purple-600 text-purple-600 hover:bg-purple-50 py-2 px-4 rounded-lg transition-all">
                    Book Session
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentor Matching CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Not sure which mentor is right for you?</h3>
            <p className="text-lg mb-6">Take our 2-minute assessment to get matched with your ideal mentor</p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all">
              Find My Mentor
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentorsPage;