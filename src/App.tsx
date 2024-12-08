import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PublicLayout } from './layouts/PublicLayout';
import { LoginPage } from './components/admin/LoginPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;