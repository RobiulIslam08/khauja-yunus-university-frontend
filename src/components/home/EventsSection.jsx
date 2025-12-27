"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Bell, Calendar } from "lucide-react"

export default function EventsSection() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [selectedDate, setSelectedDate] = useState("2025-10-30")

	const eventSlides = [
		{
			id: 1,
			image: "https://www.kyau.edu.bd/images/20250221053123.jpg",
			text: 'International Mother Language Day'
		},
		{
			id: 2,
			image: "https://www.kyau.edu.bd/images/20240217160654.jpg",
			text: 'International Mother Language Day'
		},
		{
			id: 3,
			image: "https://www.kyau.edu.bd/images/20240428164630.jpg",
			text: 'Workshop of Bangladesh Accreditation Council at Khawaja Yunus Ali University'
		},
		{
			id: 4,
			image: "https://www.kyau.edu.bd/images/20240213152556.jpg",
			text: 'Khwja Yunus Ali University 1st Convocation - 2024'
		},
	];

	const notices = [
		{
			id: 1,
			date: "2025-10-30",
			title: "NOTICE REGARDING DURGA PUJA HOLIDAY",
			description: "সকল পরীক্ষার্থী ও কর্মচারীদের জন্য দুর্গা পূজা ছুটির নোটিস প্রকাশিত হয়েছে।",
		},
		{
			id: 2,
			date: "2025-09-29",
			title: "মাধ্যমিক ও উচ্চ শিক্ষা বিজ্ঞাপনের শিক্ষাথেমে",
			description: "মাধ্যমিক ও উচ্চ শিক্ষা বিজ্ঞাপনের শিক্ষাথেমে উচ্চতর সেবা সম্প্রসারণ কর্মসূচি অগ্রবর্ণিত।",
		},
		{
			id: 3,
			date: "2025-09-15",
			title: "NOTICE FOR ADMISSION 2025",
			description: "আগামী সেমিস্টারের জন্য ভর্তি নোটিস প্রকাশিত হয়েছে। আরও তথ্যের জন্য অ্যাডমিশন অফিসে যোগাযোগ করুন।",
		},
	]

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % eventSlides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + eventSlides.length) % eventSlides.length)
	}

	const filteredNotices = notices.filter((notice) => notice.date.startsWith(selectedDate.substring(0, 7)))

	return (
		<section className="bg-white py-8">
			<div className="max-w-7xl mx-auto px-4">
				{/* Main Container */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Left Column - Events Carousel */}
					<div className="lg:col-span-2">
						{/* Header */}
						<div className="bg-[#020031] text-white rounded-t-3xl px-8 py-4">
							<h2 className="text-2xl font-bold text-center">Event, Program & News</h2>
						</div>

						{/* Carousel */}
						<div className="relative bg-gray-200 rounded-b-lg overflow-hidden">
							<div className="aspect-video w-full">
								<img
									src={eventSlides[currentSlide].image || "/placeholder.svg"}
									alt="Event"
									className="w-full h-full object-cover"
								/>
								{/* Navigation Arrows */}
								<button
									onClick={prevSlide}
									className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
									aria-label="Previous slide"
								>
									<ChevronLeft className="w-6 h-6" />
								</button>
								<button
									onClick={nextSlide}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
									aria-label="Next slide"
								>
									<ChevronRight className="w-6 h-6" />
								</button>
								{/* Slide Indicators */}
								<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
									{eventSlides.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentSlide(index)}
											className={`w-2 h-2 rounded-full transition ${index === currentSlide ? "bg-white w-8" : "bg-white/50"
												}`}
											aria-label={`Go to slide ${index + 1}`}
										/>
									))}
								</div>
							</div>
							{/* Text below image with gray bg */}
							<div className="w-full bg-gray-100 py-6 px-4 text-center">
								<span className="text-gray-800 text-base font-semibold">
									{eventSlides[currentSlide].text}
								</span>
							</div>
						</div>
					</div>

					{/* Right Column - Notice Sidebar */}
					<div className="lg:col-span-1">
						{/* Header */}
						<div className="bg-[#020031] text-white rounded-t-3xl px-6 py-4">
							<h2 className="text-xl font-bold text-center">Notice and Upcoming Events</h2>
						</div>

						{/* Date Filter */}
						<div className="bg-gray-50 border border-gray-200 px-6 py-4 flex items-center gap-3">
							<Calendar className="w-5 h-5 text-[#ff6b35]" />
							<input
								type="month"
								value={selectedDate.substring(0, 7)}
								onChange={(e) => setSelectedDate(`${e.target.value}-01`)}
								className="border-none bg-transparent text-sm font-semibold text-gray-900 outline-none"
							/>
						</div>

						{/* Notices List */}
						<div className="bg-white border border-t-0 border-gray-200 rounded-b-lg max-h-96 overflow-y-auto">
							{filteredNotices.length > 0 ? (
								<div className="divide-y">
									{filteredNotices.map((notice) => (
										<div key={notice.id} className="p-4 hover:bg-gray-50 transition">
											<div className="flex gap-3">
												<Bell className="w-5 h-5 text-[#ff6b35] shrink-0 mt-1" />
												<div className="flex-1 min-w-0">
													<p className="text-xs text-gray-500 mb-1">{notice.date}</p>
													<h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">{notice.title}</h3>
													<p className="text-xs text-gray-600 line-clamp-2">{notice.description}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							) : (
								<div className="p-8 text-center text-gray-500">
									<p>No notices for this month</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
