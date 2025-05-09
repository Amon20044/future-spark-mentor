
import React from 'react';
import { Button } from './ui/button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-cyan text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Perfect Career Path?</h2>
          <p className="text-lg mb-8">
            Take our comprehensive assessment and get personalized guidance based on your interests, skills, and astrological profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              Start Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-brand-blue hover:bg-white/10">
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
