import React from 'react';
import { GraduationCap, Sparkles, Clock } from 'lucide-react';

const NewsTicker = () => {
	return (
		<>
			<style>{`
        .news-ticker-marquee {
          display: flex;
          animation: ticker-marquee 30s linear infinite;
        }
        @keyframes ticker-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
			<div className="w-full bg-gray-100 border-b border-gray-200 my-3 md:my-4 lg:my-5">
				<div className="max-w-7xl mx-auto flex items-center h-10 overflow-hidden relative">

					{/* Left Side: Static Label */}
					<div className="bg-[#0a0040] text-white px-6 h-full flex items-center justify-center font-bold text-sm z-20 relative shadow-md whitespace-nowrap">
						Top News
					</div>

					{/* Right Side: Triangular arrow effect (Optional aesthetic) */}
					<div className="w-0 h-0 border-t-40 border-t-[#0a0040] border-r-20 border-r-transparent z-20 relative"></div>

					{/* Marquee Content Area */}
					<div className="flex-1 flex items-center overflow-hidden bg-white h-full relative">

						{/* Scrolling Text Wrapper */}
						<div className="overflow-hidden w-full" style={{ minWidth: '100%' }}>
							<div className="news-ticker-marquee whitespace-nowrap flex items-center gap-8 pl-4" style={{ minWidth: '200%' }}>
								{/* News Items (duplicated for seamless loop) */}
								<div className="flex items-center gap-8">
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<Clock size={16} className="text-gray-500" />
										<span className="text-gray-400 font-medium">Saturday (Closed)</span>
									</div>
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<Sparkles size={16} className="text-green-600" />
										<span>Admission Open ( SPRING - 2026 )</span>
									</div>
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<GraduationCap size={18} className="text-[#0a0040]" />
										<span>B.Sc. in Mechatronics Engineering</span>
									</div>
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<GraduationCap size={18} className="text-[#0a0040]" />
										<span>B.Sc. in Information and Communication Technology</span>
									</div>
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<Sparkles size={16} className="text-green-600" />
										<span>Apply Online for Fall Semester 2025</span>
									</div>
								</div>
								{/* Duplicate for seamless loop */}
								<div className="flex items-center gap-8">
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<Clock size={16} className="text-gray-500" />
										<span className="text-gray-400 font-medium">Saturday (Closed)</span>
									</div>
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<Sparkles size={16} className="text-green-600" />
										<span>Admission Open ( SPRING - 2026 )</span>
									</div>
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<GraduationCap size={18} className="text-[#0a0040]" />
										<span>B.Sc. in Mechatronics Engineering</span>
									</div>
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<GraduationCap size={18} className="text-[#0a0040]" />
										<span>B.Sc. in Information and Communication Technology</span>
									</div>
									<div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
										<Sparkles size={16} className="text-green-600" />
										<span>Apply Online for Fall Semester 2025</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsTicker;