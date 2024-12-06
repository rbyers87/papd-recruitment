import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6" />
              <span className="font-bold">Port Arthur PD</span>
            </div>
            <p className="text-blue-200">Serving and protecting Port Arthur with integrity, professionalism, and dedication since 1898.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-blue-200 hover:text-white transition">About Us</a></li>
              <li><a href="#benefits" className="text-blue-200 hover:text-white transition">Benefits</a></li>
              <li><a href="#requirements" className="text-blue-200 hover:text-white transition">Requirements</a></li>
              <li><a href="#apply" className="text-blue-200 hover:text-white transition">Apply Now</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-blue-200">(409) 983-8600</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-blue-200">police@portarthurtx.gov</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-blue-200">645 4th Street, Port Arthur, TX 77640</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/PortArthurPD" className="text-blue-200 hover:text-white transition">Facebook</a>
              <a href="https://twitter.com/PortArthurTX" className="text-blue-200 hover:text-white transition">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Port Arthur Police Department. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}