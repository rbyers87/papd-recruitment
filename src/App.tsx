import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Divisions } from './components/Divisions';
import { Benefits } from './components/Benefits';
import { SalaryTiers } from './components/SalaryTiers';
import { Requirements } from './components/Requirements';
import { OnlineServices } from './components/OnlineServices';
import { ApplicationForm } from './components/ApplicationForm';
import { Footer } from './components/Footer';
import { LoginPage } from './components/admin/LoginPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

function PublicLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Benefits />
        <SalaryTiers />
        <Requirements />
        <OnlineServices />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}

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