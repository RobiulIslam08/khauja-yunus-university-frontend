import React from 'react';

const logos = [
  {
    id: 1,
    src: "https://www.kyau.edu.bd/images//ugc.png",
    alt: "UGC Logo"
  },
  {
    id: 2,
    src: "https://www.kyau.edu.bd/images//uu.png",
    alt: "University of Oviedo"
  },
  {
    id: 3,
    src: "https://www.kyau.edu.bd/images//ministryEdu.png",
    alt: "Ministry of Education"
  }
];

// স্ক্রল স্মুথ করার জন্য ডাটা কয়েকবার রিপিট করা হচ্ছে
const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

const AffiliationSection = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section Design */}
        {/* ইমেজের মতো বাম পাশে সোজা এবং ডান পাশে রাউন্ড শেপ */}
        <div className="relative bg-[#0a0040] py-3 md:py-4 px-6 md:px-10 rounded-tr-[50px] rounded-br-[50px] w-full md:w-[95%] mx-auto mb-10 shadow-lg">
          <h2 className="text-white text-center text-lg md:text-2xl font-semibold tracking-wide">
            We Are Approved & Affiliated With
          </h2>
        </div>

        {/* Marquee/Slider Section */}
        <div className="relative w-full overflow-hidden">
          {/* Gradients for smooth fade effect on sides (Optional) */}
          <div className="absolute top-0 left-0 z-10 h-full w-10 bg-linear-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 z-10 h-full w-10 bg-linear-to-l from-white to-transparent"></div>

          {/* Sliding Track */}
          <div className="flex w-max animate-scroll hover:pause gap-12 md:gap-24 items-center">
            {repeatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="group relative shrink-0 cursor-pointer"
              >
                {/* Image Container with Glow Effect */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center p-4 border border-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliationSection;