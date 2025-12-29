import React from "react";
import EventSectionForEnglish from "./EventSectionForEnglish";

const EnglishHome = () => (
<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForEnglish />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
					WELCOME TO OUR ENGLISH DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
				
					<p>
						English Department started its journey as a full-fledged department at Khwaja Yunus Ali University in 2012. Among other facilities, the department has 9 full time and 1 adjunct faculty members. To meet the demand of the global world, this department ensures quality education for making skilled workforce to face the challenges of 21st century. English Department is working very hard with active teaching methodologies for the upgradation of the knowledge of both language and literature at undergraduate and graduate levels of higher education.
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
							<p className="text-gray-500 text-xs mt-1">English</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of ENGLISH Department</h3>
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

export default EnglishHome;
