import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "How is NEET Capsule different from traditional coaching?",
    answer: "We provide 1-on-1 mentorship from actual NEET toppers (AIR < 5000) rather than generic lectures. Our AI-powered platform creates personalized study plans based on your strengths/weaknesses, and we focus on exam strategy rather than just content delivery."
  },
  // Add 7-9 more FAQs
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our mentorship programs
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-teal-600" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6">Still have questions?</h3>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;