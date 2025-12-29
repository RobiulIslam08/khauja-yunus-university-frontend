import React from "react";

function AcademicSimpleNavbar() {
	return (
		<nav className="w-full bg-[#0a0040] py-3 px-6 flex items-center justify-between shadow-md">
			<div className="text-white font-bold text-lg tracking-wide">Academic Section</div>
		</nav>
	);
}

function AcademicSimpleFooter() {
	return (
		<footer className="w-full bg-[#0a0040] py-4 px-6 text-center text-gray-300 text-sm mt-10">
			© {new Date().getFullYear()} Khawja Yunus Ali University
		</footer>
	);
}

export default function AcademicSimpleLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-[#f8fafc]">
			<AcademicSimpleNavbar />
			<main className="flex-1 w-full max-w-4xl mx-auto py-10 px-4 md:px-0">
				{children}
			</main>
			<AcademicSimpleFooter />
		</div>
	);
}
