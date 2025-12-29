import React from "react";
import EventSectionForInformationCommunicationTechnology from "./EventSectionForInformationCommunicationTechnology";

const InformationCommunicationTechnologyHome = () => (
	<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForInformationCommunicationTechnology />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
					WELCOME TO OUR ICT DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
					<p>
						Technology and communication systems are at the heart of today's interconnected world, shaping how we live, work, and innovate. From engaging with customers and partners, managing data, streamlining business processes, and delivering new digital solutions — Information and Communication Technology (ICT) brings it all together.

Our Bachelor of Science in Information and Communication Technology (ICT) program is designed for students who are passionate about exploring the dynamic and fast-evolving field of ICT. This field blends business knowledge with cutting-edge technology, enabling graduates to design, develop, and manage solutions that drive success across industries.
					</p>
					<p>
					ICT professionals act as key enablers, bridging the gap between technological innovations and practical applications. They ensure the effective use of technology and communication systems to solve business challenges, foster collaboration, and gain strategic advantages. With ICT skills, you’ll help organizations deliver the right information to the right people, at the right time, and through the right channels.

Our curriculum focuses on the analysis, design, development, and deployment of ICT solutions, data management, networking, cloud computing, cybersecurity, and emerging areas such as e-commerce, knowledge management, and IoT (Internet of Things).

Students looking to pursue careers as system developers, network administrators, web application developers, database administrators, cybersecurity specialists, or ICT-focused management consultants will find this program the perfect stepping stone to a successful career.
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
							<p className="text-gray-500 text-xs mt-1">Information & Communication Technology</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of ICT Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
								Welcome to the website of the Department of Biochemistry and Biotechnology (BCBT), Khwaja Yunus Ali University (KYAU) and to our BCBT-KYAU family. It was established in 2013 with B.Sc. (Honours) curriculum of 160 credits under the School of Biomedical sciences, KYAU. This department comprises of two disciplines: one is Biochemistry and another is Biotechnology. We provide students with an excellent opportunity to obtain quality education in various modern fields.
							</p>
							<p>
								Students acquire a breadth of knowledge as well as in-depth training in a specific area of research to prepare them completely for a promising career in Pharmaceutical sector, Healthcare, Food & beverage Industries, Chemical Industries, Quality Control Analyst and above all in teaching in school, college and university etc. The future rests largely on the shoulders of researchers and scientists in the field of Biochemistry and Biotechnology both in home and abroad.
							</p>
							<p>
								I welcome and appreciate you to visit the website and provide us your valuable suggestions and criticisms for further improvement and coordination of the academic activities.
							</p>
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default InformationCommunicationTechnologyHome;
