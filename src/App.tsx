import React from 'react';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/common/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-deepSpace text-slate-200 font-sans relative overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;