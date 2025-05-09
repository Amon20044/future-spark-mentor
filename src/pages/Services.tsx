
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Career Assessment",
      description: "Our comprehensive assessment evaluates your interests, aptitudes, strengths, and astrological indicators to identify the career paths best suited to your unique profile.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "One-on-One Counseling",
      description: "Connect with our experienced career counselors for personalized guidance and support. Our counselors help you navigate your career journey with confidence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Astrological Career Guidance",
      description: "Explore how your astrological profile can guide your career decisions. Our experts analyze your birth chart to identify potential strengths and challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: "Career Workshops",
      description: "Participate in our interactive workshops designed to help you develop essential career skills, explore new opportunities, and connect with industry professionals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: "University & Course Selection",
      description: "Get expert advice on selecting the right university and course that aligns with your career goals. We help you make informed decisions about your education.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: "Parents Counseling",
      description: "We provide guidance for parents to help them support their children's career development. Learn how to effectively navigate the changing landscape of education and careers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-brand-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive career guidance services tailored to students at every stage of their educational journey.
            </p>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="text-brand-blue mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="link" className="text-brand-blue p-0">
                    Learn More &rarr;
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Educational Levels */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">We Support Students at Every Level</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Middle School", 
                "High School", 
                "Undergraduate", 
                "Postgraduate", 
                "Career Transition"
              ].map((level, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-red">{index + 1}</span>
                  </div>
                  <h3 className="font-medium">{level}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-brand-light py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards discovering your perfect career path today.
            </p>
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blueLight">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
