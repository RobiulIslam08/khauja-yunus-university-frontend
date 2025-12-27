import React from "react";
import PageHeader from "../../components/common/PageHeader";

// Define the list of accreditations here
const accreditationList = [
	"Ministry of Education",
	"Bangladesh Accreditation Council",
	"University Grants Commission",
	"Bangladesh Bar Council",
	"Bangladesh Bureau of Educational Information and Statistics",
	"Pharmacy Council"
];

const Accreditation = () => (
	<>
		<PageHeader title="Accreditation" />
		<section className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Header Section */}
				<div className="mb-8">
					<h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
						We are accredited by
					</h2>
					{/* Orange Underline spanning full width */}
					<div className="w-full h-0.5 bg-orange-500"></div>
				</div>

				{/* List Section */}
				<div className="flex flex-col gap-5">
					{accreditationList.map((item, index) => (
						<div key={index} className="flex items-center gap-3 group cursor-pointer">

							{/* Number Circle */}
							{/* ইমেজের মতো সায়ান কালারের বর্ডার দেওয়া হয়েছে */}
							<div className="w-8 h-8 shrink-0 rounded-full border border-cyan-400 flex items-center justify-center text-gray-700 font-medium text-sm transition-colors group-hover:bg-cyan-50">
								{index + 1}
							</div>

							{/* Text Item */}
							{/* ইমেজের মতো নীল রঙের টেক্সট */}
							<p className="text-blue-500 hover:text-blue-700 text-sm md:text-base font-normal transition-colors">
								{item}
							</p>
						</div>
					))}
				</div>

			</div>
		</section>

	</>
);

export default Accreditation;
