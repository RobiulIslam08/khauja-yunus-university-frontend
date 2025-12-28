import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

export default function DropdownNavItem({ label, items }) {
    const btnRef = useRef(null);
    const [leftOffset, setLeftOffset] = useState(0);
    const [menuWidth, setMenuWidth] = useState(0); // নতুন স্টেট: মেনুর প্রস্থের জন্য

    const handleClose = () => {
        if (btnRef.current) btnRef.current.blur();
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    const handleDocumentClick = (e) => {
        if (btnRef.current && !btnRef.current.contains(e.target)) {
            btnRef.current.blur();
        }
    };

    useEffect(() => {
        const updatePosition = () => {
            if (btnRef.current) {
                const rect = btnRef.current.getBoundingClientRect();
                setLeftOffset(-rect.left); // বাম পাশের অফসেট সেট করা
                
                // ফিক্স: w-screen এর পরিবর্তে আমরা document.documentElement.clientWidth ব্যবহার করছি
                // এটি স্ক্রলবার বাদ দিয়ে শুধু ভিজিবল স্ক্রিনের প্রস্থ নেয়, তাই নিচে overflow আসবে না।
                setMenuWidth(document.documentElement.clientWidth);
            }
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);

        return () => {
            window.removeEventListener("resize", updatePosition);
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => document.removeEventListener('mousedown', handleDocumentClick);
    }, []);

    const isAcademic = label && label.toLowerCase() === "academic";

    return (
        <div className="relative group">
            <button
                ref={btnRef}
                className="px-3 md:px-4 py-3 text-white text-xs md:text-sm font-semibold hover:bg-[#0a0040] transition duration-200 whitespace-nowrap flex items-center gap-1 focus:outline-none"
                type="button"
            >
                {label}
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* --- DESIGN FOR ACADEMIC MENU (MEGA MENU) --- */}
            {isAcademic ? (
                <div
                    // পরিবর্তন: 'w-screen' ক্লাসটি সরিয়ে ফেলা হয়েছে
                    className="absolute top-full h-[70vh] overflow-y-auto bg-[#000033] shadow-2xl border-t-4 border-[#ea580c] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-300 z-50"
                    
                    // এখানে width ডাইনামিক ভাবে সেট করা হচ্ছে
                    style={{ 
                        left: `${leftOffset}px`, 
                        width: `${menuWidth}px` 
                    }}
                >
						<h1 className="text-center bg-[#ea580c] text-white w-full pb-2 font-blod text-lg">Academic Information</h1>
                    <div className="container mx-auto px-4 p-2">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 text-left">
                            {items.map((column, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <h3 className="text-[#ea580c] font-bold text-lg mb-4 uppercase tracking-wide border-b border-gray-700 pb-2 md:border-none md:pb-0">
                                        {column.label}
                                    </h3>
                                    <ul className="space-y-2">
                                        {column.submenu && column.submenu.map((sub, subIdx) => (
                                            <li key={subIdx}>
                                                {sub.isHeader ? (
                                                    <div className="text-[#4CAF50] font-bold mt-4 mb-2 text-sm uppercase">
                                                        {sub.label}
                                                    </div>
                                                ) : (
                                                    <Link
                                                        to={sub.path}
                                                        onClick={handleClose}
                                                        className="group flex items-start text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                                    >
                                                        <span className="mt-1.5 mr-2 w-1.5 h-1.5 bg-[#ea580c] rotate-45 shrink-0 group-hover:bg-white transition-colors"></span>
                                                        {sub.label}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                /* --- DESIGN FOR OTHER MENUS (Standard Dropdown) --- */
                <div className="absolute left-0 top-full z-20 min-w-48 bg-white shadow-lg rounded-b-md py-2 border border-t-0 border-gray-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-150">
                    {items && items.map((item, idx) =>
                        item.submenu ? (
                            <div key={idx} className="relative group/sub">
                                <div className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100 font-medium cursor-pointer select-none group-hover/sub:bg-gray-100">
                                    {item.label}
                                    <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="absolute left-full top-0 z-30 min-w-44 bg-white shadow-lg rounded-md py-2 border border-gray-200 opacity-0 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:pointer-events-auto transition-opacity duration-150">
                                    {item.submenu.map((sub, subIdx) => (
                                        <Link
                                            key={subIdx}
                                            to={sub.path}
                                            className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 text-sm"
                                            onClick={handleClose}
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={idx}
                                to={item.path}
                                className="block px-4 py-2 text-gray-800 hover:bg-green-100 hover:text-green-700 text-sm"
                                onClick={handleClose}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </div>
            )}
        </div>
    );
}