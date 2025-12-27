import React from "react";
import PageHeader from "../../components/common/PageHeader";
const feeData = [
	{
		name: "Master of Business Administration",
		credit: "42 (For BBA Degree Holders)",
		duration: "1-Years",
		semesters: 2,
		admissionFee: "15,000.00",
		totalFee: "109,000.00",
	},
	{
		name: "Master of Business Administration",
		credit: "66 (For other Degree Holders)",
		duration: "2-Years",
		semesters: 4,
		admissionFee: "15,000.00",
		totalFee: "173,000.00",
	},
	{
		name: "Master of Arts in Islamic Studies",
		credit: "40",
		duration: "1-Years",
		semesters: 2,
		admissionFee: "15,000.00",
		totalFee: "44,000.00",
	},
	{
		name: "Master of Arts in Islamic Studies (Preli + Final) - Evening Program",
		credit: "72",
		duration: "2-Years",
		semesters: 4,
		admissionFee: "15,000.00",
		totalFee: "80,000.00",
	},
	{
		name: "Master of Arts in English ELT",
		credit: "40",
		duration: "1-Years",
		semesters: 2,
		admissionFee: "15,000.00",
		totalFee: "104,000.00",
	},
	{
		name: "Master of Laws",
		credit: "40",
		duration: "1.5-Years",
		semesters: 3,
		admissionFee: "15,000.00",
		totalFee: "124,000.00",
	},
	{
		name: "Master of Science in Mechatronic and Micro-Mechatronics System Engineering",
		credit: "120",
		duration: "2-Years",
		semesters: 4,
		admissionFee: "15,000.00",
		totalFee: "386,000.00",
	},
	{
		name: "Masters in Medical Physics",
		credit: "48",
		duration: "1.5-Years",
		semesters: 3,
		admissionFee: "15,000.00",
		totalFee: "163,500.00",
	},
];
const Graduate = () => (
	<>
		<PageHeader title="Graduate" />
		<div className="min-h-screen py-8 px-2 sm:px-4 md:px-8 lg:px-16">
			{/* Content box centered on the screen */}
			<div className="bg-white p-4 sm:p-6 md:p-10 ">
				{/* Section 1: Admission Criteria for Graduate Program */}
				<section className="mb-12">
					<SectionHeader title="Admission Criteria for Graduate Program" />
					<div className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
						<ol className="list-decimal list-outside ml-5 space-y-1">
							<li>
								Candidate must have a minimum CGPA of 2.00 at the undergraduate level and a minimum CGPA of 2.50 at the undergraduate level for MBA and EMBA.
							</li>
							<li>
								Candidate must have a minimum of 55% marks / minimum GPA of 2.75 in Mechatronic and Micrometric System Engineering undergraduate level. Candidate also must have all the qualifications prescribed by the University Grants Commission of Bangladesh.
							</li>
						</ol>
					</div>
				</section>
			</div>

			{/* Table Section */}
			<div className="mb-6 text-center">
				<h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-2 border-b-2 border-red-500 inline-block">
					Tuition Fee for Graduate Program
				</h2>
			</div>

			{/* Responsive Table Container */}
			<div className="overflow-x-auto w-full max-w-full rounded-lg shadow-sm">
				<table className="min-w-150 w-full text-[10px] md:text-xs">
					<thead className="text-gray-900 bg-gray-50 border-b border-gray-300">
						<tr>
							<th scope="col" className="px-0.5 py-0.5 sm:px-1 sm:py-1 font-bold border-r border-gray-200 whitespace-nowrap">
								Program Name
							</th>
							<th scope="col" className="px-0.5 py-0.5 sm:px-1 sm:py-1 font-bold text-center border-r border-gray-200 whitespace-nowrap">
								Credit Hours
							</th>
							<th scope="col" className="px-0.5 py-0.5 sm:px-1 sm:py-1 font-bold text-center border-r border-gray-200 whitespace-nowrap">
								Program Duration
							</th>
							<th scope="col" className="px-0.5 py-0.5 sm:px-1 sm:py-1 font-bold text-center border-r border-gray-200 whitespace-nowrap">
								Total Semesters
							</th>
							<th scope="col" className="px-0.5 py-0.5 sm:px-1 sm:py-1 font-bold text-center border-r border-gray-200 whitespace-nowrap">
								Admission Fees
							</th>
							<th scope="col" className="px-0.5 py-0.5 sm:px-1 sm:py-1 font-bold text-center whitespace-nowrap">
								Total Program Fees
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{feeData.map((item, index) => (
							<tr
								key={index}
								className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-gray-100 transition-colors`}
							>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 font-medium text-gray-800 border-r border-gray-200 whitespace-nowrap">
									{item.name}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center border-r border-gray-200 whitespace-nowrap">
									{item.credit}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center border-r border-gray-200 whitespace-nowrap">
									{item.duration}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center border-r border-gray-200 whitespace-nowrap">
									{item.semesters}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center border-r border-gray-200 whitespace-nowrap">
									{item.admissionFee}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center font-semibold text-gray-800 whitespace-nowrap">
									{item.totalFee}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	</>
);

const SectionHeader = ({ title }) => {
	return (
		<div className="mb-8">
			<h2 className="text-left text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wide mb-2">
				{title}
			</h2>
			<div className="h-0.5 w-full bg-orange-500 opacity-90"></div>
		</div>
	);
};

export default Graduate;
