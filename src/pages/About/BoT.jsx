/* eslint-disable no-unused-vars */
import React from "react";
import PageHeader from "../../components/common/PageHeader";

// Example data for trustees
const trustees = [
  {
    id: 1,
    name: "Mohammad Yusuf",
    position: "Chairman",
    // Chairman Image Link provided
    image: "https://www.kyau.edu.bd/public/images/chairman.png" 
  },
  {
    id: 2,
    name: "Prof. Dr. Rubaiyat Farzana Hussain",
    position: "Member Secretary",
    // Default Image Link provided
    image: "https://www.kyau.edu.bd/public/images/default.png" 
  },
  {
    id: 3,
    name: "Mrs. Khwaja Tajmahal",
    position: "Member",
    image: "https://www.kyau.edu.bd/public/images/default.png"
  },
  {
    id: 4,
    name: "Mrs. Husne Ara Hussain",
    position: "Member",
    image: "https://www.kyau.edu.bd/public/images/default.png"
  },
  {
    id: 5,
    name: "Mr. M. A. Haider Hussain",
    position: "Member",
    image: "https://www.kyau.edu.bd/public/images/default.png"
  },
  {
    id: 6,
    name: "Mrs. Laila Hussain",
    position: "Member",
    image: "https://www.kyau.edu.bd/public/images/default.png"
  },
  {
    id: 7,
    name: "Prof. Dr. Zulfikar Ali",
    position: "Member",
    image: "https://www.kyau.edu.bd/public/images/default.png"
  }
];
const BoT = () => (
	<>
		<PageHeader title="Board of Trustees (BoT)" />
		<section className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Section Title */}
				<div className="text-center mb-8">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide">
						Board of Trustees
					</h2>
				</div>

				{/* Table Container */}
				{/* ইমেজের মতো উপরে অরেঞ্জ বর্ডার দেওয়া হয়েছে */}
				<div className="w-full overflow-hidden border-t-[3px] border-orange-500 shadow-sm bg-white">

					{/* Responsive Scroll Wrapper */}
					<div className="overflow-x-auto">
						<table className="min-w-full text-left border-collapse">

							{/* Table Head */}
							<thead>
								<tr className="border-b border-gray-300">
									<th className="py-4 px-6 text-sm font-bold text-gray-800 uppercase w-16">SL</th>
									<th className="py-4 px-6 text-sm font-bold text-gray-800 uppercase w-32">Photo</th>
									<th className="py-4 px-6 text-sm font-bold text-gray-800 uppercase">Name</th>
									<th className="py-4 px-6 text-sm font-bold text-gray-800 uppercase">Position</th>
								</tr>
							</thead>

							{/* Table Body */}
							<tbody className="text-gray-700">
								{trustees.map((person, index) => (
									<tr
										key={person.id}
										// Zebra Striping: even rows get a light gray background
										className="border-b border-gray-200 last:border-none odd:bg-white even:bg-[#f2f4f8] transition-colors hover:bg-gray-100"
									>
										{/* Serial No */}
										<td className="py-4 px-6 font-medium">
											{person.id}
										</td>

										{/* Photo */}
										<td className="py-3 px-6">
											<div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-gray-300 bg-white">
												<img
													src={person.image}
													alt={person.name}
													className="w-full h-full object-cover object-top"
												/>
											</div>
										</td>

										{/* Name */}
										<td className="py-4 px-6 font-semibold text-gray-900 text-sm md:text-base whitespace-nowrap md:whitespace-normal">
											{person.name}
										</td>

										{/* Position */}
										<td className="py-4 px-6 text-sm md:text-base whitespace-nowrap md:whitespace-normal">
											{person.position}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

				</div>



			</div>
		</section>
	</>
);

export default BoT;
