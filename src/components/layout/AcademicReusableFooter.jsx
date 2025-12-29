import React from "react";

export default function AcademicReusableFooter({ info }) {
	return (
		<footer className="w-full bg-[#0a0040] py-4 px-6 text-center text-gray-300 text-sm mt-10">
			<div>{info ? info : `© ${new Date().getFullYear()} Khawja Yunus Ali University`}</div>
		</footer>
	);
}
