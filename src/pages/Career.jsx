import React from "react";
import PageHeader from "../components/common/PageHeader";
const jobs = [
    {
      id: 1,
      title: "We are looking for Lecturer, Assistant Professor, Associate Professor & Professor for the department of English & Islamic Studies",
      position: "Lecturer, Assistant Professor, Associate Professor",
      posts: "null",
      requirements: "1. Excellent academic and teaching credentials a PhD degree is required. 2. As per UGC guideline. 3. Background of involvement in IQAC activities is preferred",
      deadline: "2024-07-30"
    }
  ];
const Career = () => (
	<>
	<PageHeader title="Career (E-Recruitement)"/>
	<div className="p-4  max-w-7xl mx-auto">
      <div className="overflow-x-auto border border-gray-300">
        <table className="min-w-full text-left border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-white text-black text-sm font-bold border-b border-black">
              <th className="px-3 py-2 border-r border-gray-300 w-1/4">Job Title</th>
              <th className="px-3 py-2 border-r border-gray-300">Position</th>
              <th className="px-3 py-2 border-r border-gray-300 whitespace-nowrap">Number of Post</th>
              <th className="px-3 py-2 border-r border-gray-300 w-1/3">Educational Requirement</th>
              <th className="px-3 py-2 whitespace-nowrap">Application Deadline</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody className="text-sm text-gray-800 bg-[#f2f2f2]">
            {jobs.map((job) => (
              <tr key={job.id} className="border-b border-gray-300 last:border-b-0">
                
                {/* Job Title Link */}
                <td className="px-3 py-2 border-r border-gray-300 align-top">
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">
                    {job.title}
                  </a>
                </td>
                
                {/* Position */}
                <td className="px-3 py-2 border-r border-gray-300 align-top">
                  {job.position}
                </td>
                
                {/* Number of Post */}
                <td className="px-3 py-2 border-r border-gray-300 align-top">
                  {job.posts}
                </td>
                
                {/* Requirements */}
                <td className="px-3 py-2 border-r border-gray-300 align-top">
                  {job.requirements}
                </td>
                
                {/* Deadline */}
                <td className="px-3 py-2 align-top">
                  {job.deadline}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
	</>
)

export default Career;
