import React from "react";
import EventSectionForLaw from "./EventSectionForLaw";

const LawHome = () => (
<div className="min-h-screen font-sans text-gray-700">

		{/* Main Container */}
		<div className="container mx-auto px-4 w-full py-6 max-w-7xl">

			<EventSectionForLaw />

			{/* --- SECTION 2: VISION & MISSION --- */}
			<div className="mb-12">
				<div className="text-center mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase border-b-2 border-[#ff6347] inline-block pb-2">
				WELCOME TO OUR LAW DEPARTMENT
					</h2>
				</div>

				<div className="space-y-2 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
				
					<p>
				KYAU believes in fulfilling its responsibility towards the society by producing professionally qualified, well-trained and globally competent personnel to take challenges in their area of excellence. To achieve this goal, the Department of Law, KYAU has started its journey from 2013 and offers four-year LL.B (Hon’s) program at undergraduate level and also offers one-year LL.M program at postgraduate level. The program provides students with the basic legal skills of advocacy and research experience essential to pursuing a broader range of career in the Bar Bench, Private Practice or work for government or law agencies, multinational companies, international organizations and University-level teaching. The Department follows interactive teaching methodology to actively involve its students in the learning process ensuring quality education. Students who are particularly interested in Law are highly encouraged to take a closer look at what we are offering.
					</p>
					<p>
					Strengthening the University to help ensuring excellence in its overall institutional achievement, the Department of Law is equally committed to placing legal education in its best height of proper execution and applicability.
					</p>
					<p>
Law works as the vein of all the bodies of natural and artificial persons of the world and legal education affords blood to be circulated properly for their healthy and smooth respiration. The department of Law is well-dedicated to provide all the necessities and logistics for the satisfactory inflow of legal education considering both from national context and international viewpoint. Khwaja Yunus Ali University is “Committed to Excellence”, leading to imparting excellent quality education. Department of Law of Khwaja Yunus Ali University is in duty bound to shoulder the responsibility of commitment to ensure legal education by creating legal professionals, judicial personalities, legal experts and legal researchers, political leadership, successful civil servants, ambassadors to carry the burden of rule of law and upholding human rights by fostering justice in every sphere of life.
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
							<p className="text-gray-500 text-xs mt-1">Law</p>
						</div>
					</div>

					{/* Message Content */}
					<div className="w-full md:w-3/4">
						<div className="border-b border-gray-200 mb-4">
							<h3 className="text-lg font-bold text-gray-800 mb-2">Message from The Head of LAW Department</h3>
						</div>

						<div className="text-sm md:text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
							<p>
								On behalf of my esteemed colleagues and dear students, let me extend a warm welcome from the Department of Law, Khwaja Yunus Ali University. We appreciate that you have taken the time to know more about us. The Department of Law is established in the year of 2013. Our students are passionate and academically curious, all of our faculty members are legal experts who are dedicated to research and teaching excellence, and we are beginning to build relationships with some of the most influential lawyers and institutions in Bangladesh. The main goal of the Department of Law is to provide a Common Law based legal education to the students with a view to producing the best lawyers, judges, academics, and policymakers who would be able to attain the leading positions in their respective sectors at home and abroad and serve the humanity. To us, this means that our students would not just be well versed in the laws of Bangladesh, but also become critical thinkers who would pioneer the development and implementation of innovative, efficient, and just initiatives nationally and internationally. We know that law is a practical-oriented subject that demands an objective and material introduction and projection of technical details. As a team, we accept as true that the School of Law of KYAU is committed to building a vivacious generation in the legal field with significant, humanistic and pragmatic thoughts. We wish that the graduates of this School with their skills, moral principles and ideals work for making society with justice and parity. It is pertinent to mention here that an effective and well-functioning international standard Moot Court has been running under the close monitoring of the School of Law of KYAU. As we grow, we hope to continue to attract the best and brightest students, build an unparalleled faculty, and partner with brilliant legal scholars and practitioners in Bangladesh and around the world.
							</p>
						
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
);

export default LawHome;
