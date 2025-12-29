import React from "react";
import EventSectionForMedicalPhysics from "./EventSectionForMedicalPhysics";

const MedicalPhysicsHome = () => (
<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForMedicalPhysics />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
				WELCOME TO OUR MEDICAL PHYSICS DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
				
					<p>
				Technological advances and developments in physics and medicine, particularly in radiology, radiotherapy and nuclear medicine physics have created a demand for qualified Medical Physicists to support the current progress in the healthcare sector. Healthcare providers rely heavily on continued education and training of medical physicists in order to achieve and maintain international health standard.
					</p>
					<p>
					The Department of Medical Physics was founded in 2014 under the School of Science & Engineering, Khwaja Yunus Ali University (KYAU). The Department offers broad-based customized Master of Science (M.Sc.) in Medical Physics in joint collaboration with Khwaja Yunus Ali Medical College and Hospital (KYAMCH). It has the facilities and competent faculty members to prepare the students with knowledge and skills, through applications of physics to medical diagnosis and relevant treatments.
					</p>
					<p>
The main objectives of the department are to provide education and clinical training for post-graduate students and to prepare them for careers in areas of diagnostic imaging, nuclear medicine, radiation therapy and health physics. Also produce qualified Medical Physicists who are competent by virtue of their education and training to practice independently one or more of the key subfields of Medical and Health Physics.
					</p>
					<p>
						It is expected that the support of different organizations and the alumni of Department of Medical Physics will continue and increase in the days ahead so that the main objectives of the Department can be achieved.
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
							<p className="text-gray-500 text-xs mt-1">Medical Physics</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of Medical Physics Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
							Welcome to the one of the prestigious and most demandable Department of Medical Physics under the school of Science and Engineering, Khwaja Yunus Ali University (KYAU). As a department head, I would like to inform you that we are offering a broad-based customized, International Standard Master of Science in Medical Physics in joint collaboration with Cancer Center, Khwaja Yunus Ali Medical College & Hospital (KYAMCH).
							</p>
							<p>
								The Department of Medical Physics is strongly committed to produce professionally qualified Medical Physicists to meet up the challenges of the 21st century and to fulfill both national and international demand of Medical Physicists by providing the world class education at an affordable cost.
							</p>
							<p>
								We are extremely proud to announce that the department has the experienced faculty members, modern classrooms, lab facilities in conjunction with Cancer Center, KYAMCH and residential facilities in the campus. To produce the more efficient Medical Physicist, the Residential/Clinical Training has been included in the program which is first time in Bangladesh. The department also encourages the students to participate and organize the seminars, workshops and short courses on advanced topics etc.
							</p>
						
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default MedicalPhysicsHome;
