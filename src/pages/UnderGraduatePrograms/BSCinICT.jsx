import React, { useState } from 'react';

// Reusable Icon
const ChevronDownIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const BSCinICT = () => {
    // State to track open accordions. 
    // using object to track independent sections if needed, 
    // but here we use a simple string/number ID system for simplicity.
    const [openSection, setOpenSection] = useState(null);

    const toggleAccordion = (id) => {
        setOpenSection(openSection === id ? null : id);
    };

    // Data for Semesters (Course Information)
    const semesterData = [
        "1st Year - 1st Semester",
        "1st Year - 2nd Semester",
        "2nd Year - 1st Semester",
        "2nd Year - 2nd Semester",
        "3rd Year - 1st Semester",
        "3rd Year - 2nd Semester",
        "4th Year - 1st Semester",
        "4th Year - 2nd Semester",
    ];

    // Data for Specializations
    const specializationData = [
        "Specialization Option-A (Software Development & Technology)",
        "Specialization Option-B (Network Security & Technology)",
        "Specialization Option-C (Data Science)",
        "Specialization Option-D (Information Systems Management)",
    ];

    const tuitionData = {
        totalCredits: 150,
        duration: "4-Years",
        totalSemesters: 8,
        admissionFee: "12,000.00",
        totalFees: "502,500.00"
    };

    // Helper component for Accordion Items to reduce code repetition
    const AccordionItem = ({ title, id }) => {
        const isOpen = openSection === id;
        return (
            <div className="border-b border-gray-200 last:border-none bg-white">
                <button
                    onClick={() => toggleAccordion(id)}
                    className={`w-full flex justify-between items-center px-4 py-3 text-left transition-colors duration-200
                        ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-50'}
                    `}
                >
                    <span className="text-sm md:text-base font-medium">{title}</span>
                    <ChevronDownIcon 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} 
                    />
                </button>
                {isOpen && (
                    <div className="p-4 bg-gray-50 text-sm text-gray-500 border-t border-gray-100">
                        {/* Placeholder content since image showed collapsed items */}
                        <p>Course details for {title} will appear here.</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans pb-12">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                
                {/* --- Main Title --- */}
                <div className="flex justify-center my-8">
                    <div className="border border-cyan-400 rounded-full px-6 py-3 text-center shadow-sm w-full max-w-3xl">
                        <h1 className="text-lg md:text-2xl text-gray-600 font-normal">
                            Bachelor of Science in Information & Communication Technology
                        </h1>
                    </div>
                </div>

                {/* --- Grid Layout --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-start">
                    
                    {/* === LEFT COLUMN === */}
                    <div className="w-full flex flex-col gap-10">
                        
                        {/* 1. Course Information Section */}
                        <div>
                            <h2 className="text-center font-semibold text-lg mb-4 text-gray-800">
                                Course Information
                            </h2>
                            <div className="border border-gray-200 rounded-md overflow-hidden">
                                {semesterData.map((title, idx) => (
                                    <AccordionItem key={`sem-${idx}`} title={title} id={`sem-${idx}`} />
                                ))}
                            </div>
                        </div>

                        {/* 2. Specialization Options Section */}
                        <div>
                            <h2 className="text-center font-semibold text-lg mb-4 text-gray-800">
                                Specialization Options
                            </h2>
                            <div className="border border-gray-200 rounded-md overflow-hidden">
                                {specializationData.map((title, idx) => (
                                    <AccordionItem key={`spec-${idx}`} title={title} id={`spec-${idx}`} />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* === RIGHT COLUMN === */}
                    <div className="w-full">
                        <h2 className="text-center font-semibold text-lg mb-4 text-gray-800">
                            Tution Fee
                        </h2>
                        
                        <div className="overflow-x-auto border border-gray-200 rounded-sm shadow-sm">
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
                                        <td className="p-3 font-medium">{tuitionData.totalFees}</td>
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

export default BSCinICT;