import React from "react";
import PageHeader from "../../components/common/PageHeader";
const programs = [
	{ name: "Bachelor of Arts (Hons.) in English", credits: 140, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "322,000.00" },
	{ name: "Bachelor of Computer Science & Engineering", credits: 150, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "502,500.00" },
	{ name: "Bachelor of Business Administration", credits: 141, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "373,650.00" },
	{ name: "Bachelor of Pharmacy", credits: 159, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "516,750.00" },
	{ name: "Bachelor of Science in Biochemistry & Biotechnology", credits: 160, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "460,000.00" },
	{ name: "Bachelor of Science in Microbiology", credits: 147, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "441,000.00" },
	{ name: "Bachelor of Science in Electrical & Electronics Engineering", credits: 163, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "467,810.00" },
	{ name: "Bachelor of Laws", credits: 144, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "381,600.00" },
	{ name: "Bachelor of Arts (Hon's) in Islamic Studies", credits: 140, duration: "4-Years", semesters: 8, admissionFee: "6,500.00", totalFee: "126,000.00" },
	{ name: "Bachelor of Science in Mechatronics Engineering", credits: 167, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "517,700.00" },
	{ name: "Bachelor of Science in Information & Communication Technology", credits: 150, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "502,500.00" },
	{ name: "Bachelor of Science in Electronics and Telecommunication Engineering", credits: 180, duration: "4-Years", semesters: 8, admissionFee: "12,000.00", totalFee: "502,500.00" },
];
const Undergraduate = () => (

	<>
		<PageHeader title="Undergraduate" />
		<div className="min-h-screen py-8 px-2 sm:px-4 md:px-8 lg:px-16">
			{/* Content box centered on the screen */}
			<div className="bg-white p-4 sm:p-6 md:p-10 ">

				{/* ================= SECTION 1: Admission Criteria for Undergraduate Program ================= */}
				<section className="mb-12">
					<SectionHeader title="Admission Criteria for Undergraduate Program" />

					<div className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
						{/* list-decimal: Adds numbers
              list-outside ml-5: Puts numbers outside the text block for the hanging indent look
              space-y-3: Adds vertical space between list items
            */}
						<ol className="list-decimal list-outside ml-5 space-y-1">
							<li>
								Must have a minimum second class or GPA 2.50 or equivalent grade in each lavel of SSC and HSC or equivalent public examination. If Candidate has the minimum GPA is 2.00 in one of the exams then the total GPA in both the exams should be at least 6.00. However, for the children of freedom fighters, the total GPA in SSC and HSC or equivalent examinations should be 5.00.
							</li>
							<li>
								O Level exam must have a minimum of five and A level exam must have a minimum of two subjects. In those two tests at least seven of the seven subjects must have a B grade or GPA of 4.00 and the remaining three subjects must have a C grade or GPA of 3.50.
							</li>
							<li>
								For admission in Bachelor of the pharmacy program, Candidate must have a minimum GPA 3.00 each state of SSC (0-Level) and HSC (A-Level) and total GPA in both exams must be at least 6.50.


							</li>

						</ol>
					</div>
				</section>




			</div>

			{/* table */}
			<div className="mb-6 text-center">
				<h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-2 border-b-2 border-red-500 inline-block">
					Tution Fee for Undergraduate Program
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
						{programs.map((program, index) => (
							<tr
								key={index}
								className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-gray-100 transition-colors`}
							>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 font-medium text-gray-800 border-r border-gray-200 whitespace-nowrap">
									{program.name}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center border-r border-gray-200 whitespace-nowrap">
									{program.credits}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center border-r border-gray-200 whitespace-nowrap">
									{program.duration}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center border-r border-gray-200 whitespace-nowrap">
									{program.semesters}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center border-r border-gray-200 whitespace-nowrap">
									{program.admissionFee}
								</td>
								<td className="px-0.5 py-0.5 sm:px-1 sm:py-1 text-center font-semibold text-gray-800 whitespace-nowrap">
									{program.totalFee}
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
			{/* The Title Text */}
			<h2 className="text-left text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wide mb-2">
				{title}
			</h2>
			{/* The Red Underline */}
			{/* h-0.5 sets height to 2px. bg-orange-500 matches the color in the image. */}
			<div className="h-0.5 w-full bg-orange-500 opacity-90"></div>
		</div>
	);
};
export default Undergraduate;
