import React from "react";
import PageHeader from "../../components/common/PageHeader";

const Founder = () => (
	<>
		<PageHeader title="Founder" />
	<section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      
        <div className="flex flex-col lg:flex-row gap-8 items-start">

        
          <div className="w-full lg:w-87.5 shrink-0 border border-cyan-400 p-6 flex flex-col items-center text-center bg-white shadow-sm">
            
            {/* Image Box */}
            <div className="p-1 border border-gray-200 mb-5 bg-white shadow-sm w-full max-w-70">
              <img 
                src="https://www.kyau.edu.bd/images/founder.jpg" 
                alt="Dr. M. M. Amjad Hussain" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Profile Info */}
            <h3 className="text-orange-600 font-bold text-lg md:text-xl uppercase mb-1">
              Dr. M. M. Amjad Hussain
            </h3>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              Founder Chairman
            </p>
            <p className="text-gray-700 text-sm md:text-base font-medium">
              Khwaja Yunus Ali University
            </p>
            <p className="text-gray-500 text-sm mt-1 font-semibold">
              1-Oct-1925 to 11-Sep-2012
            </p>
          </div>

      
          <div className="w-full flex-1 border border-gray-200 p-6 md:p-10 bg-white shadow-sm">
            
            {/* Header Section */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-3 leading-snug">
                Message of the honorable Founder and Chairman
              </h2>
              {/* Orange Underline */}
              <div className="w-full h-0.75 bg-orange-500"></div>
            </div>

            {/* Content Text */}
            <p className="text-gray-700 leading-7 md:leading-8 text-justify text-sm md:text-[15px] font-normal">
              I am really grateful to Almighty Allah who has given our family the opportunity and to nearly fulfill, what the
              great saint of the subcontinent Khwaja Yunus Ali (R) Enayetpuri once said, to establish a Center of Excellence
              for the welfare of Humanity. It came into being by founder and chairman Dr. M.M. Amjad Hussain in this
              sacred land, which is the holy birthplace of the great Saint. With the Mercy of Almighty Allah and blessings of
              Khwaja Yunus Ali (R), Enayetpuri, Khwaja Yunus Ali University has set forth its journey since 2012 to fulfill the
              holy wish of the great saint.
            </p>
          </div>

        </div>
      </div>
    </section>
	</>
);

export default Founder;
