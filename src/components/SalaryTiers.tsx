import React from 'react';

const salaryTiers = [
  {
    title: "Police Officer Trainee",
    salary: "$52,000",
    duration: "During Academy Training",
    benefits: ["Full salary during training", "Benefits start immediately", "Academy uniform provided"]
  },
  {
    title: "Police Officer I",
    salary: "$62,000 - $75,000",
    duration: "First 2 Years",
    benefits: ["Annual step increases", "Shift differential pay", "Overtime opportunities"]
  },
  {
    title: "Police Officer II",
    salary: "$75,000 - $92,000",
    duration: "3-5 Years Experience",
    benefits: ["Specialized unit opportunities", "Leadership development", "Advanced training"]
  },
  {
    title: "Senior Officer/Specialist",
    salary: "$92,000 - $110,000",
    duration: "5+ Years Experience",
    benefits: ["Special assignment pay", "Training instructor opportunities", "Advanced career paths"]
  }
];

export function SalaryTiers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Career Progression & Salary</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We hire through a traditional civil service exam and offer lateral entry for those who are already certified or enrolled in a police academy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {salaryTiers.map((tier, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
              <div className="text-2xl text-blue-600 font-bold mb-2">{tier.salary}</div>
              <div className="text-sm text-gray-500 mb-4">{tier.duration}</div>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-600 text-sm">• {benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}