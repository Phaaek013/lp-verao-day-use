import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DayUseSection from './components/DayUseSection';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyReserveButton from './components/StickyReserveButton';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F4]">
      <Header />
      <Hero />
      <DayUseSection />
      <Benefits />
      <Testimonials />
      <CTA />
      <Location />
      <Footer />
      <StickyReserveButton />
    </div>
  );
}

export default App;