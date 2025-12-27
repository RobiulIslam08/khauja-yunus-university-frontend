import React from "react";
import PageHeader from "../../components/common/PageHeader";
import { MdEmail, MdPhone, MdLocationCity } from "react-icons/md";

const profiles = [
	{
		name: "Professor Abu Torab Md. Hassan",
		title: "Controller of Examinations",
		phone: "01404461504",
		email: "torab.coe@kyau.edu.bd",
		intercom: "134 (intercom)",
		room: "201 (Room No.)",
		imageUrl: "https://www.kyau.edu.bd/images/20230309031849.png",
	},
	{
		name: "Md. Sakir Hossain",
		title: "Asst. Controller of Exams",
		phone: "01722751121",
		email: "sakir.coe@kyau.edu.bd",
		intercom: "142 (intercom)",
		room: "203 (Room No.)",
		imageUrl: "https://www.kyau.edu.bd/images/20250710061957.png",
	},
	{
		name: "Md. Shamsul Haque",
		title: "Section Officer",
		phone: "01763531114",
		email: "shamsul.coe@kyau.edu.bd",
		intercom: "null (intercom)",
		room: "203 (Room No.)",
		imageUrl: "https://www.kyau.edu.bd/images/20250914035223.png",
	},
	{
		name: "Md. Zahidul Islam",
		title: "Section Officer",
		phone: "01727539842",
		email: "zahidul.coe@kyau.edu.bd",
		intercom: "",
		room: "",
		imageUrl: "https://www.kyau.edu.bd/images/20250427052738.png",
	},
];
const ControllerExams = () => (
	<>
		<PageHeader title="Controller of Examinations" />
		<div className="max-w-7xl mx-auto w-full">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-stretch mt-8 mb-8">
				{profiles.map((profile) => (
					<div
						key={profile.email}
						className="w-full max-w-xs mx-auto bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden font-sans flex flex-col h-107.5 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-[#020031]"
					>
						{/* Top Section: Image and Name */}
						<div className="flex flex-col items-center p-6 pb-4 bg-gray-50/30 shrink-0">
							<div className="w-32 h-32 rounded-full border-2 border-cyan-400 p-1 mb-3 overflow-hidden bg-white">
								<img
									className="w-full h-full object-cover rounded-full"
									src={profile.imageUrl}
									alt={profile.name}
									onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
								/>
							</div>
							<h2 className="text-lg font-bold text-gray-700 text-center">{profile.name}</h2>
							<p className="text-gray-500 text-sm text-center font-medium">{profile.title}</p>
						</div>
						{/* Bottom Section: Contact Details */}
						<div className="border-t border-gray-100 bg-white px-6 py-5 space-y-3 flex-1 flex flex-col justify-center">
							{/* Email */}
							<div className="flex items-center space-x-3">
								<div className="shrink-0">
									<div className="p-1 bg-cyan-500 rounded-full text-white flex items-center justify-center">
										<MdEmail className="w-4 h-4" />
									</div>
								</div>
								<span className="text-gray-600 text-sm">{profile.email}</span>
							</div>
							{/* Phone */}
							<div className="flex items-center space-x-3">
								<div className="shrink-0">
									<div className="p-1 bg-cyan-500 rounded-full text-white flex items-center justify-center">
										<MdPhone className="w-4 h-4" />
									</div>
								</div>
								<span className="text-gray-600 text-sm">{profile.phone}</span>
							</div>
							{/* Intercom, if present */}
							{profile.intercom && profile.intercom !== "" && profile.intercom !== "null (intercom)" && (
								<div className="flex items-center space-x-3">
									<div className="shrink-0">
										<div className="p-1 bg-cyan-500 rounded-full text-white flex items-center justify-center">
											<MdPhone className="w-4 h-4" />
										</div>
									</div>
									<span className="text-gray-600 text-sm">{profile.intercom}</span>
								</div>
							)}
							{/* Room Number */}
							{profile.room && profile.room !== "" && (
								<div className="flex items-center space-x-3">
									<div className="shrink-0">
										<div className="p-1 bg-cyan-500 rounded-full text-white flex items-center justify-center">
											<MdLocationCity className="w-4 h-4" />
										</div>
									</div>
									<span className="text-gray-600 text-sm">{profile.room}</span>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	</>
);

export default ControllerExams;
