import React, { useState } from 'react';

const BscInBcbt = () => {
    // State to handle accordion toggle (defaulting to index 7 / 4th Year-2nd Sem as open to match screenshot)
    const [openSemester, setOpenSemester] = useState(7);

    const semesters = [
        "1st Year - 1st Semester",
        "1st Year - 2nd Semester",
        "2nd Year - 1st Semester",
        "2nd Year - 2nd Semester",
        "3rd Year - 1st Semester",
        "3rd Year - 2nd Semester",
        "4th Year - 1st Semester",
        "4th Year - 2nd Semester"
    ];

    // Data for the 4th Year - 2nd Semester (visible in screenshot)
    const lastSemesterCourses = [
        { code: "BCBT 409", name: "Medical and Pharmaceutical Biotechnology", credit: 3 },
        { code: "BCBT 410", name: "Genomics and Proteomics", credit: 3 },
        { code: "BCBT 411", name: "Spectroscopy", credit: 3 },
        { code: "BCBT 412", name: "Oncology", credit: 3 },
        { code: "BCBT 413", name: "Quality Control of Drug", credit: 3 },
        { code: "BCBT 414", name: "Bioinformatics", credit: 3 },
        { code: "BCBT 415", name: "Practical", credit: 2 },
        { code: "BCBT 416", name: "Viva-voce", credit: 2 },
        { code: "BCBT 417", name: "Assignment/Project/Thesis", credit: 2 },
    ];

    const toggleSemester = (index) => {
        setOpenSemester(openSemester === index ? null : index);
    };

    return (
        <div className="bg-white p-4 md:p-8 shadow-sm border border-gray-200 font-sans">
            
            {/* Page Title */}
            <div className="flex justify-center mb-10">
                <div className="w-full max-w-4xl border border-cyan-400 rounded-full py-3 px-4 text-center">
                    <h1 className="text-xl md:text-2xl text-gray-600 font-normal">
                        Bachelor of Science in Biochemistry and Biotechnology
                    </h1>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
                
                {/* --- LEFT COLUMN: Course Information --- */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-center text-lg font-bold text-gray-800 mb-4">Course Information</h2>
                    
                    <div className="border border-gray-200 bg-white">
                        {semesters.map((sem, index) => (
                            <div key={index} className="border-b border-gray-200 last:border-b-0">
                                {/* Accordion Button */}
                                <button 
                                    onClick={() => toggleSemester(index)}
                                    className={`w-full flex justify-between items-center px-4 py-3 text-sm font-medium transition-colors duration-200 
                                    ${openSemester === index ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                >
                                    <span>{sem}</span>
                                    <svg 
                                        className={`w-4 h-4 transform transition-transform duration-200 ${openSemester === index ? 'rotate-180' : ''}`} 
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Accordion Content */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSemester === index ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {openSemester === index && (
                                        <div className="border-t border-gray-200">
                                            {index === 7 ? (
                                                <table className="w-full text-left text-sm">
                                                    <thead className="bg-white text-gray-800 font-bold border-b border-gray-200">
                                                        <tr>
                                                            <th className="px-4 py-2 border-r border-gray-200 w-1/4">Course Code</th>
                                                            <th className="px-4 py-2 border-r border-gray-200 w-1/2">Course Name</th>
                                                            <th className="px-4 py-2 w-1/4">Credit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100">
                                                        {lastSemesterCourses.map((course, idx) => (
                                                            <tr key={idx} className="hover:bg-gray-50 odd:bg-gray-50 even:bg-white">
                                                                <td className="px-4 py-2 border-r border-gray-200 text-gray-600">{course.code}</td>
                                                                <td className="px-4 py-2 border-r border-gray-200 text-gray-600">{course.name}</td>
                                                                <td className="px-4 py-2 text-gray-600">{course.credit}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            ) : (
                                                <div className="p-4 text-gray-500 italic text-sm text-center">
                                                    Course list for {sem} would appear here...
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Summary Bar */}
                    <div className="bg-[#d5eddb] text-[#155724] px-4 py-2 flex justify-between text-sm font-semibold mt-0 rounded-b-sm border-t-0">
                        <span>Total Semester: 8</span>
                        <span>Total Credit: 160</span>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: Tuition Fee --- */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-center text-lg font-bold text-gray-800 mb-4">Tution Fee</h2>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-center text-sm border-collapse border border-gray-200">
                            <thead>
                                {/* The red top border on headers */}
                                <tr className="border-t-[3px] border-red-500 bg-white text-gray-800 font-bold">
                                    <th className="border border-gray-200 px-2 py-3">Total Credits</th>
                                    <th className="border border-gray-200 px-2 py-3">Program Duration</th>
                                    <th className="border border-gray-200 px-2 py-3">Total Semesters</th>
                                    <th className="border border-gray-200 px-2 py-3">Admission Fee</th>
                                    <th className="border border-gray-200 px-2 py-3">Total Fees</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#f9f9f9] text-gray-700">
                                    <td className="border border-gray-200 px-2 py-3">160</td>
                                    <td className="border border-gray-200 px-2 py-3">4-Years</td>
                                    <td className="border border-gray-200 px-2 py-3">8</td>
                                    <td className="border border-gray-200 px-2 py-3">12,000.00</td>
                                    <td className="border border-gray-200 px-2 py-3">460,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BscInBcbt;