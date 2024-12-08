import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&q=80"
          alt="Port Arthur Police Department"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Serve & Protect Port Arthur</h1>
          <p className="text-xl mb-8">Join the Port Arthur Police Department and become part of a proud tradition of service, integrity, and excellence in law enforcement.</p>
          <div className="space-x-4">
            <a href="#apply" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Apply Now
            </a>
            <a href="#requirements" className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}