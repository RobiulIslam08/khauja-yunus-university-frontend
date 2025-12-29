// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import DropdownNavItem from '../common/navbar/DropdownNavItem';


// // export default function AcademicReusableNavbar({ dropdownItems, peopleDropdown, title }) {
// //     return (
// //         <nav className="w-full bg-[#0a0040] py-3 px-6 flex items-center justify-evenly shadow-md">
// //             {/* Title - Click করলে ডিপার্টমেন্টের হোমে যাবে */}
// //             <Link to="" className="text-white font-bold text-lg tracking-wide hover:text-gray-200">
// //                 {title || "Academic Section"}
// //             </Link>
            
// //             <div className="flex gap-4 items-center">
// //                 {/* Static Home Button */}
// //                 <Link to="" className="px-3 py-3 text-white text-sm font-semibold hover:bg-[#1a1060] transition">
// //                     Home
// //                 </Link>

// //                 {dropdownItems && dropdownItems.length > 0 && (
// //                     <DropdownNavItem label="Programs" items={dropdownItems} />
// //                 )}
// //                 {peopleDropdown && peopleDropdown.length > 0 && (
// //                     <DropdownNavItem label="People" items={peopleDropdown} />
// //                 )}
// //             </div>
// //         </nav>
// //     );
// // }

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import DropdownNavItem from '../common/navbar/DropdownNavItem';

// export default function AcademicReusableNavbar({ dropdownItems, peopleDropdown, title }) {
//     // মোবাইল মেনু ওপেন/ক্লোজ করার জন্য স্টেট
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <nav className="w-full bg-[#0a0040] shadow-md relative z-50">
//             {/* Main Container */}
//             <div className="container mx-auto px-4 py-3 flex items-center justify-evenly">
                
//                 {/* 1. Title / Logo */}
//                 <Link 
//                     to="" 
//                     className="text-white font-bold text-lg tracking-wide hover:text-gray-200 truncate"
//                 >
//                     {title || "Academic Section"}
//                 </Link>

//                 {/* 2. Desktop Menu (Hidden on Mobile) */}
//                 <div className="hidden md:flex gap-4 items-center">
//                     {/* Static Home Button */}
//                     <Link 
//                         to="" 
//                         className="px-3 py-3 text-white text-sm font-semibold hover:bg-[#1a1060] transition rounded-md"
//                     >
//                         Home
//                     </Link>

//                     {dropdownItems && dropdownItems.length > 0 && (
//                         <DropdownNavItem label="Programs" items={dropdownItems} />
//                     )}
//                     {peopleDropdown && peopleDropdown.length > 0 && (
//                         <DropdownNavItem label="People" items={peopleDropdown} />
//                     )}
//                 </div>

//                 {/* 3. Mobile Hamburger Button (Visible only on Mobile) */}
//                 <button 
//                     className="md:hidden text-white focus:outline-none p-2"
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 >
//                     {isMobileMenuOpen ? (
//                         // Close Icon (X)
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     ) : (
//                         // Menu Icon (Hamburger)
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     )}
//                 </button>
//             </div 
//             {/* 4. Mobile Menu Dropdown (Conditionally Rendered) */}
//             {isMobileMenuOpen && (
//                 <div className="md:hidden bg-[#0e0055] border-t border-gray-700 w-full flex flex-col px-4 py-4 space-y-2 animate-fadeIn">
                    
//                     <Link 
//                         to="" 
//                         className="block px-3 py-2 text-white text-sm font-semibold hover:bg-[#1a1060] rounded transition"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                         Home
//                     </Link>

//                     {/* Mobile Dropdown Items */}
//                     {/* নোট: DropdownNavItem যদি মোবাইলের জন্য অপ্টিমাইজড না হয়, তবে এখানে ক্লিক করলে লেআউট ভেঙে যেতে পারে। 
//                         সাধারণত মোবাইলে ড্রপডাউনগুলো নিচে নিচে (Accordion style) আসা ভালো। */}
                    
