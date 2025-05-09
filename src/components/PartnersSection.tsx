
import React from 'react';

const PartnersSection: React.FC = () => {
  const partners = [
    { name: "NASSCOM", logo: "N" },
    { name: "CIIA", logo: "C" },
    { name: "NITI Aayog", logo: "NA" },
    { name: "Industry Alliance", logo: "IA" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Backed by Research From</h2>
          <p className="text-gray-600">
            Our career guidance is supported by research from leading organizations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                <span className="text-2xl font-bold text-gray-500 group-hover:text-brand-blue transition-colors">
                  {partner.logo}
                </span>
              </div>
              <p className="mt-2 text-sm text-center text-gray-600">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
