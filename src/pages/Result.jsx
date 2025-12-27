import React, { useState } from "react";

const Result = () => {
	const [searched, setSearched] = useState(false);

	const handleSearch = (e) => {
		e.preventDefault();
		setSearched(true);
	};

	return (
		<div className="result-page" style={{ maxWidth: 500, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
			<h2 style={{ textAlign: "center", marginBottom: 24 }}>Student Result Search</h2>
			<div className="flex flex-col gap-4 mt-4">
				<label className="flex flex-col gap-1">
					<span className="font-medium text-gray-700 mb-1">Student ID / Roll</span>
					<input
						type="text"
						placeholder="Enter Student ID or Roll"
						className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
						required
					/>
				</label>
				<label className="flex flex-col gap-1">
					<span className="font-medium text-gray-700 mb-1">Date of Birth</span>
					<input
						type="date"
						className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
						required
					/>
				</label>
				<button
					onClick={handleSearch}
					style={{ background: '#00a63e' }}
					className="mt-2 px-4 py-2 text-white rounded font-semibold transition hover:brightness-90"
				>
					Search
				</button>
			</div>
			{searched && (
				<div className="w-full max-w-2xl mx-auto mt-8">
					<table className="w-full border-collapse border border-black  text-sm md:text-base text-black">
						<tbody>
							<tr className="even:bg-gray-300">
								<td className="border border-black px-4 py-1.5 w-[40%]">Student Name:</td>
								<td className="border border-black px-4 py-1.5 uppercase">MD NUR HOSSAIN</td>
							</tr>
							<tr className="even:bg-gray-300 bg-gray-300">
								<td className="border border-black px-4 py-1.5">Student ID/Roll:</td>
								<td className="border border-black px-4 py-1.5">0982020004081382</td>
							</tr>
							<tr className="even:bg-gray-300">
								<td className="border border-black px-4 py-1.5">Father’s Name:</td>
								<td className="border border-black px-4 py-1.5 uppercase">NURUL ISLAM</td>
							</tr>
							<tr className="even:bg-gray-300 bg-gray-300">
								<td className="border border-black px-4 py-1.5">Mother’s Name:</td>
								<td className="border border-black px-4 py-1.5 uppercase">MORJINA BEGUM</td>
							</tr>
							<tr className="even:bg-gray-300">
								<td className="border border-black px-4 py-1.5">District:</td>
								<td className="border border-black px-4 py-1.5 uppercase">CHITTAGONG</td>
							</tr>
							<tr className="even:bg-gray-300 bg-gray-300">
								<td className="border border-black px-4 py-1.5">Date of Birth:</td>
								<td className="border border-black px-4 py-1.5">1997-05-10</td>
							</tr>
							<tr className="even:bg-gray-300">
								<td className="border border-black px-4 py-1.5">Gender:</td>
								<td className="border border-black px-4 py-1.5">Male</td>
							</tr>
							<tr className="even:bg-gray-300 bg-gray-300">
								<td className="border border-black px-4 py-1.5">Department/Program:</td>
								<td className="border border-black px-4 py-1.5 uppercase">BBA</td>
							</tr>
							<tr className="even:bg-gray-300">
								<td className="border border-black px-4 py-1.5">Major Subject:</td>
								<td className="border border-black px-4 py-1.5 uppercase">MANAGEMENT</td>
							</tr>
							<tr className="even:bg-gray-300 bg-gray-300">
								<td className="border border-black px-4 py-1.5">CGPA/Grade:</td>
								<td className="border border-black px-4 py-1.5">3.56</td>
							</tr>
							<tr className="even:bg-gray-300">
								<td className="border border-black px-4 py-1.5">Passing Year:</td>
								<td className="border border-black px-4 py-1.5 uppercase">SUMMER 2023</td>
							</tr>
							<tr className="even:bg-gray-300 bg-gray-300">
								<td className="border border-black px-4 py-1.5">Enrolment Semester:</td>
								<td className="border border-black px-4 py-1.5 uppercase">SPRING 2020</td>
							</tr>
							<tr className="even:bg-gray-300">
								<td className="border border-black px-4 py-1.5">Complete Credit:</td>
								<td className="border border-black px-4 py-1.5">140</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default Result;
