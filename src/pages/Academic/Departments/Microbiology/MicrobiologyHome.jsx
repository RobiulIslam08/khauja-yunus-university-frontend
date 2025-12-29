import React from "react";
import EventSectionForMicrobiology from "./EventSectionForMicrobiology";

const MicrobiologyHome = () => (
	<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForMicrobiology />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
				WELCOME TO OUR MICROBIOLOGY DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
				
					<p>
				The Department of Microbiology, KYAU, offers a 4-year B.Sc. (Honours) in Microbiology Program at undergraduate level. The program comprises 136 credits which are distributed in a total of eight semesters. The program provides students with the training and research experience essential to pursue a broader range of careers in health setting, pharmaceutical industry, biotech industry, food and beverage industry, government & no-government research organizations, and university-level teaching. The department follows interactive teaching methodology to actively involve its students in the learning process ensuring quality education. Currently, we are doing research in collaboration with Khwaja Yunus Ali Medical College Hospital and trying to extend our research with other national and international academic & research organizations. Students who are particularly interested in Microbiology are highly encouraged to take a closer look at what we are offering.
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
							<p className="text-gray-500 text-xs mt-1">Microbiology</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of Microbiology Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
								Over the past few decades, Microbiology has evolved and thrived into one of the fascinating and appealing disciplines of science across the globe. In Microbiology, students have come across the great opportunity to acquire extensive knowledge on Bacteriology, virology, immunology, fundamental chemistry, biochemistry, organic chemistry, genetic engineering, medical microbiology, food microbiology, pharmaceutical microbiology, environmental microbiology, agriculture microbiology, biotechnology, and so on. The curriculum of our microbiology program is designed to prepare our students very capable and accomplished so that they can apply their academic learnings and practical insights of Microbiology in the sector of food, feed, and beverage industry; pharmaceutical industry, enzyme industry, agro-based industry, research laboratory, diagnostic laboratory, hospitals, biotechnology farm, and environmental pollution control and other important relevant fields. So, our expectation is that, attaining pragmatic knowledge and expertise from the Microbiology platform of Khwaja Yunus Ali University, students would be able to compete and secure many lucrative job opportunities in the stated sectors not only in our country but also across the world. Our responsibility to our students is to explore and incite their aptitude, educate them to have very big dream to do what they are able to do, show them the exciting career path awaiting ahead of them and inspire them to play their crucial role in making our life and environment prosperous and beautiful. I strongly believe that our teaching and training program along the course of 4-year honors of Microbiology would make our students best fit to chase and address the challenges of 21st century that we are now getting through in different fields, particularly in the area of health and environment.
							</p>
						
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default MicrobiologyHome;
