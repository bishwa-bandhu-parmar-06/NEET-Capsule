import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUniversity, FaUserGraduate, FaChalkboardTeacher, FaPlus, FaArrowRight } from 'react-icons/fa';
import MentorRegistration from '../components/MentorRegistration';

const mentors = [
  {
    id: 1,
    name: "Dr. Sanjay Verma",
    specialization: "Biology Expert",
    qualifications: "MD, 10+ years NEET mentoring",
    students: "200+ selections in top medical colleges",
    icon: <FaAward className="text-3xl text-green-500" />,
    delay: 0.1,
    matches: ['conceptual', 'visual', 'detailed']
  },
  {
    id: 2,
    name: "Prof. Meena Krishnan",
    specialization: "Organic Chemistry",
    qualifications: "PhD Chemistry, IIT Bombay",
    students: "Specialist in reaction mechanisms",
    icon: <FaUniversity className="text-3xl text-blue-500" />,
    delay: 0.2,
    matches: ['conceptual', 'problem-solving', 'theoretical']
  },
  {
    id: 3,
    name: "Dr. Arjun Kapoor",
    specialization: "Physics Concept Builder",
    qualifications: "MSc Physics, 8 years experience",
    students: "Known for simplifying complex topics",
    icon: <FaUserGraduate className="text-3xl text-purple-500" />,
    delay: 0.3,
    matches: ['simplified', 'interactive', 'application-based']
  },
  {
    id: 4,
    name: "Dr. Priyanka Reddy",
    specialization: "Complete NEET Strategy",
    qualifications: "MBBS, NEET AIR 42 (2015)",
    students: "75+ top 100 rankers mentored",
    icon: <FaChalkboardTeacher className="text-3xl text-yellow-500" />,
    delay: 0.4,
    matches: ['structured', 'exam-focused', 'comprehensive']
  }
];

const quizQuestions = [
  {
    id: 1,
    question: "How do you prefer to learn complex topics?",
    options: [
      { id: 'a', text: "Through detailed explanations and diagrams", value: 'visual' },
      { id: 'b', text: "By solving lots of practice problems", value: 'problem-solving' },
      { id: 'c', text: "Through simplified analogies and real-life examples", value: 'simplified' },
      { id: 'd', text: "With a structured step-by-step approach", value: 'structured' }
    ]
  },
  {
    id: 2,
    question: "What's your biggest challenge in NEET preparation?",
    options: [
      { id: 'a', text: "Understanding theoretical concepts", value: 'conceptual' },
      { id: 'b', text: "Applying concepts to solve problems", value: 'application-based' },
      { id: 'c', text: "Memorizing facts and formulas", value: 'detailed' },
      { id: 'd', text: "Managing time during exams", value: 'exam-focused' }
    ]
  },
  {
    id: 3,
    question: "What type of teaching style works best for you?",
    options: [
      { id: 'a', text: "Interactive discussions and Q&A", value: 'interactive' },
      { id: 'b', text: "Clear, logical presentation of concepts", value: 'theoretical' },
      { id: 'c', text: "Comprehensive coverage of syllabus", value: 'comprehensive' },
      { id: 'd', text: "Focus on high-yield topics and shortcuts", value: 'exam-focused' }
    ]
  }
];

const MentorQuiz = ({ onComplete, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const learningProfile = calculateLearningProfile(newAnswers);
      setResult(learningProfile);
    }
  };

  const calculateLearningProfile = (answers) => {
    // Count occurrences of each learning preference
    const profileCount = answers.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    // Sort by most frequent
    const sortedProfile = Object.entries(profileCount).sort((a, b) => b[1] - a[1]);
    return sortedProfile.map(item => item[0]);
  };

  const findMatchingMentors = (profile) => {
    return mentors.filter(mentor => 
      profile.some(pref => mentor.matches.includes(pref))
    );
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const matchedMentors = findMatchingMentors(result);
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow-xl p-6 max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Your Perfect Mentor Matches</h2>
        <p className="text-gray-600 mb-6 text-center">
          Based on your learning style: <span className="font-medium">{result.join(', ')}</span>
        </p>
        
        <div className="space-y-4">
          {matchedMentors.map(mentor => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className="mr-4">
                  {mentor.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                  <p className="text-blue-600">{mentor.specialization}</p>
                </div>
              </div>
              <button 
                onClick={() => onComplete(mentor.id)}
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                View Profile
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={restartQuiz}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Retake Quiz
          </button>
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl shadow-xl p-6 max-w-2xl mx-auto"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-900">Mentor Match Quiz</h2>
          <span className="text-gray-500">Question {currentQuestion + 1}/{quizQuestions.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {quizQuestions[currentQuestion].question}
      </h3>

      <div className="space-y-3">
        {quizQuestions[currentQuestion].options.map(option => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => handleAnswer(option.value)}
            className="w-full text-left bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 transition-colors duration-200"
          >
            <div className="flex items-center">
              <span className="font-medium mr-2">{option.id}.</span>
              <span>{option.text}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <button
        onClick={onClose}
        className="mt-6 text-indigo-600 hover:text-indigo-800 font-medium"
      >
        Close Quiz
      </button>
    </motion.div>
  );
};

const MentorPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleQuizComplete = (mentorId) => {
    setSelectedMentor(mentorId);
    setShowQuiz(false);
    // Scroll to the matched mentor
    setTimeout(() => {
      document.getElementById(`mentor-${mentorId}`)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {showRegistration ? (
        <MentorRegistration onClose={() => setShowRegistration(false)} />
      ) : showQuiz ? (
        <MentorQuiz 
          onComplete={handleQuizComplete} 
          onClose={() => setShowQuiz(false)} 
        />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Esteemed Mentors
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Learn from the best minds in NEET education
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowRegistration(true)}
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <FaPlus className="mr-2" />
              Become a Mentor
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowQuiz(true)}
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <FaArrowRight className="mr-2" />
              Find My Mentor Match
            </motion.button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor) => (
              <motion.div
                key={mentor.id}
                id={`mentor-${mentor.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  border: selectedMentor === mentor.id ? '2px solid #4f46e5' : '2px solid transparent'
                }}
                transition={{ duration: 0.5, delay: mentor.delay }}
                whileHover={{ scale: 1.03 }}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${selectedMentor === mentor.id ? 'ring-2 ring-indigo-500' : ''}`}
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    {mentor.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-center font-medium text-blue-600 mb-3">{mentor.specialization}</p>
                  <div className="text-center text-gray-600 space-y-2">
                    <p><span className="font-medium">Qualifications:</span> {mentor.qualifications}</p>
                    <p><span className="font-medium">Notable:</span> {mentor.students}</p>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    View Profile
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure which mentor is right for you?</h2>
            <p className="text-gray-600 mb-6">Our matching system pairs you with the ideal mentor based on your learning style and goals.</p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Take Mentor Match Quiz
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MentorPage;