import React from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Our Department</h2>
          <p className="text-gray-600 text-lg">Join a proud tradition of service and excellence in law enforcement. Our department is committed to maintaining the highest standards of professionalism and community engagement.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: Shield,
              title: "Excellence",
              description: "Committed to the highest standards of law enforcement"
            },
            {
              icon: Users,
              title: "Community",
              description: "Building strong relationships with our citizens"
            },
            {
              icon: Award,
              title: "Training",
              description: "State-of-the-art training facilities and programs"
            },
            {
              icon: Target,
              title: "Innovation",
              description: "Using modern technology to enhance public safety"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">129+</h4>
              <p className="text-gray-600">Officers Serving</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">24/7</h4>
              <p className="text-gray-600">Community Protection</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">55k+</h4>
              <p className="text-gray-600">Citizens Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}