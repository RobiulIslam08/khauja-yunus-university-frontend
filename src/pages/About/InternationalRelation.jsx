
import React from "react";
import PageHeader from "../../components/common/PageHeader";

// ডাটাগুলো ভেরিয়েবলে রাখা হলো যাতে সহজে এডিট করা যায়
const universities = [
	"University of Oviedo, Spain",
	"University of Applied Sciences, Karlsruhe, Germany",
	"ÉCOLE NATIONALE SUPÉRIEURE DE MÉCANIQUE ET DES MICROTECHNIQUES, Besancon, France",
	"Nile University, Egypt",
	"Ivanovo State Power University, Ivanovo, Russia.",
];

const advisorData = {
	name: "Professor Colonel (r) Dr. med. Mohammed Nazmul Ahsan Mallik",
	designation: "Adviser, International Relations",
	university: "Khwaja Yunus Ali University",
	image: "https://www.kyau.edu.bd/images/advisor.png",
};

const InternationalRelation = () => (
	<>
		<PageHeader title="International Relation" />
		<section className="max-w-6xl mx-auto p-4 md:p-8 bg-white text-gray-800 font-sans">
			{/* --- Header Section --- */}
			<div className="mb-6">
				<h2 className="text-center text-xl font-bold text-gray-800 mb-2">
					Overview
				</h2>
				<div className="border-t border-red-500 w-full h-px"></div>
			</div>

			{/* --- Main Content Text --- */}
			<div className="text-sm md:text-[15px] leading-relaxed text-gray-700 space-y-4">
				<p>
					Khwaja Yunus Ali University is a bonafide associate member of EU4M
					Consortium. As a member, it is now linked up with the following
					universities in Europe and other parts of the world.
				</p>

				{/* University List */}
				<ul className="space-y-2 ml-1">
					{universities.map((uni, index) => (
						<li key={index} className="flex items-start gap-3">
							<span className="shrink-0 w-6 h-6 border border-cyan-500 rounded flex items-center justify-center text-cyan-600 text-xs font-semibold">
								{index + 1}
							</span>
							<span className="text-blue-500 hover:text-blue-700 cursor-pointer">
								{uni}
							</span>
						</li>
					))}
				</ul>

				<p>
					Khwaja Yunus Ali University in collaboration with the European
					Universities run Master's degree in Mechatronics & Micro mechatronics
					Engineering and manage the staff & students exchange program. The
					official link with the foreign universities are dealt by the office of
					the International relations, KYAU.
				</p>

				<p className="pb-4">
					This office is headed by{" "}
					<span className="font-semibold">
						Professor Colonel (r) Dr. med. Mohammed Nazmul Ahsan Mallik
					</span>
					, who has to his credit managing international affairs for more than
					40 years.
				</p>
			</div>

			{/* --- Advisor Section Grid --- */}
			<div className="flex flex-col md:flex-row gap-6 mt-4 border border-gray-200 p-1 md:p-0 rounded-sm">

				{/* Left Side: Profile Card */}
				<div className="w-full md:w-87.5 shrink-0 border-2 border-cyan-400 p-6 flex flex-col items-center justify-center text-center bg-white shadow-sm md:m-0 m-2">
					<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 mb-4 shadow-sm">
						<img
							src={advisorData.image}
							alt="Advisor"
							className="w-full h-full object-cover"
						/>
					</div>
					<h3 className="text-orange-500 font-bold text-sm md:text-base mb-1">
						{advisorData.name}
					</h3>
					<p className="font-bold text-gray-800 text-xs md:text-sm">
						{advisorData.designation}
					</p>
					<p className="text-gray-600 text-xs mt-1">
						{advisorData.university}
					</p>
				</div>

				{/* Right Side: Message Content */}
				<div className="grow p-4 md:pt-4 md:pr-4">
					<div className="mb-4">
						<h3 className="text-lg font-semibold text-gray-800 mb-2">
							Message from The Advisor
						</h3>
						<div className="border-t border-red-500 w-full h-px"></div>
					</div>

					<div className="text-sm text-gray-700 space-y-4 leading-relaxed text-justify">
						<p>
							The idea of having an international wing of the Khwaja Yunus Ali
							University, an institution of higher learning to lead Bangladesh
							in education and technology is the brain-child of Mohammad Yusuf,
							Honorable Chairman Khwaja Yunus Ali University. To upgrade the
							quality of education in KYAU he explored the possibilities of
							probable cooperation between the European and North American
							Universities. Through his untiring efforts now KYAU is an
							associate member of the EU4M consortium.
						</p>
						<p>
							Thus the 6th member of a group of European Universities. In this
							process currently, KYAU is awarded scholarships funded by KA 107
							Program of the European Union for the exchange of staff, students,
							and teachers to the University of Oviedo, Spain for a Joint
							Master's program. Further JMP & Double Degree program
							negotiations are in progress with Germany and other European
							countries.
						</p>
					</div>
				</div>
			</div>
		</section>
	</>
);

export default InternationalRelation;
