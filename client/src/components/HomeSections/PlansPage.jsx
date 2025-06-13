// PlansPage.js
const plans = [
  {
    name: "NEET Essential",
    price: "₹8,999",
    duration: "6 Months",
    bestFor: "Class 12 Students",
    features: [
      "2 Mentor Sessions/Month",
      "15 Full Tests",
      "NCERT Focus Material",
      "Basic Performance Tracking",
      "Email Support"
    ],
    cta: "Start Basic Prep"
  },
  {
    name: "NEET Pro",
    price: "₹14,999",
    duration: "1 Year",
    bestFor: "Repeaters/Droppers",
    popular: true,
    features: [
      "4 Mentor Sessions/Month",
      "40 Full Tests + Chapter Tests",
      "PYQ Bank (2009-2024)",
      "Advanced Analytics",
      "Priority Support"
    ],
    cta: "Start Intensive Prep"
  },
  // Add 1-2 more plans
];

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Your <span className="text-blue-600">Success</span> Blueprint
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your NEET preparation journey
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-inner">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
              Annual (Save 20%)
            </button>
            <button className="px-6 py-2 text-gray-600 rounded-full">
              Monthly
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg ${
                plan.popular 
                  ? "transform scale-105 border-2 border-blue-500" 
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-1 font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.bestFor}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.duration}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Features</th>
                {plans.map((plan, i) => (
                  <th key={i} className="p-4 text-center">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "Daily Study Planner",
                "Mentor Sessions",
                "Full Tests",
                "PYQ Bank",
                "Doubt Solving",
                "Performance Reports"
              ].map((feature, i) => (
                <tr key={i} className={i % 2 ? 'bg-gray-50' : ''}>
                  <td className="p-4 font-medium">{feature}</td>
                  {plans.map((plan, j) => (
                    <td key={j} className="p-4 text-center">
                      {j === 0 && i < 3 ? "✓" : 
                       j === 1 ? "✓" : 
                       j === 2 && i !== 4 ? "✓" : "✗"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scholarship CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full mb-6">
            Limited Seats Available for Scholarship Program
          </div>
          <h3 className="text-2xl font-bold mb-4">Need financial assistance?</h3>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">
            Apply for Scholarship
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;