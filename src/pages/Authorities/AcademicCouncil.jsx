import React from "react";
import PageHeader from "../../components/common/PageHeader";
const members = [
    {
      id: 1,
      name: "Professor Ahshaullah Habib",
      designation: "Vice Chancellor (In Charge) & Treasurer, Khwaja Yunus Ali University",
      role: "Chairman",
      roleDetail: "(.)",
      image: "https://www.kyau.edu.bd/public/images/20250325072122.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "Mr. Mohammad Yusuf",
      designation: "Chairman, Board of Trustees",
      role: "Member",
      roleDetail: "(Nominated by Board of Trustees)",
      image: "https://www.kyau.edu.bd/public/images/20230315040128.png", // Replace with actual image path
    },
    {
      id: 3,
      name: "Mrs. Husne Ara Hussain",
      designation: "Member, Board of Trustees",
      role: "Member",
      roleDetail: "(Nominated by Board of Trustees)",
      image: "https://www.kyau.edu.bd/public/images/20230306090634.png", // Replace with actual image path
    },
    {
      id: 4,
      name: "Mr. Mohammed Yunus Khan",
      designation: "Member, Board of Trustees",
      role: "Member",
      roleDetail: "(Nominated by Board of Trustees)",
      image: "https://www.kyau.edu.bd/public/images/20250325072122.png", // Replace with actual image path
    },
  ];
const AcademicCouncil = () => (


	<>
	<PageHeader title="Academic Council" />
				<div className="w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-10 font-sans">
      <div className="overflow-x-auto border border-gray-300">
        <table className="min-w-full text-left text-sm">
          {/* Table Header */}
          <thead className="bg-white font-bold text-gray-900 border-b border-gray-300">
            <tr>
              <th scope="col" className="px-4 py-3 border-r border-gray-300 w-12">
                SL
              </th>
              <th scope="col" className="px-4 py-3 border-r border-gray-300 w-24">
                Photo
              </th>
              <th scope="col" className="px-4 py-3 border-r border-gray-300">
                Name
              </th>
              <th scope="col" className="px-4 py-3">
                Position
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-300">
            {members.map((member, index) => (
              <tr 
                key={member.id} 
                // Zebra striping: Odd rows get gray background, Even get white
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                {/* SL Column */}
                <td className="px-4 py-4 border-r border-gray-300 align-top text-gray-700">
                  {member.id}
                </td>

                {/* Photo Column */}
                <td className="px-4 py-4 border-r border-gray-300 align-top">
                  <div className="h-20 w-20 rounded-full overflow-hidden border border-gray-200 bg-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>

                {/* Name Column */}
                <td className="px-4 py-4 border-r border-gray-300 align-top">
                  <div className="flex flex-col justify-center h-full pt-2">
                    <span className="font-bold text-gray-900 text-base">
                      {member.name}
                    </span>
                    <span className="text-gray-600 mt-1">
                      {member.designation}
                    </span>
                  </div>
                </td>

                {/* Position Column */}
                <td className="px-4 py-4 align-top">
                  <div className="flex flex-col justify-center h-full pt-2">
                    <span className="font-bold text-gray-900 text-base">
                      {member.role}
                    </span>
                    <span className="text-gray-600 mt-1">
                      {member.roleDetail}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
	</>
)

export default AcademicCouncil;
