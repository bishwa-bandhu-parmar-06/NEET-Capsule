const ChallengeComponent = () => {
  const phases = [
    {
      title: "Phase 1: Foundation (Days 1-30)",
      tasks: [
        "Complete NCERT line-by-line for all subjects",
        "Daily 50 MCQs practice (10P/20C/20B)",
        "Build formula sheets & biological diagrams"
      ]
    },
    {
      title: "Phase 2: Intensive (Days 31-60)", 
      tasks: [
        "Chapter-wise previous year questions (2009-2024)",
        "Speed building: 90 questions/hour target",
        "Weak topic special classes"
      ]
    },
    {
      title: "Phase 3: Final Sprint (Days 61-90)",
      tasks: [
        "Full syllabus revision in 15 days",
        "10 full-length mock tests under real conditions",
        "AIR < 1000 focused strategy"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">90-Day</span> NEET Transformation Challenge
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Join <strong>4,327 students</strong> currently undergoing this proven score-boosting program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-purple-900 font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  {index+1}
                </div>
                <h3 className="text-xl font-bold">{phase.title}</h3>
              </div>
              <ul className="space-y-3">
                {phase.tasks.map((task, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white/20 p-8 rounded-xl backdrop-blur-sm border border-white/30">
          <h3 className="text-2xl font-bold mb-6 text-center">Challenge Progress Tracker</h3>
          <div className="space-y-6">
            {[
              {label: "NCERT Completion", progress: 85},
              {label: "PYQs Solved", progress: 62},
              {label: "Mock Tests Taken", progress: 45}
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span>{item.label}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div 
                    className="bg-yellow-400 h-3 rounded-full" 
                    style={{width: `${item.progress}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-3 px-8 rounded-full mr-4">
              Join Challenge
            </button>
            <button className="border-2 border-white text-white hover:bg-white/20 py-3 px-8 rounded-full">
              Download Planner PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeComponent;