import React from "react";
import EventSectionForLibraryInformationScience from "./EventSectionForLibraryInformationScience";

const LibraryInformationScienceHome = () => (
	<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForLibraryInformationScience />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
						WELCOME TO OUR LIBRARY & INFORMATION SYSTEM DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">

					<p>
						Information is an important resource in the day-to-day operations of individuals, organizations and society. The world has evolved to an age where information technology and information explosion are here with us. There is therefore need for information professionals to acquire higher and relevant qualifications and skills for libraries and other information centers. It is due to this need in our country that the Bachelor of Library and Information Science program is being introduced. The department of Library & information Science under the School of Human science in Khwaja Yunus Ali University (KYAU) aims to be recognized as a leader in private Sector professional education in Bangladesh, offering Innovative programs at the undergraduate and graduate levels, Including Bachelor of Library & information Science & Master of Library & Information Science. The graduates of this department are to become professional Librarians and Information Workers capable of working in any kind of library and information centers, Media and Communication Centers, and all information dissemination Organizations.
					</p>
					<p>
						Our undergraduate program in Library & information Science is designed as two-Semester (spring: Mar-Aug, fall: Sep-Feb) with duration of 6 months each. Students are required to complete total of 8 semesters in 4 years duration. Total available seats are 30.
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
							<p className="text-gray-500 text-xs mt-1">Library and Information Science</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from the Head of Library & Information Science Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
								Skilled information professionals at every level are key to carry-on government’s such efforts fruitfully. Only Library and Information Science and relevant programs with dynamic educational systems have the capability to produce such skilled workforce having ability to work individually or collaboratively with their academic and professional skills at different position.
							</p>
							<p>
								The country needs a large team of trained information specialists to cope with the recent trends, and to carry out extensible responsibilities of the information centers in making the community ranging from rural to urban as information literate. In recognition of the urgent need for trained expert information professionals in the country and filling the emptiness of trained experts in the field Khwaja Yunus Ali University offers four years integrated B.S.S in Library and Information Science.
							</p>

						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default LibraryInformationScienceHome;
