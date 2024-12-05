import React from 'react';

export function Requirements() {
  return (
    <section id="requirements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Requirements & Qualifications</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Basic Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Must be at least 21 years of age</li>
                <li>U.S. Citizenship required</li>
                <li>Valid Texas driver's license (or ability to obtain one)</li>
                <li>High school diploma or GED</li>
                <li>No felony convictions</li>
                <li>No class A misdemeanor convictions</li>
                <li>No family violence convictions</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Physical Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pass physical fitness test</li>
                <li>Pass medical examination</li>
                <li>Vision requirements: 20/20 or corrected to 20/20</li>
                <li>Pass physical agility test</li>
                <li>Drug screening required</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Additional Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pass comprehensive background investigation</li>
                <li>Pass psychological evaluation</li>
                <li>Pass polygraph examination</li>
                <li>Complete TCOLE certification (if not already certified)</li>
                <li>Ability to work rotating shifts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}