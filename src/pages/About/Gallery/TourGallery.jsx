import React from "react";
import PageHeader from "../../../components/common/PageHeader";

const images = [
	"https://www.kyau.edu.bd/images/tour2.jpg",
	"https://www.kyau.edu.bd/images/tour1.jpg",
	"https://www.kyau.edu.bd/images/tour2.jpg",
	"https://www.kyau.edu.bd/images/tour1.jpg",
	"https://www.kyau.edu.bd/images/tour2.jpg",
	"https://www.kyau.edu.bd/images/tour1.jpg",
	"https://www.kyau.edu.bd/images/tour2.jpg",
	"https://www.kyau.edu.bd/images/tour1.jpg",
];

const TourGallery = () => (
	<>
		<PageHeader title="Tour Gallery" />
		<div className="py-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
				{images.map((src, idx) => (
					<div key={idx} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white">
						<img
							src={src}
							alt={`Tour Gallery ${idx + 1}`}
							className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
							loading="lazy"
						/>
					</div>
				))}
			</div>
		</div>
	</>
);

export default TourGallery;
