import React from "react";
import { MdEmail, MdPhone, MdLocationCity } from "react-icons/md";
import PageHeader from "../../components/common/PageHeader";

const profiles = [
	{
		name: "Professor Ahsanullah Habib",
		title: "Treasurer",
		email: "treasurer@kyau.edu.bd",
		phone: "107 (intercom)",
		room: "210 (Room No.)",
		imageUrl: "https://www.kyau.edu.bd/public/images/20250325072122.png", // Change if you have a different image
	},
	{
		name: "Md. Ismail Hossain",
		title: "Senior Officer & Secretary",
		email: "ismail.acc@kyau.edu.bd",
		phone: "111 (intercom)",
		room: "209 (Room No.)",
		imageUrl: "https://www.kyau.edu.bd/images/20250710061957.png", // Change if you have a different image
	},
];

const Treasurer = () => (
	<>
		<PageHeader title="Treasurer Office" />
		<div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8 mb-8">
			{profiles.map((profile) => (
				<div
					key={profile.email}
					className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden font-sans transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-[#020031]"
				>
					{/* Top Section: Image and Name */}
					<div className="flex flex-col items-center p-6 pb-4 bg-gray-50/30">
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
					<div className="border-t border-gray-100 bg-white px-6 py-5 space-y-3">
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
						{/* Room Number */}
						<div className="flex items-center space-x-3">
							<div className="shrink-0">
								<div className="p-1 bg-cyan-500 rounded-full text-white flex items-center justify-center">
									<MdLocationCity className="w-4 h-4" />
								</div>
							</div>
							<span className="text-gray-600 text-sm">{profile.room}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	</>

);

export default Treasurer;
