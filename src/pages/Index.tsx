
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CircleIntersection from '../components/CircleIntersection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import EmployabilityTrendsSection from '../components/References';
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <CircleIntersection />
        <FeaturesSection />
        <TestimonialsSection />
        <EmployabilityTrendsSection/>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
