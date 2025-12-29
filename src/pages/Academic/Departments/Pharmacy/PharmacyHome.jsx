import React from "react";
import EventSectionForPharmacy from "./EventSectionForPharmacy";

const PharmacyHome = () => (
	<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForPharmacy />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
					WELCOME TO OUR PHARMACY DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
				
					<p>
						Department of Pharmacy at Khwaja Yunus Ali University offers a challenging professional program of study in Pharmacy through the degree designed to meet the needs to current and future patient-centered care. Presented by highly talented and diverse faculty members using innovative teaching modalities and technologies, our graduates are prepared to be medication therapy managers and positioned for leadership positions within the health care environment. We also provide opportunities for students who want more than the traditional curriculum, opportunities to work with faculty research projects, advanced-standing program for international pharmacists, and international study programs.
					</p>
				</div>
			</div>

			{/* --- SECTION 3: MESSAGE FROM HEAD --- */}
			<div className=" p-1 ">
				<div className="flex flex-col md:flex-row gap-8 bg-white p-6">

					{/* Profile Card */}
					<div className="w-full md:w-1/4 flex flex-col items-center">
						<div className="bg-white p-4 border border-gray-200 shadow-sm text-center w-full">
							<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto border-4 border-gray-100 mb-4">
								<img
									src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid"
									alt="Dr. Md. Tariqul Islam"
									className="w-full h-full object-cover"
								/>
							</div>
							<h3 className="text-[#ea580c] font-bold text-lg">Dr. Md. Tariqul Islam</h3>
							<p className="font-bold text-gray-700 text-sm">Assistant Professor & Head</p>
							<p className="text-gray-500 text-xs mt-1">Pharmacy</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of Pharmacy Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
								Department of Pharmacy at Khwaja Yunus Ali University offers a challenging professional program of study in Pharmacy through the degree designed to meet the needs to current and future patient-centered care.
							</p>
							
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default PharmacyHome;