//                     <div className="flex flex-col items-start gap-2">
//                         {dropdownItems && dropdownItems.length > 0 && (
//                             <div className="w-full">
//                                 <DropdownNavItem label="Programs" items={dropdownItems} />
//                             </div>
//                         )}
//                         {peopleDropdown && peopleDropdown.length > 0 && (
//                             <div className="w-full">
//                                 <DropdownNavItem label="People" items={peopleDropdown} />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownNavItem from '../common/navbar/DropdownNavItem';

export default function AcademicReusableNavbar({ dropdownItems, peopleDropdown, title }) {
    // মোবাইল মেনু ওপেন/ক্লোজ করার জন্য স্টেট
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // KYAU Logo URL (ইমেজ থেকে নেওয়া লোগো বসানোর জন্য)

    return (
        <div className="w-full font-sans">
            
            {/* --- TOP HEADER SECTION (UNIVERSITY & DEPT NAME) --- */}
            <div className="bg-white w-full py-4 px-4 border-b border-gray-100 flex flex-col items-center justify-center text-center">
                <h2 className="text-[#00a651] font-bold text-base md:text-2xl uppercase tracking-wide leading-tight">
                    Khwaja Yunus Ali University
                </h2>
                <h1 className="text-gray-900 font-bold text-lg md:text-3xl uppercase mt-1 md:mt-2 tracking-normal leading-tight">
                    {title || "Department of Computer Science & Engineering"}
                </h1>
            </div>

            {/* --- NAVBAR SECTION --- */}
            <nav className="w-full bg-[#1a1c20] shadow-md relative z-50">
                <div className="container mx-auto px-4 md:px-10">
                    <div className="flex items-center justify-between h-14 md:h-16">

                        {/* LEFT SIDE: LOGO & DESKTOP MENU */}
                        <div className="flex items-center gap-8">
                            
                            {/* Logo */}
                            <Link to="/" className="shrink-0">
                                <img 
                                    src="https://www.kyau.edu.bd/images/kyau.png"
                                    alt="KYAU Logo" 
                                    className="h-10 w-10 md:h-12 md:w-12 object-contain"
                                />
                            </Link>

                            {/* Desktop Menu Items (Hidden on Mobile) */}
                            <div className="hidden md:flex items-center space-x-6">
                                {/* Static Home Button */}
                                <Link 
                                    to="" 
                                    className="text-gray-300 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
                                >
                                    Home
                                </Link>

                                {/* Programs Dropdown */}
                                {dropdownItems && dropdownItems.length > 0 && (
                                    <div className="text-gray-300 hover:text-white text-sm font-semibold uppercase tracking-wider">
                                        <DropdownNavItem label="Program" items={dropdownItems} />
                                    </div>
                                )}

                                {/* People Dropdown */}
                                {peopleDropdown && peopleDropdown.length > 0 && (
                                    <div className="text-gray-300 hover:text-white text-sm font-semibold uppercase tracking-wider">
                                        <DropdownNavItem label="People" items={peopleDropdown} />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* RIGHT SIDE: MOBILE HAMBURGER BUTTON */}
                        <div className="md:hidden flex items-center">
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none p-2"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MOBILE MENU DROPDOWN --- */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-[#1f2937] border-t border-gray-700">
                        <div className="px-4 pt-2 pb-6 space-y-3">
                            
                            <Link 
                                to="" 
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-base font-medium uppercase"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            {dropdownItems && dropdownItems.length > 0 && (
                                <div className="px-3 py-1">
                                    <span className="text-gray-400 text-xs font-bold uppercase mb-1 block">Programs</span>
                                    <div className="pl-2 border-l-2 border-gray-600">
                                        <DropdownNavItem label="View Programs" items={dropdownItems} />
                                    </div>
                                </div>
                            )}

                            {peopleDropdown && peopleDropdown.length > 0 && (
                                <div className="px-3 py-1">
                                    <span className="text-gray-400 text-xs font-bold uppercase mb-1 block">People</span>
                                    <div className="pl-2 border-l-2 border-gray-600">
                                        <DropdownNavItem label="View People" items={peopleDropdown} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}