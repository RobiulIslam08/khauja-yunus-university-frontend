import React from "react";
import EventSectionForMechatronicsMicromechatronicsEngineering from "./EventSectionForMechatronicsMicromechatronicsEngineering";

const MechatronicsMicromechatronicsEngineeringHome = () => (
	<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForMechatronicsMicromechatronicsEngineering />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
			WELCOME TO OUR MECHATRONIC ENGINEERING DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
				
					<p>
				In view of global necessity, it is clear that the requirement of professionals of mechatronics engineers is increasing day by day for the developing and developed countries. From this perspective, it is of vital importance to offer high quality education to the next generation in the field of mechatronics engineering. Mechatronics engineering is a multidisciplinary program that incorporates knowledge with a combination of diverse engineering disciplines such as mechanical, electrical, telecommunication, control, software and computer engineering. The Master's program in mechatronics engineering here offers students a platform that help them acquire deep understanding and functional skills in most fields of automation and relevance for mechanical / Electronic Engineering. This two-year (four-semester) Master’s program is a replica of European Union Master’s Course for Mechatronic and Micro-Mechatronic System (EU4M) designed for countries of Europe at first, later other countries university like Khwaja Yunus Ali University (KYAU), Bangladesh has joined into this program. The Master’s program includes three semesters for course activities and one semester for project work, adding up to a total of 120 credit points (CP). Courses will include lectures, classroom exercises, laboratory exercises, study visits, seminar and project work. The program is coherent with the international Master of Mechatronics Engineering. Students of this program will study here for 1st year and they have the opportunity to study for 2nd year in abroad. Compulsory courses will provide all the students in the program with a strong foundation in the respective field. The large selection of elective courses will then give the students a unique strength to go in several different directions. The research-oriented students have several possibilities to choose courses in preparation for work.
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
							<p className="text-gray-500 text-xs mt-1">Mechatronic Engineering</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of Mechatronic Engineering Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
								Khwaja Yunus Ali University is the first ever University that offers M.Sc. in Mechatronics Engineering program in Bangladesh. Mechatronics & Micro-Mechatronics Engineering is a multidisciplinary program that incorporates knowledge with a synergetic combination of diverse engineering disciplines such as mechanical, manufacturing, electrical & electronics engineering, computer technology, system control, robotics, automation, industrial management. A Mechatronic Engineer can achieve tremendous potentials to develop and maintain various automated process and products. With the advancement of science and technology-oriented manufacturing process, the demand for mechatronic engineers in job market has dramatically increased both in developing and developed countries. From this perspective, Khwaja Yunus Ali University (KYAU) offer’s broad based customized Master of Science in Mechatronic Engineering to the next generation. In addition, this is joint collaboration program with the University of Oviedo, Spain to meet the national and international demand for Mechatronics in various fields. After completing two semesters here, our students will have the opportunity to complete other two semesters in the collaborated university with/without scholarship. I hope all the students admitted in this department will enjoy their study in the campus of KYAU, Bangladesh and University of Oviedo, Spain. With the help of highly qualified and dedicated staff members, we will be moulding the students to the required shape which will make them industry-ready and employable.
							</p>
						
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default MechatronicsMicromechatronicsEngineeringHome;
