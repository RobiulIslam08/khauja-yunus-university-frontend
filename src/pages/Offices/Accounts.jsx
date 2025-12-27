import React from "react";

import { MdEmail, MdPhone, MdLocationCity } from "react-icons/md";
import PageHeader from "../../components/common/PageHeader";

const profileData = {
	name: "Md. Elias Hossain",
	title: "Accounts Officer",
	email: "elias.acc@kyau.edu.bd",
	phone: "01617921362",
	room: "106 (Room No.)",
	// Update the image path as needed, or use a public/assets path
	imageUrl: "https://www.kyau.edu.bd/images/20241023053937.png"
};

const Accounts = () => (
	<>

		<PageHeader title="Account Office" />
		<div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden font-sans mt-8 mb-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-[#020031]">
			{/* Top Section: Image and Name */}
			<div className="flex flex-col items-center p-5 sm:p-6 pb-4 bg-gray-50/30">
				{/* Circular Image Container with Cyan Border */}
				<div className="w-32 h-32 rounded-full border-2 border-cyan-400 p-1 mb-3 overflow-hidden bg-white">
					<img
						className="w-full h-full object-cover rounded-full"
						src={profileData.imageUrl}
						alt={profileData.name}
						onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
					/>
				</div>
				{/* Name and Title */}
				<h2 className="text-lg font-bold text-gray-700 text-center">{profileData.name}</h2>
				<p className="text-gray-500 text-sm text-center font-medium">{profileData.title}</p>
			</div>

			{/* Bottom Section: Contact Details */}
			<div className="border-t border-gray-100 bg-white px-4 sm:px-6 py-4 sm:py-5 space-y-3 w-full">
				{/* Email */}
				<div className="flex items-center space-x-3">
					<div className="shrink-0">
						<div className="p-1 bg-cyan-500 rounded-full text-white flex items-center justify-center">
							<MdEmail className="w-4 h-4" />
						</div>
					</div>
					<span className="text-gray-600 text-sm">{profileData.email}</span>
				</div>
				{/* Phone */}
				<div className="flex items-center space-x-3">
					<div className="shrink-0">
						<div className="p-1 bg-cyan-500 rounded-full text-white flex items-center justify-center">
							<MdPhone className="w-4 h-4" />
						</div>
					</div>
					<span className="text-gray-600 text-sm">{profileData.phone}</span>
				</div>
				{/* Room Number */}
				<div className="flex items-center space-x-3">
					<div className="shrink-0">
						<div className="p-1 bg-cyan-500 rounded-full text-white flex items-center justify-center">
							<MdLocationCity className="w-4 h-4" />
						</div>
					</div>
					<span className="text-gray-600 text-sm">{profileData.room}</span>
				</div>
			</div>
		</div>
	</>
)

export default Accounts;
