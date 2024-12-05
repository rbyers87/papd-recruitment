import React from 'react';
import { DollarSign, Heart, GraduationCap, Clock } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Starting at $53,000 annually with step increases and overtime opportunities"
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Full medical, dental, and vision coverage through TML Health Benefits Pool"
  },
  {
    icon: GraduationCap,
    title: "Career Growth",
    description: "Specialized training opportunities and career advancement paths"
  },
  {
    icon: Clock,
    title: "Retirement Plan",
    description: "5% TMRS retirement with 2:1 city matching and 10-year vesting"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits & Compensation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}