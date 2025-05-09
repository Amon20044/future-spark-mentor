
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Assessment = () => {
  const steps = [
    {
      number: "01",
      title: "Complete the Profile",
      description: "Fill out your basic information including your interests, academic background, and birth details for astrological analysis."
    },
    {
      number: "02",
      title: "Take the Assessment",
      description: "Complete our comprehensive assessment that evaluates your interests, aptitudes, and personality traits."
    },
    {
      number: "03",
      title: "AI Analysis",
      description: "Our AI system analyzes your responses and combines them with astrological insights to generate personalized recommendations."
    },
    {
      number: "04",
      title: "Receive Your Report",
      description: "Get your detailed career guidance report with personalized recommendations and insights into your potential career paths."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Data-Driven Insights",
      description: "Our AI assessment uses advanced algorithms to analyze your profile and provide evidence-based career recommendations."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: "Personalized Guidance",
      description: "Get tailored recommendations based on your unique combination of interests, skills, and astrological indicators."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Save Time & Effort",
      description: "Avoid years of uncertainty and trial-and-error by identifying your optimal career path early."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Holistic Approach",
      description: "Our assessment considers not just your skills and interests, but also astrological aspects that may influence your career success."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-blue to-brand-cyan text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">AI-Powered Career Assessment</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Discover your perfect career path with our advanced AI assessment that combines psychometric analysis with astrological insights.
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              Start Your Free Assessment
            </Button>
          </div>
          
          {/* Abstract elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        {/* How It Works */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-brand-light rounded-lg p-6 shadow-md h-full">
                    <div className="text-3xl font-bold text-brand-blue mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our Assessment</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Our unique assessment combines traditional psychometric analysis with astrological insights to provide a holistic view of your career potential.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sample Report */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Your Comprehensive Career Report</h2>
                <p className="text-lg text-gray-600 mb-6">
                  After completing the assessment, you'll receive a detailed report that includes:
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Personalized career recommendations based on your profile",
                    "Insights into your strengths, preferences, and potential challenges",
                    "Astrological analysis of your career potential",
                    "Educational pathways to reach your ideal career",
                    "Actionable steps to help you move forward"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={'blue'}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="mt-8 bg-brand-blue hover:bg-brand-blueLight">
                  View Sample Report
                </Button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="w-full h-80 bg-white rounded-md shadow-sm p-4">
                  <div className="border-b pb-4">
                    <h3 className="text-xl font-bold text-brand-blue">Career Assessment Report</h3>
                    <p className="text-gray-500 text-sm">Based on your profile and assessment responses</p>
                  </div>
                  <div className="py-4">
                    <div className="space-y-4">
                      <h4 className="font-medium">Top Career Recommendations</h4>
                      <div className="space-y-2">
                        <div className="h-8 bg-brand-blue/20 rounded-md w-full"></div>
                        <div className="h-8 bg-brand-cyan/20 rounded-md w-full"></div>
                        <div className="h-8 bg-brand-red/20 rounded-md w-full"></div>
                      </div>
                      
                      <h4 className="font-medium pt-2">Key Strengths</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                        <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                        <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                        <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                      </div>
                      
                      <h4 className="font-medium pt-2">Astrological Insights</h4>
                      <div className="h-20 bg-brand-yellow/20 rounded-md w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-brand-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Career Discovery Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take our AI-powered assessment today and unlock insights that will guide your educational and career decisions.
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              Start Free Assessment
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessment;
