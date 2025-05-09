import React from 'react';
interface Reference {
  img: string;
  title: string;
  desc: string[];
}

const EmployabilityTrendsSection = () => {
  const references : Reference[] = [
    {
      "img": "./img1.png",
      "title": "Domain Champions: B.Com, MBA, and Tech Lead Employability Race",
      "desc": [
        "B.E./Tech graduates showed highest employability in 2023 at 57.44%",
      "MBA graduates reached 60.11% employability by 2023, showing consistent growth",
      "B.Com employability rose significantly to 60.62% by 2023",
      "MCA experienced employability fluctuations, ending at 50.84% in 2023",
      "B.Sc graduates saw moderate improvement from 31.76% (2017) to 37.68% (2023)",
      "B.Pharma showed strong recovery to 57.61% in 2023",
      "ITI programs demonstrated 54.2% employability in 2023",
      "Polytechnic graduates' employability declined from 35.77% to 27.81% during the period"
      ]
    },
    {
      "img": "./img2.png",
      "title": "India's Employment Hotspots: Northern States Dominate",
      "desc": [
        "Uttar Pradesh leads with 72.7% employability rate",
      "Maharashtra ranks second at 69.8%",
      "Delhi holds third position with 68.9%",
      "Andhra Pradesh follows at 65.58%",
      "Rajasthan ranks fifth with 64.5%",
      "Karnataka sits at sixth place with 64.2%",
      "Telangana is seventh with 63.06%",
      "Punjab ranks eighth with 64.91%",
      "Orissa holds ninth position at 64.91%",
      "Haryana completes the top 10 with 59.2% employability"
      ]
    },
    {
      "img": "./img3.png",
      "title": "Gender Shift: Women Outpacing Men in Employability",
      "desc": [
        "Women consistently showed higher employability rates than men from 2017-2023",
        "Women's employability increased from 40.88% (2017) to 52.80% (2023)",
        "Men's employability improved from 34.26% to 47.20% over the period",
        "Work participation shifted significantly: men dominated at 71% vs 29% (2017) to more balanced 53% vs 47% (2023)",
        "2020 showed equal 50-50 work participation between genders",
        "The gender gap in employability narrowed from 6.62% in 2017 to 5.6% in 2023",
        "Both genders saw their highest employability rates in 2023",
        "Women's participation in workforce grew by 18 percentage points over six years"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">NASCOM Employability Trends 2017-2023</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <div key={index} className="bg-white h-auto space-between rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative transition-all duration-300">
                <img 
                  src={reference.img} 
                  alt={reference.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{reference.title}</h3>
                </div>
              </div>
              
              <div className="p-5">
                <ul className="space-y-2">
                  {reference.desc.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployabilityTrendsSection;