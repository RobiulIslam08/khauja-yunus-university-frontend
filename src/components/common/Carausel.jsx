import React, { useState, useEffect, useRef } from "react";

const slides = [
	{
		image: "https://www.kyau.edu.bd/images/20250119033535.jpg",
		text: "Welcome to Khawja Yunus Ali University!",
	},
	{
		image: "https://www.kyau.edu.bd/images/HomeSlider2.jpg",
		text: "Empowering Students for a Brighter Future.",
	},
	{
		image: "https://www.kyau.edu.bd/images/HomeSlider1.jpg",
		text: "Join Our Vibrant Campus Community.",
	},
];

export default function Carausel() {
	const [current, setCurrent] = useState(0);
	const timeoutRef = useRef(null);

	const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
	const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

	useEffect(() => {
		timeoutRef.current = setTimeout(nextSlide, 5000);
		return () => clearTimeout(timeoutRef.current);
	}, [current]);

	return (
		<div className="w-full  overflow-hidden relative">
			<div className="relative w-full h-80 sm:h-100 md:h-120 lg:h-135">
				<img
					src={slides[current].image}
					alt={slides[current].text}
					className="object-cover w-full h-full"
				/>
				{/* Overlay text and dots at the bottom of the image */}
				<div className="absolute bottom-0 left-0 w-full flex flex-col items-center bg-gray-800/80 pt-4 pb-6 px-4">
					<span className="text-white text-lg md:text-2xl font-semibold drop-shadow mb-2">
						{slides[current].text}
					</span>
					<div className="flex justify-center gap-2">
						{slides.map((_, idx) => (
							<button
								key={idx}
								onClick={() => setCurrent(idx)}
								className={`w-3 h-3 rounded-full border border-white ${idx === current ? "bg-green-600" : "bg-gray-300"}`}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>
				{/* Navigation buttons */}
				<button
					onClick={prevSlide}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
					aria-label="Previous Slide"
				>
					&#8592;
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
					aria-label="Next Slide"
				>
					&#8594;
				</button>
			</div>
			{/* ...dots moved inside image overlay... */}
		</div>
	);
}
