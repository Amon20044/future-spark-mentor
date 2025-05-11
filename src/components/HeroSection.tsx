
import React from 'react';
import { Button } from './ui/button';
const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-brand-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-6">
                <span className="block">Discover Your</span>
                <span className="block text-brand-blue">Perfect Career Path</span>
              </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Guiding students through personalized career assessment using AI, astrology, and expert counseling to unlock their true potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blueLight">
                Take Free Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative z-10 w-full h-full">
              {/* Hero image goes here */}
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl">
                <div className="transform -rotate-6 animate-float">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-brand-blue mb-3">Career Assessment Report</h3>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-10 bg-brand-yellow/30 rounded mt-4"></div>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="h-16 bg-brand-red/20 rounded"></div>
                        <div className="h-16 bg-brand-blue/20 rounded"></div>
                        <div className="h-16 bg-brand-cyan/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-12 w-24 h-24 bg-brand-yellow/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-brand-cyan/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Abstract Shape */}
      <div className="hidden lg:block absolute -bottom-24 -left-24 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
