import React from "react";
import PageHeader from "../../../components/common/PageHeader";

const videos = [
	"https://www.kyau.edu.bd/images/footer-bg.png",
	"https://www.kyau.edu.bd/images/footer-bg.png",
	"https://www.kyau.edu.bd/images/footer-bg.png",
	"https://www.kyau.edu.bd/images/footer-bg.png",
];

const VideoGallery = () => (
	<>
		<PageHeader title="Video Gallery" />
		<div className="py-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
				{videos.map((src, idx) => (
					<div key={idx} className="relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white group">
						<img
							src={src}
							alt={`Video Thumbnail ${idx + 1}`}
							className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
							loading="lazy"
						/>
						{/* Play icon overlay */}
						<div className="absolute inset-0 flex items-center justify-center">
							<svg className="w-14 h-14 text-white bg-black bg-opacity-50 rounded-full p-2 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
								<path d="M8 5v14l11-7z" />
							</svg>
						</div>
					</div>
				))}
			</div>
		</div>
	</>
);

export default VideoGallery;
