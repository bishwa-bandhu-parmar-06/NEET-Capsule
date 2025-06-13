// SuccessStories.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const SuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const stories = [
    {
      id: 1,
      name: "Aarav Singh",
      rank: "AIR 124 (NEET 2024)",
      improvement: "540 → 685 in 6 months",
      avatar: "👨‍⚕️",
      category: "repeater",
      video: "https://youtube.com/embed/...",
      quote: "NEET Capsule's 1-on-1 mentorship helped me identify my weak areas in Organic Chemistry. My mentor's unique memory tricks boosted my score by 145 marks!",
      tips: [
        "NCERT is 80% of NEET - read it 5+ times",
        "Solve PYQs topic-wise before full mocks",
        "Analyze every mistake in a separate notebook"
      ]
    },
    {
      id: 2,
      name: "Priya Patel",
      rank: "AIR 89 (NEET 2023)",
      improvement: "First attempt",
      avatar: "👩‍⚕️",
      category: "first",
      video: "https://youtube.com/embed/...",
      quote: "The 90-day crash course gave me perfect revision strategy. My Biology score went from 280 to 340!",
      tips: [
        "Make 1-page summaries for each chapter",
        "Sunday = Full revision day",
        "Never change your answer unless 200% sure"
      ]
    },
    {
      id: 3,
      name: "Parthiv Patel",
      rank: "AIR 89 (NEET 2023)",
      improvement: "Dropper",
      avatar: "👩‍⚕️",
      category: "dropper",
      video: "https://youtube.com/embed/...",
      quote: "The 90-day crash course gave me perfect revision strategy. My Biology score went from 280 to 340!",
      tips: [
        "Make 1-page summaries for each chapter",
        "Sunday = Full revision day",
        "Never change your answer unless 200% sure"
      ]
    },
    // Add 5-7 more stories
  ];

  const filteredStories = activeFilter === 'all' 
    ? stories 
    : stories.filter(story => story.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-teal-600">Success</span> Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real students. Real struggles. Real NEET success.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'first', 'repeater', 'dropper'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                activeFilter === filter 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {filter === 'all' ? 'All Stories' : 
               filter === 'first' ? 'First Attempt' : 
               filter + ' Students'}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Video Thumbnail */}
              <div className="relative pt-[56.25%] bg-gray-200">
                <iframe 
                  src={story.video}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">{story.avatar}</span>
                  <div>
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-teal-600 font-medium">{story.rank}</p>
                    <p className="text-sm text-gray-500">{story.improvement}</p>
                  </div>
                </div>

                <blockquote className="italic mb-4 border-l-4 border-teal-500 pl-4">
                  "{story.quote}"
                </blockquote>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-bold text-teal-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {story.name}'s Tips
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {story.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6">Ready to write your success story?</h3>
          <button className="bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;