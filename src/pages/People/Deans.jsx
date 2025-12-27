import React from "react";
import PageHeader from "../../components/common/PageHeader";
const facultyMembers = [
    {
      id: 1,
      name: "Prof. Dr. Mohammad Shahed Akond",
      department: "Faculty of Science and engineering",
      intercom: "152",
      room: "209",
      image: "https://www.kyau.edu.bd/images/20250216072325.png", // Placeholder image
    },
    {
      id: 2,
      name: "Prof. Dr. Mostofa Mahmud Hasan",
      department: "Faculty of Business",
      intercom: "138",
      room: "409",
      image: "https://www.kyau.edu.bd/images/20251125085105.png", // Placeholder image
    },
    {
      id: 3,
      name: "Prof. Dr. Fazle Rabbi Shakil Ahmed",
      department: "Faculty of Bio-medical science",
      intercom: "147",
      room: "124",
      image: "https://www.kyau.edu.bd/images/20251125085105.png", // Placeholder image
    },
  ];
const Deans = () => (
	<>
		<PageHeader title="Deans of Faculties" />
		<div className="max-w-7xl mx-auto w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch mt-8 mb-8">
        
        {facultyMembers.map((member) => (
          <div 
            key={member.id} 
            className="group flex flex-col bg-white rounded-md shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 duration-300"
          >
            {/* Top Section: Image */}
            <div className="pt-8 pb-6 px-4 flex justify-center items-center grow bg-white">
              <div className="relative">
                {/* Image with Cyan Border Ring */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-[3px] border-cyan-400 p-1 bg-white shadow-sm"
                />
              </div>
            </div>

            {/* Bottom Section: Info (Teal Background) */}
            <div className="bg-[#065f6e] py-6 px-4 text-center">
              {/* Name */}
              <h3 className="text-cyan-400 font-bold text-sm md:text-base mb-2 leading-tight">
                {member.name}
              </h3>
              
              {/* Department */}
              <p className="text-white text-xs md:text-sm font-medium mb-3">
                {member.department}
              </p>
              
              {/* Details */}
              <div className="space-y-1">
                <p className="text-white text-xs md:text-sm font-medium">
                  Intercom: {member.intercom}
                </p>
                <p className="text-white text-xs md:text-sm font-medium">
                  Room: {member.room}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
	</>
);

export default Deans;
