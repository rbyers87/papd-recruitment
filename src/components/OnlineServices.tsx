import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';

export function OnlineServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Online Services</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <a
            href="https://buycrash.lexisnexisrisk.com/ui/report/search?state=TX&jurisdiction=Port%20Arthur%20Police%20Department"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
          >
            <FileText className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Crash Reports</h3>
            <p className="text-gray-600">
              Request and download crash reports from the Texas Department of Transportation portal.
            </p>
            <span className="mt-4 text-blue-600 font-semibold">Get Crash Report →</span>
          </a>

          <a
            href="https://secure.coplogic.com/dors/en/filing/submitreport?dynparam=1733427005910"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
          >
            <AlertCircle className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Report a Crime</h3>
            <p className="text-gray-600">
              Submit an anonymous tip or report non-emergency incidents through our online reporting system.
            </p>
            <span className="mt-4 text-blue-600 font-semibold">Report Online →</span>
          </a>
        </div>
      </div>
    </section>
  );
}