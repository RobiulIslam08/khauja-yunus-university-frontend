
import PageHeader from "../../components/common/PageHeader";

const feeData = [
	{
		name: "Post Graduate Diploma in Library and Information Science",
		credit: 40,
		duration: "1-Years",
		semesters: 2,
		admissionFee: "11,000.00",
		totalFee: "40,000.00",
	},
];

const PostGraduateDiploma = () => (
	<>
		<PageHeader title="Post Graduate Diploma" />
		<div className="min-h-screen py-8 px-2 sm:px-4 md:px-8 lg:px-16">
			<div className="bg-white p-4 sm:p-6 md:p-10 ">
				{/* Section 1: Admission Criteria for Post-Graduate Program */}
				<section className="mb-12">
					<SectionHeader title="Admission Criteria for Post-Graduate Program" />
					<div className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
						<ol className="list-decimal list-outside ml-5 space-y-1">
							<li>
								Candidate must have a minimum CGPA of 2.00 in graduation or equivalent examination. Candidate also must have all the qualifications prescribed by the University Grants Commission of Bangladesh
							</li>
						</ol>
					</div>
				</section>
			</div>

			{/* Table Section */}
			<div className="mb-6 text-center">
				<h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-2 border-b-2 border-red-500 inline-block">
					Tuition Fee for Post-Graduate Program
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

export default PostGraduateDiploma;
