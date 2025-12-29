import React from "react";
import EventSectionForBusinessAdministration from "./EventSectionForBusinessAdministration";

const BusinessAdministrationHome = () => (
	<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForBusinessAdministration />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
						WELCOME TO BUSINESS ADMINISTRATION DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
					<p>
						Business administration is an administration of business. It includes all aspects of overseeing and supervising business operations, as well as related fields which include accounting, finance, project management, human resource management and marketing. The department of Business Administration under the school of Business of Khwaja Yunus Ali University (KYAU) aims to be recognized as a leader in private sector business education in Bangladesh. The department is offering innovative programs like Bachelor of Business Administration (BBA), Master of Business Administration (MBA) and Executive Master of Business Administration (EMBA). The Bachelor of Business Administration (BBA) is a bachelor's degree in commerce and business administration. The degree is designed to give a broad knowledge of the functional aspects of a company and their interconnection, while also allowing for specialization in a particular area.
					</p>
					<p>
						The degree also develops the student's practical, managerial and communication skills, and business decision-making capability. Many programs incorporate training and practical experience, in the form of case projects, presentations, internships, industrial visits, and interaction with experts from industry. The Master of Business Administration (MBA, EMBA) is a master's degree in business administration with a significant focus on management. The core courses in an MBA program cover various areas of business, such as accounting, finance, marketing, human resources, and operations management in a manner most relevant to management analysis and strategy. The Business Administration Department of KYAU prepares students to take challenges of 21st century and makes them responsible to the society as well.
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
							<p className="text-gray-500 text-xs mt-1">Business Administration</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of Business Administration Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
								Khwaja Yunus Ali University (KYAU) is a pioneer University in higher education in the northern areas of Bangladesh, especially at Sirajganj, approved by the Government and UGC having its own dreamy scenic large campus which was established by the great Philanthropist and Honorable Founder Dr. M. M. Amjad Hussain named after the great saint Khwaja Yunus Ali (R).
							</p>
							<p>
								The Department of Business Administration (DBA) under the faculty of Business is the biggest faculty in the university which has been offering BBA, MBA & EMBA Programs in Business Administration since its inception. It has qualified and dedicated faculty members with two full-time professors having PhD & Fellowship degrees from abroad. It is committed to create business leaders through academic attainment. Because of the persistent efforts of the Board of Trustees, faculty members and the administration we have already made a fame in the corporate world. Our graduates are well-placed in all positions in the business arena. The DBA is preferred by the potential learners and scholar faculties because of its performance of day to day activities by using the-state-of-the-art-methods of teaching and learning, that is, by using the active teaching and learning methods. All the classes are arranged by using the multimedia projectors.
							</p>
							<p>
								Let us become honored members of the DBA family to get yourself empowered to be a successful entrepreneur (Business leader) to create work field for you, your family and for society at large. Our Motto is: “Come with knowledge, transform it into power and go out with that power to change the world”.
							</p>
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default BusinessAdministrationHome;
