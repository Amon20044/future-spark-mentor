
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "After failing my NEET exam, I was completely lost. Frintor's assessment showed me how my skills perfectly matched a career in bioinformatics, which I'd never considered before. Now I'm thriving in my studies!",
      name: "Priya S.",
      role: "Bioinformatics Student",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "My parents wanted me to be a doctor, but I always struggled with biology. The AI assessment identified my natural aptitude for data science. Now I'm working on AI projects I love!",
      name: "Rahul M.",
      role: "Data Science Major",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The astrological component was what initially caught my attention, but the entire assessment provided clarity on my strengths. I discovered my potential in fintech, which perfectly aligns with my skills and interests.",
      name: "Anjali P.",
      role: "Fintech Professional",
      image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our guidance has helped students find their perfect career paths.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default TestimonialsSection;
