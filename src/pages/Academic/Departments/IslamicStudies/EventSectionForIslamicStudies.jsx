import React, { useState, useEffect } from "react";

const EventSectionForIslamicStudies = () => {
	// --- SLIDER LOGIC ---
	const slides = [
		{
			id: 1,
			image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop", // ডামি ইমেজ ১
			title: "ILAMIC STUDIES DEPARTMENT SLIDER CA",
		},
		{
			id: 2,
			image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop", // ডামি ইমেজ ২
			title: "ILAMIC STUDIES DEPARTMENT SLIDER CA",
		},
		{
			id: 3,
			image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop", // ডামি ইমেজ ৩
			title: "ILAMIC STUDIES DEPARTMENT SLIDER CA",
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	// অটো স্লাইড ইফেক্ট
	useEffect(() => {
		const slideInterval = setInterval(() => {
			setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(slideInterval);
	}, [slides.length]);

	// --- NOTICE DATA ---
	const notices = [
		{
			id: 1,
			title: "ILAMIC STUDIES_Class Routine Summer 2024_KYAU",
			date: "2024-07-03",
		},
		{
			id: 2,
			title: "Class Routine Spring 2024",
			date: "2024-01-30",
		},
		{
			id: 3,
			title: "Important Notice regarding class attendance",
			date: "2022-12-14",
		},
		{
			id: 4,
			title: "Class Routine, Summer-2022",
			date: "2022-06-15",
		},
		{
			id: 5,
			title: "Semester Final Exam Schedule 2022",
			date: "2022-05-20",
		},
		{
			id: 6,
			title: "Lab Exam Notice Fall 2021",
			date: "2021-11-10",
		},
	];

	return (
		<div className="w-full bg-white py-8">
			<div className="container mx-auto px-4">
				{/* মেইন গ্রিড লেআউট: ডেক্সটপে ২ কলাম, মোবাইলে ১ কলাম */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

					{/* --- LEFT SIDE: IMAGE SLIDER (lg:col-span-8) --- */}
					<div className="lg:col-span-8 w-full relative group overflow-hidden shadow-lg rounded-md border border-gray-200">
						{/* Slider Image Container */}
						<div
							className="w-full h-75 md:h-112.5 bg-cover bg-center transition-all duration-700 ease-in-out"
							style={{
								backgroundImage: `url(${slides[currentSlide].image})`,
							}}
						>
							{/* Overlay Gradient (Optional for better text visibility) */}
							<div className="absolute inset-0 bg-black/10"></div>
						</div>

						{/* Bottom Caption Overlay */}
						<div className="absolute bottom-0 w-full bg-black/70 py-3 md:py-4 px-4 text-center">
							<h2 className="text-lg md:text-2xl font-bold uppercase tracking-wide">
								<span className="text-[#4ade80]">ILAMIC STUDIES</span>{" "}
								<span className="text-[#ea580c]">DEPARTMENT SLIDER CA</span>
							</h2>

							{/* Dots Navigation */}
							<div className="flex justify-center mt-2 space-x-2">
								{slides.map((_, idx) => (
									<button
										key={idx}
										onClick={() => setCurrentSlide(idx)}
										className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-8 bg-white" : "w-2 bg-gray-500"
											}`}
									></button>
								))}
							</div>
						</div>

						{/* Left/Right Arrows (Optional) */}
						<button
							onClick={() =>
								setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
							}
							className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
						>
							&#10094;
						</button>
						<button
							onClick={() =>
								setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
							}
							className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
						>
							&#10095;
						</button>
					</div>

					{/* --- RIGHT SIDE: NOTICE BOARD (lg:col-span-4) --- */}
					<div className="lg:col-span-4 w-full h-75 md:h-112.5 bg-white border border-gray-300 shadow-lg rounded-md flex flex-col">
						{/* Notice Header */}
						<div className="bg-[#f3f4f6] py-3 border-b border-gray-300">
							<h3 className="text-center text-gray-700 font-bold text-lg md:text-xl">
								Notice and Upcoming Events
							</h3>
						</div>

						{/* Scrollable Notice List */}
						<div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
							<ul className="space-y-6">
								{notices.map((notice) => (
									<li key={notice.id} className="relative pb-4 border-b border-gray-200 last:border-0 last:pb-0">

										{/* Notice Title Row */}
										<div className="flex items-start gap-2 mb-2">
											{/* Orange Hand Icon */}
											<svg
												className="w-5 h-5 text-[#ea580c] mt-0.5 shrink-0"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M11.414 10l2.293-2.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L11.414 12H17a1 1 0 100-2h-5.586z" transform="rotate(180 10 10)" />
												<path d="M5 4a2 2 0 00-2 2v8a2 2 0 002 2h2a1 1 0 100-2H5V6h10v2a1 1 0 100-2H5z" />
											</svg>

											<a href="#" className="text-gray-800 font-semibold text-sm hover:text-[#ea580c] transition-colors leading-snug">
												{notice.title}
											</a>
										</div>

										{/* Date Row */}
										<div className="flex items-center gap-2 ml-7">
											{/* Green Calendar Icon */}
											<svg
												className="w-4 h-4 text-[#22c55e]"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												viewBox="0 0 24 24"
											>
												<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
												<line x1="16" y1="2" x2="16" y2="6"></line>
												<line x1="8" y1="2" x2="8" y2="6"></line>
												<line x1="3" y1="10" x2="21" y2="10"></line>
											</svg>
											<span className="text-gray-500 text-xs font-medium">
												{notice.date}
											</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>

				</div>
			</div>

			{/* Custom Scrollbar CSS (Optional Inline Style) */}
			<style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
		</div>
	);
};

export default EventSectionForIslamicStudies;
