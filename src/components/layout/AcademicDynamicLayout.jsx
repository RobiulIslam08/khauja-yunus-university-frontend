import React from "react";
import { Outlet, Link } from "react-router-dom"; // Link এবং Outlet ইম্পোর্ট করুন


import AcademicReusableNavbar from "./AcademicReusableNavbar";
import AcademicReusableFooter from "./AcademicReusableFooter";

export default function AcademicDynamicLayout({ dropdownItems, peopleDropdown, title, footerInfo }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#f8fafc]">
            {/* Navbar এ Home লিংক যোগ করার জন্য একটু লজিক এড করতে পারেন অথবা Navbar এর ভেতরেই দিতে পারেন */}
            <AcademicReusableNavbar
                dropdownItems={dropdownItems} 
                peopleDropdown={peopleDropdown} 
                title={title} 
            />
            
            <main className="flex-1 w-full max-w-7xl mx-auto ">
                {/* Outlet ডাইনামিক চাইল্ড পেজ রেন্ডার করবে */}
                <Outlet /> 
            </main>
            
            <AcademicReusableFooter info={footerInfo} />
        </div>
    );
}