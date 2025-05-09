import React from 'react';
import { Button } from './ui/button';

const CircleIntersection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Career Success Formula</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our unique approach combines three essential elements to provide the most comprehensive career guidance for students.
          </p>
        </div>
        
        <div className="relative min-h-[400px] max-md:scale-125">
          {/* Circles Container */}
          <div className="relative my-4 inset-0 flex items-center justify-center">
            <img 
              src="./in.svg" 
              alt="Venn Diagram"
              className="w-[70vw] h-auto" 
            />
          </div>
        </div>
        
        <div className="max-w-xl mx-auto text-center mt-8">
          <p className="text-4xl font-medium">
            When these three circles align, you discover your
            <span className="gradient-heading font-bold"> perfect career path</span>
          </p>
          <Button className="mt-8 bg-brand-blue hover:bg-brand-blueLight">
            Start Your Discovery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CircleIntersection;