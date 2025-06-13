
import React, { useState } from 'react';

const TopperRoutine = () => {
  const [activeTab, setActiveTab] = useState('weekday');
  
  const routines = {
    weekday: [
      {time: '5:00 AM', activity: 'Wake up + Morning Routine'},
      {time: '5:30 AM', activity: 'Chemistry Theory (NCERT Focus)'},
      {time: '7:30 AM', activity: 'Physics Problem Solving'},
      {time: '9:30 AM', activity: 'Breakfast + Short Break'},
      {time: '10:30 AM', activity: 'Biology Revision (Diagrams + Flowcharts)'},
      {time: '1:30 PM', activity: 'Lunch + Power Nap'},
      {time: '3:00 PM', activity: 'Previous Year Questions Practice'},
      {time: '6:00 PM', activity: 'Doubt Session with Mentor'},
      {time: '7:30 PM', activity: 'Mock Test Analysis'},
      {time: '9:30 PM', activity: 'Light Revision + Next Day Planning'},
      {time: '10:30 PM', activity: 'Sleep'}
    ],
    weekend: [
      {time: '6:00 AM', activity: 'Wake up'},
      {time: '6:30 AM', activity: 'Full Length Mock Test'},
      {time: '10:00 AM', activity: 'Detailed Analysis with Mentor'},
      {time: '12:30 PM', activity: 'Weak Area Special Focus'},
      {time: '3:00 PM', activity: 'Current Affairs (Biology)'},
      {time: '5:00 PM', activity: 'Group Discussion Session'},
      {time: '7:00 PM', activity: 'Relaxation Time'}
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-teal-600">AIR 12 Topper's</span> Daily Routine
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow the schedule that helped Rohan Sharma score <strong>715/720</strong> in NEET 2024
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('weekday')}
              className={`flex-1 py-4 font-medium ${activeTab === 'weekday' ? 'bg-teal-600 text-white' : 'bg-gray-100'}`}
            >
              Weekday Schedule
            </button>
            <button 
              onClick={() => setActiveTab('weekend')}
              className={`flex-1 py-4 font-medium ${activeTab === 'weekend' ? 'bg-teal-600 text-white' : 'bg-gray-100'}`}
            >
              Weekend Schedule
            </button>
          </div>

          <div className="p-6">
            <ul className="space-y-4">
              {routines[activeTab].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full mr-4 font-medium">
                    {item.time}
                  </div>
                  <div className="flex-1 border-b border-gray-100 pb-3">
                    {item.activity}
                    {index === 2 && activeTab === 'weekday' && (
                      <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        Pro Tip: Solve 30 numericals daily
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2">📌 Key Takeaways:</h4>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>8 hours focused study + 2 hours revision daily</li>
                <li>7 hours quality sleep is non-negotiable</li>
                <li>Weekly mock tests with detailed analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
            Get Your Personalized Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopperRoutine;