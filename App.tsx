
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PurchaseCard from './components/PurchaseCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <PurchaseCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
