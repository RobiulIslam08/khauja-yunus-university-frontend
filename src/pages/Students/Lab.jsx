import React from "react";
import PageHeader from "../../components/common/PageHeader";

const Lab = () => (
	<>
		<PageHeader title="Univrsity Labs" />
		<div className="max-w-7xl mx-auto p-6 bg-white font-sans">

			{/* Top Introductory Text */}
			<div className="mb-8 space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
				<p>
					The University has its own laboratories for the Departments of Biochemistry & Biotechnology, Microbiology, Pharmacy, Textile Engineering, Medical Physics, Computer Science & Engineering (CSE), Electrical & Electronic Engineering (EEE), and Management Information System (MIS) and the proposed Mechatronics & Micro Mechatronics Engineering.
				</p>
				<p>
					The laboratories of each department are fully supported by university to ensure research-based learning of the students. Each laboratory is equipped with sophisticated research-based instruments ensuring state-of-the-art facilities for doing practical and research work for our students and faculty members
				</p>
			</div>

			{/* EEE Lab Section */}
			<div className="flex justify-center mt-16 mb-10">
				<h2 className="text-xl md:text-2xl text-gray-500 px-12 py-2 border border-cyan-400 rounded-full">
					Electrical & Electronics Engineering Lab
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
				{/* EEE Lab Image */}
				<div className="w-full h-full">
					<img
						src="https://www.kyau.edu.bd/images/eee-lab.jpg"
						alt="Electrical & Electronics Engineering Lab"
						className="w-full h-auto object-cover rounded shadow-sm"
					/>
				</div>
				{/* EEE Lab Text */}
				<div className="border border-gray-200 p-6 rounded-sm shadow-sm">
					<h3 className="text-lg font-bold text-gray-800 mb-4 pb-1 inline-block w-full" style={{ borderBottom: '1px solid #ff6347' }}>
						Department of EEE
					</h3>
					<div className="flex items-start gap-3 text-gray-700">
						<span className="mt-2 h-2 w-2 bg-black shrink-0"></span>
						<p className="leading-relaxed">
							The EEE Lab is equipped with modern instruments and experimental setups for electrical circuits, electronics, and power systems. Students gain hands-on experience in circuit design, microcontrollers, and electrical measurements, preparing them for careers in electrical and electronics engineering.
						</p>
					</div>
				</div>
			</div>

			{/* Microbiology Lab Section */}
			<div className="flex justify-center mt-16 mb-10">
				<h2 className="text-xl md:text-2xl text-gray-500 px-12 py-2 border border-cyan-400 rounded-full">
					Microbiology Lab
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
				{/* Microbiology Lab Image */}
				<div className="w-full h-full">
					<img
						src="https://www.kyau.edu.bd/images/microbiologyLab.jpeg"
						alt="Microbiology Lab"
						className="w-full h-auto object-cover rounded shadow-sm"
					/>
				</div>
				{/* Microbiology Lab Text */}
				<div className="border border-gray-200 p-6 rounded-sm shadow-sm">
					<h3 className="text-lg font-bold text-gray-800 mb-4 pb-1 inline-block w-full" style={{ borderBottom: '1px solid #ff6347' }}>
						Department of Microbiology
					</h3>
					<div className="flex items-start gap-3 text-gray-700">
						<span className="mt-2 h-2 w-2 bg-black shrink-0"></span>
						<p className="leading-relaxed">
							The Microbiology Lab provides students with the opportunity to study microorganisms using advanced microscopes and laboratory techniques. The lab supports research and practical learning in bacteriology, virology, and environmental microbiology, fostering a strong foundation in biological sciences.
						</p>
					</div>
				</div>
			</div>

			{/* Computer Lab Heading */}
			<div className="flex justify-center mb-10">
				<h2 className="text-xl md:text-2xl text-gray-500 px-12 py-2 border border-cyan-400 rounded-full">
					Computer Lab
				</h2>
			</div>

			{/* Content Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

				{/* Left: Image */}
				<div className="w-full h-full">
					<img
						src="https://www.kyau.edu.bd/images/cseLab.jpeg"
						alt="Computer Lab with rows of computers"
						className="w-full h-auto object-cover rounded shadow-sm"
					/>
				</div>

				{/* Right: Lab Facility Info */}
				<div className="border border-gray-200 p-6 rounded-sm shadow-sm">
					<h3
						className="text-lg font-bold text-gray-800 mb-4 pb-1 inline-block w-full"
						style={{ borderBottom: '1px solid #ff6347' }}
					>
						Lab Facility
					</h3>

					<div className="flex items-start gap-3 text-gray-700">
						<span className="mt-2 h-2 w-2 bg-black shrink-0"></span>
						<p className="leading-relaxed">
							Computer labs are fully equipped with systems and latest software with an environment to implement and experiment knowledge acquired in the classroom. All the systems have internet facility.
						</p>
					</div>
				</div>

			</div>
		</div>
	</>
)

export default Lab;
