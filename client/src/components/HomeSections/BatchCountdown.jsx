const BatchCountdown = () => {
  // Calculate days until NEET 2025 (assuming May 5, 2025)
  const neetDate = new Date('2026-05-03');
  const today = new Date();
  const diffTime = neetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  return (
    <section className="bg-gradient-to-r from-red-600 to-orange-500 py-12 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block">NEET UG 2026:</span>
            <span className="text-yellow-300">{diffDays} Days Left!</span>
          </h2>
          
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 mb-8">
            <h3 className="text-2xl font-bold mb-4">🚀 Next Foundation Batch Starts:</h3>
            <p className="text-xl mb-2">July 15, 2025 | Only 12 Seats Left</p>
            <div className="flex justify-center gap-4 mt-4">
              {['Physics', 'Chemistry', 'Biology'].map(subject => (
                <span key={subject} className="bg-white/30 px-4 py-2 rounded-full">
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {icon: '⏰', title: '6 Months Intensive Program', text: 'Complete syllabus coverage'},
              {icon: '🎯', title: 'AIR 100 Target Batch', text: 'For serious aspirants only'},
              {icon: '💰', title: 'Early Bird Discount', text: '20% off till June 30'}
            ].map(item => (
              <div key={item.title} className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all">
            Reserve Your Seat Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BatchCountdown;