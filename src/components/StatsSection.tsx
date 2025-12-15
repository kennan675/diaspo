import React from 'react';

const STATS = [
  { value: '2,000+', label: 'Healthcare Providers', icon: '⚕️' },
  { value: '4', label: 'Countries', icon: '🌍' },
  { value: '98%', label: 'Satisfaction Rate', icon: '⭐' },
  { value: '24/7', label: 'Support Available', icon: '💬' },
  { value: '100K+', label: 'Appointments Booked', icon: '📅' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-4">
            Impact by the <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-xl text-[#7A8A9E]">Real results for real families</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 border border-[#007FFF]/10 hover:border-[#007FFF]/30 hover:shadow-lg transition-all text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#283692] mb-1">{stat.value}</div>
              <div className="text-sm text-[#7A8A9E] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
