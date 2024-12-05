import React from 'react';
import { Menu } from 'lucide-react';
import { DepartmentPatch } from './DepartmentPatch';

export function Header() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
          <DepartmentPatch imageUrl="./photos/papdPatch.png" />
            <span className="text-xl font-bold">Port Arthur Police Department</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-200 transition">About</a>
            <a href="#benefits" className="hover:text-blue-200 transition">Benefits</a>
            <a href="#requirements" className="hover:text-blue-200 transition">Requirements</a>
            <a href="#apply" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </a>
          </nav>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}