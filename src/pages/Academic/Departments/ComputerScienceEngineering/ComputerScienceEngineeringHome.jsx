import React from "react";
import EventSectionForComputerScienceEngineering from "./EventSectionForComputerScienceEngineering";

const ComputerScienceEngineeringHome = () => (
<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForComputerScienceEngineering />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
					WELCOME TO OUR CSE DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
					<p>
						Department of Computer Science & Engineering (CSE) in Khwaja Yunus Ali University (KYAU) is currently offering undergraduate program B.Sc. in CSE. The department provides an outstanding opportunity to students to get quality education in CSE. This department yields highly competent and skilled computer science graduates. Over the years, this rapidly flourishing department has been providing the technical foundation, scholarly guidance and leadership skills to the undergraduate students. Major areas of specialties of CSE department are Software, Hardware, Networking, Web Engineering, Computer Graphics, Artificial Intelligence, Machine learning, Internet of Things (IoT) and System Analysis Design & Development etc
					</p>
					<p>
						At present eight (08) faculties specialized from different background are serving in this department. A combination of highly qualified faculty members and state of the art facilities has established the department as one of the leading and prestigious Computer Science departments of the country.
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
							<p className="text-gray-500 text-xs mt-1">Computer Science & Engineering</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of CSE Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
								We welcome you on behalf of the faculty, staff, and students of the Department of Computer Science and Engineering (CSE) at the Khwaja Yunus Ali University (KYAU). These are exciting times for computer scientists as the discipline is now widely recognized as an essential source of tools and techniques for advancements in nearly all spheres of human endeavor.
							</p>
							<p>
							Learning is a continuous process and does not end with the acquisition of a degree, especially because steady and rapid advances in computing technologies shorten the life of tools and techniques prevalent today. Therefore we do not aim to make our students walking manuals of any language or package. Instead, they are given a strong foundation in computer science and problem-solving techniques, and are made adaptable to changes.
							</p>
							
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default ComputerScienceEngineeringHome;
