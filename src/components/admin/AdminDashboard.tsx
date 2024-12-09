import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Users, Shield, Camera } from 'lucide-react';
import { GalleryManager } from './GalleryManager';
import { DivisionManager } from './DivisionManager';
import { TeamManager } from './TeamManager';

export function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<'divisions' | 'teams' | 'gallery' | null>(null);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'divisions':
        return <DivisionManager />;
      case 'teams':
        return <TeamManager />;
      case 'gallery':
        return <GalleryManager />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">Admin Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeSection ? (
          <div>
            <button
              onClick={() => setActiveSection(null)}
              className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Dashboard
            </button>
            {renderContent()}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              onClick={() => setActiveSection('divisions')}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Divisions</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage division information and photos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveSection('teams')}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Special Teams</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Update special teams information
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveSection('gallery')}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Camera className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Media Gallery</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage photos and media content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}