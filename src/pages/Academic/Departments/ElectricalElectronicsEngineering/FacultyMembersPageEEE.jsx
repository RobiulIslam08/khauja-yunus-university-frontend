import React from 'react';
import { Phone, Mail, PhoneCall, Building } from 'lucide-react';
const facultyData = [
	{
		id: 1,
		name: "Dr. Ranajit Kumar Shaha",
		designation: "Professor",
		image: "https://www.kyau.edu.bd/images/rajaul.png",
		phone: "01712782680",
		email: "ranajit.bcbt@kyau.edu.bd",
		intercom: "127",
		room: "110 (Room No.)"
	},
	{
		id: 2,
		name: "Dr. Md. Tariqul Islam",
		designation: "Assistant Professor & Head",
		image: "https://www.kyau.edu.bd/images/razzak.png",
		phone: "1723075040",
		email: "tariqul.bcbt@kyau.edu.bd",
		intercom: "124",
		room: "110 (Room No.)"
	},
	{
		id: 3,
		name: "Rubait Hasan",
		designation: "Assistant Professor",
		image: "https://www.kyau.edu.bd/images/rubel.png",
		phone: "8.80173E+12",
		email: "rubait.biotech.bcbt@kyau.edu.bd",
		intercom: "127",
		room: "110 (Room No.)"
	},
	{
		id: 4,
		name: "Md. Abul Bashar",
		designation: "Assistant Professor",
		image: "https://www.kyau.edu.bd/images/20250213084845.png",
		phone: "01722456425",
		email: "bashar.textile@kyau.edu.bd",
		intercom: "127",
		room: "110 (Room No.)"
	}
];
const FacultyMembersPageEEE = () => {
	return (
		<div className="bg-white min-h-screen py-8">
			<div className="container mx-auto px-4 max-w-7xl">
				{/* --- Header Title Section --- */}
				<div className="mb-10 flex justify-center">
					<div className="border border-cyan-400 rounded-full px-8 py-3 w-full max-w-3xl text-center shadow-sm">
						<h2 className="text-xl md:text-2xl text-gray-600 font-medium">
							Faculty Members Department of EEE
						</h2>
					</div>
				</div>
				{/* --- Cards Grid Section --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{facultyData.map((member) => (
						<div
							key={member.id}
							className="bg-white border border-gray-200 rounded-sm p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
						>
							{/* Image with Cyan Border */}
							<div className="mb-4 relative">
								<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 p-0.5">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover rounded-full"
									/>
								</div>
							</div>
							{/* Name & Designation */}
							<div className="text-center mb-4 w-full">
								<h3 className="text-gray-800 font-bold text-base md:text-[15px] mb-1">
									{member.name}
								</h3>
								<p className="text-gray-500 text-sm font-medium">
									{member.designation}
								</p>
							</div>
							{/* Divider Line */}
							<div className="w-full border-t border-gray-100 mb-4"></div>
							{/* Contact Info List */}
							<div className="w-full space-y-3 px-2">
								{/* Mobile */}
								<div className="flex items-start gap-3">
									<Phone size={16} className="text-emerald-500 mt-1 shrink-0" />
									<span className="text-gray-600 text-sm break-all">{member.phone}</span>
								</div>
								{/* Email */}
								<div className="flex items-start gap-3">
									<Mail size={16} className="text-blue-500 mt-1 shrink-0" />
									<span className="text-gray-600 text-sm break-all hover:text-blue-600 cursor-pointer">
										{member.email}
									</span>
								</div>
								{/* Intercom */}
								<div className="flex items-start gap-3">
									<PhoneCall size={16} className="text-cyan-500 mt-1 shrink-0" />
									<span className="text-gray-600 text-sm">
										{member.intercom} (intercom)
									</span>
								</div>
								{/* Room */}
								<div className="flex items-start gap-3">
									<Building size={16} className="text-cyan-500 mt-1 shrink-0" />
									<span className="text-gray-600 text-sm">
										{member.room}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default FacultyMembersPageEEE;
