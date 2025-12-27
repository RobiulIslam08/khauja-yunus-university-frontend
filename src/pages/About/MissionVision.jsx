import React from "react";
import PageHeader from "../../components/common/PageHeader";

const MissionVision = () => (
	<>
		<PageHeader title="Mission & Vision" />
		<section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Grid Layout: Mobile a 1 column, Desktop a 2 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {/* --- Vision Section --- */}
          <div className="flex flex-col">
            {/* Header with Orange Underline */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-3">
                Vision
              </h2>
              <div className="w-full h-0.5 bg-orange-500"></div>
            </div>
            
            {/* Vision Content */}
            <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
              To provide higher education, especially to the underprivileged, producing globally competent graduates with knowledge, skills, innovation, research and high moral standards.
            </p>
          </div>

          {/* --- Mission Section --- */}
          <div className="flex flex-col">
            {/* Header with Orange Underline */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-3">
                Mission
              </h2>
              <div className="w-full h-0.5 bg-orange-500"></div>
            </div>

            {/* Mission List */}
            <ol className="list-decimal list-outside ml-5 space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
              <li className="pl-2">
                Providing higher education that produces globally competent graduates at affordable cost.
              </li>
              <li className="pl-2">
                Fostering lifelong learning with strong communication abilities.
              </li>
              <li className="pl-2">
                Ensuring a transformative learning environment to generate global citizen.
              </li>
              <li className="pl-2">
                Discovering students' full potential to cope up with digital literacy.
              </li>
              <li className="pl-2">
                Establishing a research friendly environment.
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
	</>
);

export default MissionVision;
