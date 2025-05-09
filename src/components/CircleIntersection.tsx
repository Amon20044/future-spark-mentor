
import React from 'react';

const CircleIntersection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Career Success Formula</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our unique approach combines three essential elements to provide the most comprehensive career guidance for students.
          </p>
        </div>
        
        <div className="relative min-h-[500px] my-12">
          {/* Circles Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Circle 1: My Interest */}
            <div className="circle-intersection w-64 h-64 bg-brand-red/20 border-2 border-brand-red absolute transform -translate-x-1/4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-brand-red/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-red mb-2">My Interest</h3>
                <p className="text-sm text-center">Discover careers that align with your passions and interests</p>
              </div>
            </div>
            
            {/* Circle 2: My Skills */}
            <div className="circle-intersection w-64 h-64 bg-brand-blue/20 border-2 border-brand-blue absolute transform translate-x-1/4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">My Skills</h3>
                <p className="text-sm text-center">Identify your strengths and abilities that will drive career success</p>
              </div>
            </div>
            
            {/* Circle 3: My Stars */}
            <div className="circle-intersection w-64 h-64 bg-brand-cyan/20 border-2 border-brand-cyan absolute transform translate-y-3/4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-brand-cyan/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-cyan mb-2">My Stars</h3>
                <p className="text-sm text-center">Explore how your astrological profile can guide career decisions</p>
              </div>
            </div>

            {/* Intersection Label */}
            <div className="absolute bg-white p-4 rounded-full shadow-lg z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-red via-brand-blue to-brand-cyan rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center mt-8">
          <p className="text-lg font-medium">
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
