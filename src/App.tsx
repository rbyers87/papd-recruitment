import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Divisions } from './components/Divisions';
import { Benefits } from './components/Benefits';
import { SalaryTiers } from './components/SalaryTiers';
import { Requirements } from './components/Requirements';
import { ApplicationForm } from './components/ApplicationForm';
import { Footer } from './components/Footer';

function App() {
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
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;