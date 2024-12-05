import React, { useState } from 'react';
import { Shield, Users, Car, Search, Camera, Dog, Target, Clock } from 'lucide-react';
import { DivisionGallery } from './DivisionGallery';

const divisionGalleries = {
  fieldOps: [
    { url: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?auto=format&fit=crop&q=80", caption: "Night Shift Patrol" },
    { url: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?auto=format&fit=crop&q=80", caption: "Community Patrol" },
    { url: "https://images.unsplash.com/photo-1599257888891-f49293d56279?auto=format&fit=crop&q=80", caption: "Traffic Stop" }
  ],
  cid: [
    { url: "https://images.unsplash.com/photo-1590424693420-100c3a888530?auto=format&fit=crop&q=80", caption: "Evidence Analysis" },
    { url: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&q=80", caption: "Investigation Scene" },
    { url: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80", caption: "Detective Work" }
  ],
  narcotics: [
    { url: "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?auto=format&fit=crop&q=80", caption: "K9 Unit Search" },
    { url: "https://images.unsplash.com/photo-1605806616949-1fe88c133380?auto=format&fit=crop&q=80", caption: "Tactical Operations" },
    { url: "https://images.unsplash.com/photo-1517857399767-a9dc28f5a734?auto=format&fit=crop&q=80", caption: "Evidence Collection" }
  ],
  swat: [
    { url: "https://images.unsplash.com/photo-1542549237-a85c0a6a1616?auto=format&fit=crop&q=80", caption: "SWAT Training" },
    { url: "https://images.unsplash.com/photo-1595692058265-95c29d7f37f1?auto=format&fit=crop&q=80", caption: "Team Operations" },
    { url: "https://images.unsplash.com/photo-1541697183324-e05538b53caf?auto=format&fit=crop&q=80", caption: "Equipment Check" }
  ]
};

const divisions = [
  {
    title: "Field Operations",
    icon: Clock,
    description: "Three shifts working 4-10s per week",
    details: "Our patrol division operates 24/7 with officers working four 10-hour shifts weekly, providing continuous coverage and quick response times.",
    galleryKey: "fieldOps"
  },
  {
    title: "Criminal Investigations",
    icon: Search,
    description: "Full-time detective division",
    details: "Dedicated detectives investigating major crimes, working closely with other agencies to solve complex cases.",
    galleryKey: "cid"
  },
  {
    title: "Narcotics Unit",
    icon: Shield,
    description: "Full-time specialized unit",
    details: "Specialized officers focusing on drug-related crimes and investigations within Port Arthur.",
    galleryKey: "narcotics"
  },
  {
    title: "Crime Response Unit",
    icon: Car,
    description: "Rapid response team",
    details: "Tactical unit responding to high-priority calls and emerging crime patterns.",
    galleryKey: "fieldOps"
  },
  {
    title: "Traffic Unit",
    icon: Car,
    description: "Dedicated traffic enforcement",
    details: "Specialized officers focusing on traffic safety and accident investigation.",
    galleryKey: "fieldOps"
  }
];

const specialTeams = [
  {
    title: "SWAT Team",
    icon: Shield,
    type: "Part-time",
    description: "Special Weapons and Tactics team handling high-risk situations",
    galleryKey: "swat"
  },
  {
    title: "Special Response Team",
    icon: Users,
    type: "Part-time",
    description: "Specialized unit for crowd control and civil disturbances",
    galleryKey: "swat"
  },
  {
    title: "Hostage Negotiation Team",
    icon: Users,
    type: "Part-time",
    description: "Trained negotiators for critical incidents",
    galleryKey: "swat"
  },
  {
    title: "Drone Team",
    icon: Camera,
    type: "Part-time",
    description: "Small Unmanned Aerial System team for surveillance and search operations",
    galleryKey: "fieldOps"
  },
  {
    title: "Advanced Accident Investigation",
    icon: Car,
    type: "Part-time",
    description: "Specialized team for complex traffic accident investigations",
    galleryKey: "fieldOps"
  },
  {
    title: "K-9 Unit",
    icon: Dog,
    type: "Part-time",
    description: "Trained K-9 officers supporting various police operations",
    galleryKey: "narcotics"
  }
];

export function Divisions() {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);

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
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => setSelectedGallery(division.galleryKey)}
              >
                <division.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{division.title}</h4>
                <p className="text-blue-600 font-medium mb-2">{division.description}</p>
                <p className="text-gray-600">{division.details}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  View Gallery →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Specialized Teams</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialTeams.map((team, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => setSelectedGallery(team.galleryKey)}
              >
                <team.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{team.title}</h4>
                <p className="text-blue-600 font-medium mb-2">{team.type}</p>
                <p className="text-gray-600">{team.description}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  View Gallery →
                </button>
              </div>
            ))}
          </div>
        </div>

        {selectedGallery && (
          <DivisionGallery
            images={divisionGalleries[selectedGallery as keyof typeof divisionGalleries]}
            isOpen={true}
            onClose={() => setSelectedGallery(null)}
            title={divisions.find(d => d.galleryKey === selectedGallery)?.title || 
                  specialTeams.find(t => t.galleryKey === selectedGallery)?.title || 
                  'Gallery'}
          />
        )}
      </div>
    </section>
  );
}