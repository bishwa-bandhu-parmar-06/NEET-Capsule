import { useState , useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Testimonial data
  const testimonials = {
    mentors: [
      {
        id: 1,
        name: "Dr. Priya Sharma",
        role: "Senior Mentor, AIIMS Graduate",
        text: "Teaching through NEET Capsule has been incredibly rewarding. The platform allows me to connect meaningfully with students and track their progress systematically.",
        avatar: "👩‍⚕️"
      },
      {
        id: 2,
        name: "Dr. Rohan Patel",
        role: "Mentor, MBBS Final Year",
        text: "The structured approach of NEET Capsule helps me deliver focused guidance. Seeing students improve their ranks is what makes this so fulfilling.",
        avatar: "👨‍⚕️"
      },
      {
        id: 3,
        name: "Dr. Ananya Gupta",
        role: "Mentor, PG Resident",
        text: "This platform bridges the gap between aspirants and mentors perfectly. I wish I had such guidance during my NEET preparation.",
        avatar: "🧑‍⚕️"
      }
    ],
    students: [
      {
        id: 1,
        name: "Aarav Singh",
        role: "NEET 2023, AIR 1245",
        text: "NEET Capsule transformed my preparation. My mentor identified my weak areas and created a personalized plan that boosted my score by 120 marks!",
        avatar: "👦"
      },
      {
        id: 2,
        name: "Isha Verma",
        role: "NEET 2023, AIR 892",
        text: "The 1-on-1 mentorship was game-changing. My mentor's test-taking strategies helped me complete the paper 15 minutes early for revision.",
        avatar: "👧"
      },
      {
        id: 3,
        name: "Rahul Mehta",
        role: "NEET 2024 Aspirant",
        text: "The performance analytics helped me track my progress week by week. My accuracy improved from 65% to 85% in 3 months!",
        avatar: "🧑"
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => 
      prev === testimonials[activeTab].length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials[activeTab].length - 1 : prev - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab, currentIndex]);

  return (
    <section 
      ref={ref}
      className="h-screen bg-gradient-to-r from-yellow-400 to-orange-600 flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 py-12 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-white"
        >
          What Our Community Says
        </motion.h2>

        {/* Toggle Buttons */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 inline-flex">
            <button
              onClick={() => {
                setActiveTab('mentors');
                setCurrentIndex(0);
              }}
              className={`px-6 py-2  cursor-pointer rounded-full transition-all ${activeTab === 'mentors' ? 'bg-white text-orange-600 font-medium' : 'text-white'}`}
            >
              Mentors
            </button>
            <button
              onClick={() => {
                setActiveTab('students');
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full cursor-pointer transition-all ${activeTab === 'students' ? 'bg-white text-orange-600 font-medium' : 'text-white'}`}
            >
              Students
            </button>
          </div>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto h-64">
          <AnimatePresence custom={direction} mode="wait">
            {testimonials[activeTab].map((testimonial, index) => (
              index === currentIndex && (
                <motion.div
                  key={testimonial.id}
                  custom={direction}
                  initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-full h-full flex flex-col items-center justify-center">
                    <div className="text-5xl mb-4">{testimonial.avatar}</div>
                    <p className="text-lg md:text-xl text-white mb-6">"{testimonial.text}"</p>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-yellow-100">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.div 
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <button 
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {testimonials[activeTab].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/40'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-white rounded-full blur-xl"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-white rounded-full blur-xl"
      />
    </section>
  );
};

export default TestimonialsSection;