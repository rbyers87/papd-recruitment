import React from 'react';
import { Shield, Users, Car, Search, Camera, Dog, Target, Clock } from 'lucide-react';

const divisions = [
  {
    title: "Field Operations",
    icon: Clock,
    description: "Three shifts working 4-10s per week",
    details: "Our patrol division operates 24/7 with officers working four 10-hour shifts weekly, providing continuous coverage and quick response times."
  },
  {
    title: "Criminal Investigations",
    icon: Search,
    description: "Full-time detective division",
    details: "Dedicated detectives investigating major crimes, working closely with other agencies to solve complex cases."
  },
  {
    title: "Narcotics Unit",
    icon: Shield,
    description: "Full-time specialized unit",
    details: "Specialized officers focusing on drug-related crimes and investigations within Port Arthur."
  },
  {
    title: "Crime Response Unit",
    icon: Car,
    description: "Rapid response team",
    details: "Tactical unit responding to high-priority calls and emerging crime patterns."
  },
  {
    title: "Traffic Unit",
    icon: Car,
    description: "Dedicated traffic enforcement",
    details: "Specialized officers focusing on traffic safety and accident investigation."
  }
];

const specialTeams = [
  {
    title: "SWAT Team",
    icon: Shield,
    type: "Part-time",
    description: "Special Weapons and Tactics team handling high-risk situations"
  },
  {
    title: "Special Response Team",
    icon: Users,
    type: "Part-time",
    description: "Specialized unit for crowd control and civil disturbances"
  },
  {
    title: "Hostage Negotiation Team",
    icon: Users,
    type: "Part-time",
    description: "Trained negotiators for critical incidents"
  },
  {
    title: "Drone Team",
    icon: Camera,
    type: "Part-time",
    description: "Small Unmanned Aerial System team for surveillance and search operations"
  },
  {
    title: "Advanced Accident Investigation",
    icon: Car,
    type: "Part-time",
    description: "Specialized team for complex traffic accident investigations"
  },
  {
    title: "K-9 Unit",
    icon: Dog,
    type: "Part-time",
    description: "Trained K-9 officers supporting various police operations"
  }
];

export function Divisions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Divisions & Special Teams</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A civil service agency governed by Chapter 143 of the Texas Local Government Code, modified through negotiated agreements between the Port Arthur Police Association Union and the City.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Full-Time Divisions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <division.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{division.title}</h4>
                <p className="text-blue-600 font-medium mb-2">{division.description}</p>
                <p className="text-gray-600">{division.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Specialized Teams</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialTeams.map((team, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <team.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{team.title}</h4>
                <p className="text-blue-600 font-medium mb-2">{team.type}</p>
                <p className="text-gray-600">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}