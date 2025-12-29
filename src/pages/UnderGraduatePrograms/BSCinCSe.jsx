import React, { useState } from 'react';

// SVG Icons for the accordion arrow
const ChevronDownIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);

const BSCinCSe = () => {
    // State to track which accordion item is open. Default is 0 (1st one).
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    // Data extracted from the screenshot
    const semesterData = [
        {
            title: "1st Year - 1st Semester",
            courses: [
                { code: "CSE 1101", name: "Computer Fundamentals", credit: 3 },
                { code: "CSE 1103", name: "Electrical Circuit", credit: 3 },
                { code: "CSE 1104", name: "Electrical Circuit Lab.", credit: 1 },
                { code: "PHY 1102", name: "Physics-I Lab.", credit: 2 },
                { code: "MATH 1101", name: "Differential and Integral Calculus", credit: 3 },
                { code: "ENG 1101", name: "English-I", credit: 3 },
                { code: "HUM 1101", name: "Emergence of Bangladesh", credit: 3 },
            ]
        },
        { title: "1st Year - 2nd Semester", courses: [] },
        { title: "2nd Year - 1st Semester", courses: [] },
        { title: "2nd Year - 2nd Semester", courses: [] },
        { title: "3rd Year - 1st Semester", courses: [] },
        { title: "3rd Year - 2nd Semester", courses: [] },
        { title: "4th Year - 1st Semester", courses: [] },
        { title: "4th Year - 2nd Semester", courses: [] },
    ];

    const tuitionData = {
        totalCredits: 150,
        duration: "4-Years",
        totalSemesters: 8,
        admissionFee: "12,000.00",
        totalFees: "502,500.00"
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans pb-10">
            {/* Main Content Container */}
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                
                {/* Page Header Title */}
                <div className="flex justify-center my-8">
                    <div className="border border-cyan-400 rounded-full px-8 py-3 text-center shadow-sm">
                        <h1 className="text-xl md:text-2xl text-gray-600 font-normal">
                            Bachelor of Science in Computer Science & Engineering
                        </h1>
                    </div>
                </div>

                {/* Two Column Layout (Responsive) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    
                    {/* LEFT COLUMN: Course Information */}
                    <div className="w-full">
                        <h2 className="text-center font-semibold text-lg mb-4 text-gray-800">
                            Course Information
                        </h2>
                        
                        <div className="border border-gray-200 rounded-md bg-white">
                            {semesterData.map((sem, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div key={index} className="border-b border-gray-200 last:border-none">
                                        {/* Accordion Header */}
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className={`w-full flex justify-between items-center px-4 py-3 text-left transition-colors duration-200
                                                ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-50'}
                                            `}
                                        >
                                            <span className="text-sm md:text-base font-medium">{sem.title}</span>
                                            <ChevronDownIcon 
                                                className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                                            />
                                        </button>

                                        {/* Accordion Content (Table) */}
                                        {isOpen && (
                                            <div className="p-4 bg-white animate-fadeIn">
                                                {sem.courses.length > 0 ? (
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-sm text-left border border-gray-200">
                                                            <thead>
                                                                <tr className="bg-gray-50">
                                                                    <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700 w-1/4">Course Code</th>
                                                                    <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700 w-2/4">Course Name</th>
                                                                    <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700 w-1/4">Credit</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {sem.courses.map((course, idx) => (
                                                                    <tr key={idx} className="hover:bg-gray-50">
                                                                        <td className="border border-gray-200 px-4 py-2 text-gray-600">{course.code}</td>
                                                                        <td className="border border-gray-200 px-4 py-2 text-gray-600">{course.name}</td>
                                                                        <td className="border border-gray-200 px-4 py-2 text-gray-600">{course.credit}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                ) : (
                                                    <div className="text-center text-gray-400 py-2 italic text-sm">
                                                        Details not available in preview
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Tuition Fee */}
                    <div className="w-full">
                        <h2 className="text-center font-semibold text-lg mb-4 text-gray-800">
                            Tution Fee
                        </h2>
                        
                        <div className="overflow-x-auto border border-gray-200 rounded-sm">
                            <table className="w-full text-sm text-center">
                                <thead>
                                    <tr className="bg-white border-b border-gray-200 text-gray-800 font-bold">
                                        <th className="p-3 border-r border-gray-200 whitespace-nowrap">Total Credits</th>
                                        <th className="p-3 border-r border-gray-200 whitespace-nowrap">Program Duration</th>
                                        <th className="p-3 border-r border-gray-200 whitespace-nowrap">Total Semesters</th>
                                        <th className="p-3 border-r border-gray-200 whitespace-nowrap">Admission Fee</th>
                                        <th className="p-3 whitespace-nowrap">Total Fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-50 text-gray-700">
                                        <td className="p-3 border-r border-gray-200">{tuitionData.totalCredits}</td>
                                        <td className="p-3 border-r border-gray-200">{tuitionData.duration}</td>
                                        <td className="p-3 border-r border-gray-200">{tuitionData.totalSemesters}</td>
                                        <td className="p-3 border-r border-gray-200">{tuitionData.admissionFee}</td>
                                        <td className="p-3">{tuitionData.totalFees}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BSCinCSe;